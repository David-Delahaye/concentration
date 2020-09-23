import React,{Component} from 'react';
import '../styles/index.css'

function Ui (props){
    return(
    <div className='overlay'>
        <div className='menu'>
            <h1>Menu</h1>
            <button onClick={props.buildBoard}>Play</button>
        </div>
    </div>
    )
}

export default Ui