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
        if (this.props.cards !== prevState.cards){
            await this.setState({cards:this.props.cards})
        }
    }


    ticker = '';
    pickEvent = (card) =>{
        console.log(card);
        clearTimeout(this.ticker)
        this.state.cards[card.props.id].active = true;
        // card.setState({active:true})

        const array = this.state.picked;
        array.push(card)
        this.setState({picked:array})

        //ON TWO CARDS picked
        if (this.state.picked.length === 2) {
            document.body.classList.add('pointerOff')
            this.ticker = setTimeout(()=> {
            //CORRECT CHECK
            if(this.state.picked[0].props.symbol === this.state.picked[1].props.symbol){
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
            this.state.cards[this.state.picked[0].props.id].active = false;
            this.state.cards[this.state.picked[1].props.id].active = false;
            this.setState({picked:[]})
            document.body.classList.remove('pointerOff')
            },500)
        }
    }


    render(){
        let cardFormat = this.state.cards.map ((card,i) => {
            return(
                <Card id={i} correct={card.correct} active={card.active} pickEvent={this.pickEvent} symbol={card.symbol} plant={card.plant} pot={card.pot}/>
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