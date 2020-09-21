import React,{Component} from 'react';
import '../styles/index.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            active  : props.active,
            correct : props.correct,
            symbol  : props.symbol,
        }
    }

    render(){
        if (this.props.correct) return (<div className='card success' id={this.props.id}>{this.props.symbol}</div>)
        if (this.props.active) return (<div className='card active' id={this.props.id}>{this.props.symbol}</div>)
        else return (<div className='card' id={this.props.id} onClick={() => {this.props.pickEvent(this)}}>?</div>)
    }
}

export default Card;