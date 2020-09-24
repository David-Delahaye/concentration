import React,{Component} from 'react';
import Game from './Game';
import Ui from './Ui';
import '../styles/index.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            difficulty:14,
            active:false,
            characters:[50, 50, 100, 100, 150, 150, 200, 200, 250, 250, 300, 300, 350, 350],
            plant:[0,0,1,1,2,2,0,0,1,1,2,2,0,0,1,1,2,2,0,0,1,1,2,2],
            cards:[],
        }
    }

    componentDidMount(){
        this.buildBoard();
        this.setState({active:false})
    }

    buildBoard = async () => {
        const length = this.state.difficulty
        this.setState({active:false})
        let array = Array(length);
        for (let i = 0; i < length; i++) {
            array[i] = {};
            array[i].symbol = this.state.characters[i];
            array[i].plant = this.state.plant[i];
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