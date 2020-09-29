import React,{Component} from 'react';
import Game from './Game';
import Ui from './Ui';
import '../styles/index.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            difficulty:8,
            active:false,
            timer:15,
            cards:[],
        }
    }

    tick;
    timer = () => {
        clearInterval(this.tick);
        this.setState({timer:15})
        this.tick = setInterval(() => {
            this.setState({timer:this.state.timer-1})
        }, 1000);
    }

    componentDidMount(){
        this.buildBoard(this.state.difficulty);
        this.setState({active:false})
    }

    buildBoard = async (e) => {
        console.log(e);
        const length = e;
        console.log(length);
        this.setState({active:false})
        let array = Array(length);
        for (let i = 0; i < length; i = i+2) {
            let j = i+1;
            let color = Math.floor((i/length)*350);
            let plant = Math.round(Math.random()*2);
            let pot = Math.round(Math.random()*2);
            array[i] = {};
            array[i].symbol = color;
            array[i].plant = plant;
            array[i].pot = pot;
            array[i].correct = false;
            array[i].active = false;

            array[j] = {};
            array[j].symbol = color;
            array[j].plant = plant;
            array[j].pot = pot;
            array[j].correct = false;
            array[j].active = false;
        }
        array = this.shuffleArray(array);
        await this.setState({cards:array, active:true})
        this.timer()
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
        if (this.state.timer < 1) {
            this.timer()
            this.endCondition()
        }
        return(
            <div className='gamespace'>
            {!this.state.active ? <Ui buildBoard={(e) =>{this.buildBoard(e)}}/> : ''}
            {true ? <Game cards={this.state.cards} time={this.state.timer} endCondition={() =>{this.endCondition()}}/> : '' }
            {this.state.timer}
            </div>
            
        )
    }
}

export default Menu;