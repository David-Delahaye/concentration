import React,{Component} from 'react';
import Game from './Game';
import Ui from './Ui';
import '../styles/index.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            difficulty:12,
            active:false,
            characters:['a','b','c','d','e','f','g','h','i','j'],
            cards:[],
        }
    }

    buildBoard = async () => {
        const length = this.state.difficulty
        this.setState({active:false})
        let array = Array(length);
        for (let i = 0; i < length; i++) {
            const character = this.state.characters[Math.floor(i/2)];
            array[i] = {};
            array[i].symbol = character;
            array[i].correct = false;
            array[i].active = false;
        }
        array = this.shuffleArray(array);
        await this.setState({cards:array, active:true})
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

    endCondition() {
        console.log('won');
        this.setState({active:false})
    }

    render(){
        return(
            <div className='gamespace'>
            {!this.state.active ? <Ui buildBoard={() =>{this.buildBoard()}}/> : ''}
            {true === true ? <Game cards={this.state.cards} endCondition={() =>{this.endCondition()}}/> : '' }
            </div>
        )
    }
}

export default Menu;