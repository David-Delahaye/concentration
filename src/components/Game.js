import React,{useState} from 'react';
import Card from './Card';
import '../index.css'

function Game (){
    const [cards, setCards] = useState([])
    const [picked, setPicked] = useState([])
    const [correct, setCorrect] = useState([])
    let ticker;
    const letters = ['a','b','c','d','e','f','g','h','i','j']

    const buildBoard = async (length) =>{
        let array = Array(length);
        for (let i = 0; i < length; i++) {
            const character = letters[Math.floor(i/2)];
            array[i] = {};
            array[i].symbol = character;
            array[i].correct = false;
        }
        array = shuffleArray (array);
        console.log(array);
        await setCards(array)
        await console.log(cards);
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const pickEvent = (card) =>{
        clearTimeout(ticker)
        card.setState({active:true})

        const array = picked;
        array.push(card)
        setPicked(array);

        //ON TWO CARDS PICKED
        if (picked.length === 2) {
            document.body.classList.add('pointerOff')
            console.log(document.body);
            ticker = setTimeout(()=> {
            //CORRECT CHECK
            if(picked[0].state.symbol === picked[1].state.symbol){
                picked[0].setState({success:true})
                picked[1].setState({success:true})

                //ADD TO WIN LIST
                const array = cards;
                console.log(picked[0].props.id);
                console.log(picked[1].props.id);
                array[picked[0].props.id].correct = true;
                array[picked[1].props.id].correct = true;
                setCards(array);
                console.log(cards);

                //WIN CONDITION
                let isWin = true;
                for (let i = 0; i < cards.length; i++) {
                    if (cards[i].correct === false) isWin = false; 
                }
                if (isWin === true) alert('win')

            }
            //RESET THE TWO
            picked[0].setState({active:false})
            picked[1].setState({active:false})
            setPicked([ ])
            document.body.classList.remove('pointerOff')
            },400)
        }
    }

    let cardFormat = cards.map ((card,i) => {
        return(
            <Card key={i} id={i} pickEvent={pickEvent} symbol={card.symbol}/>
        )
    })

    return(
        <div>
            <div className='grid'>
                {cardFormat}
            </div>
        <button onClick={()=>{buildBoard(8)}}>Build board</button>
        </div>
    )

}

export default Game;