import React,{Component} from 'react';
import '../styles/index.css'

function Ui (props){
    return(
    <div className='overlay'>
        <div className='menu'>
            <h2>Menu</h2>
            <button onClick={props.buildBoard}>Start a Game now!</button>
        </div>
    </div>
    )
}

export default Ui