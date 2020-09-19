import React,{Component} from 'react';
import '../index.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            symbol : props.symbol,
            active : false,
            success: false,
        }
    }


    render(){
        if (this.state.success) return (<div className='card success' id={this.props.id}>{this.state.symbol}</div>)
        if (this.state.active) return (<div className='card' id={this.props.id}>{this.state.symbol}</div>)
        else return (<div className='card' id={this.props.id} onClick={() => {this.props.pickEvent(this)}}>?</div>)
    }
}

export default Card;