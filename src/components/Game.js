import React,{Component, useState} from 'react';
import Card from './Card';
import '../index.css'

function Game (props){
    console.log(props);
    const [picked,setPicker] = useState([]);
    const [cards,setCards] = useState(props.cards);
    console.log(cards);
    let ticker = '';

    const pickEvent = (card) =>{
        clearTimeout(ticker)
        card.setState({active:true})

        const array = picked;
        array.push(card)
        setPicker(array)

        //ON TWO CARDS PICKED
        if (picked.length === 2) {
            document.body.classList.add('pointerOff')
            ticker = setTimeout(()=> {
            //CORRECT CHECK
            if(picked[0].state.symbol === picked[1].state.symbol){
                picked[0].setState({success:true})
                picked[1].setState({success:true})

                //ADD TO WIN LIST
                const array = cards;
                console.log(array);
                array[picked[0].props.id].correct = true;
                array[picked[1].props.id].correct = true;
                setCards(array)

                //WIN CONDITION
                let isWin = true;
                for (let i = 0; i < cards.length; i++) {
                    if (cards[i].correct === false) isWin = false; 
                }
                if (isWin === true) console.log('win');

            }
            //RESET THE TWO
            picked[0].setState({active:false})
            picked[1].setState({active:false})
            setPicker([])
            document.body.classList.remove('pointerOff')
            },400)
        }
    }

    const cardFormat = cards.map ((card,i) => {
        return(
            <Card key={i} id={i} pickEvent={pickEvent} symbol={card.symbol}/>
        )
    })


    return(
        <div>
            <div className='grid'>
                {cardFormat}
            </div>
        </div>
    )

}

export default Game;