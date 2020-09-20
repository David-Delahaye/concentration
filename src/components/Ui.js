import React,{Component} from 'react';
import '../styles/index.css'

function Ui (props){
    return(
    <div className='menu'>
        <h1>Menu</h1>
        <button onClick={props.buildBoard}>Play</button>
    </div>
    )
}

export default Ui