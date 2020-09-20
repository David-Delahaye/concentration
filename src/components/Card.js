import React,{Component} from 'react';
import '../styles/index.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            active : false,
            success: false,
            symbol : props.symbol,
        }
    }

    async componentDidUpdate(prevState){
        if (this.state.symbol !== prevState.symbol){
            await this.setState({symbol:this.props.symbol})
        }
    }


    render(){
        if (this.state.success) return (<div className='card success' id={this.props.id}>{this.state.symbol}</div>)
        if (this.state.active) return (<div className='card active' id={this.props.id}>{this.state.symbol}</div>)
        else return (<div className='card' id={this.props.id} onClick={() => {this.props.pickEvent(this)}}>?</div>)
    }
}

export default Card;