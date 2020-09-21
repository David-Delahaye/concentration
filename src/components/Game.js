import React,{Component, useState} from 'react';
import Card from './Card';
import '../styles/index.css'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            picked : [],
            cards : [this.props.cards],
        }
    }
    async componentDidMount(){
        this.setState({cards:this.props.cards})
    }

    async componentDidUpdate(prevState){
        console.log('update');
        if (this.props.cards !== prevState.cards){
            console.log('update2');
            await this.setState({cards:this.props.cards})
            console.log(this.state.cards);
        }
    }


    ticker = '';
    pickEvent = (card) =>{
        clearTimeout(this.ticker)
        card.setState({active:true})

        const array = this.state.picked;
        array.push(card)
        this.setState({picked:array})

        //ON TWO CARDS picked
        if (this.state.picked.length === 2) {
            document.body.classList.add('pointerOff')
            this.ticker = setTimeout(()=> {
            //CORRECT CHECK
            if(this.state.picked[0].state.symbol === this.state.picked[1].state.symbol){
                this.state.picked[0].setState({success:true})
                this.state.picked[1].setState({success:true})

                //ADD TO WIN LIST
                const array = this.state.cards;
                array[this.state.picked[0].props.id].correct = true;
                array[this.state.picked[1].props.id].correct = true;
                this.setState({cards:array})

                //WIN CONDITION
                let isWin = true;
                for (let i = 0; i < this.state.cards.length; i++) {
                    if (this.state.cards[i].correct === false) isWin = false; 
                }
                if (isWin === true) this.props.endCondition()

            }
            //RESET THE TWO
            this.state.picked[0].setState({active:false})
            this.state.picked[1].setState({active:false})
            this.setState({picked:[]})
            document.body.classList.remove('pointerOff')
            },400)
        }
    }


    render(){
        let cardFormat = this.state.cards.map ((card,i) => {
            return(
                <Card id={i} correct={card.correct} active={card.active} pickEvent={this.pickEvent} symbol={card.symbol}/>
            )
        })

    return(
        <div className='grid'>
            {cardFormat}
        </div>
    )
    }

}

export default Game;