import React,{Component} from 'react';
import Game from './Game';
import '../index.css'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            difficulty:8,
            active:false,
            characters:['a','b','c','d','e','f','g','h','i','j'],
            cards:[],
        }
    }

    buildBoard = async (length) => {
        this.setState({active:false})
        let array = Array(length);
        for (let i = 0; i < length; i++) {
            const character = this.state.characters[Math.floor(i/2)];
            array[i] = {};
            array[i].symbol = character;
            array[i].correct = false;
        }
        array = this.shuffleArray(array);
        console.log(array);
        await this.setState({cards:array})
        console.log(this.state.cards);
        this.setState({active:true})
    }

    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    render(){
        return(
            <div>
            {this.state.active ? <Game cards={this.state.cards}/> : ''}
            <button onClick={()=>{this.buildBoard(this.state.difficulty)}}>Build board</button>
            </div>
        )
    }
}

export default Menu;