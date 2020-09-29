import React,{Component} from 'react';
import '../styles/index.css'

function Ui (props){
    function gameStart(e){
        e.preventDefault()
        const diff = parseInt(e.target.difficulty.value);
        props.buildBoard(diff);
    }
    return(
    <div className='overlay'>
        <div className='menu'>
            <h2>Menu</h2>
            <p>Pair up Identical Plants</p>
            <form onSubmit={(e) => {gameStart(e)}}>
                <label>Easy
                <input type='radio' name='difficulty' value='8'/>
                </label>
                <label>Normal
                <input type='radio' name='difficulty' value='10'/>
                </label>
                <label>Hard
                <input type='radio' name='difficulty' value='12'/>
                </label>
                <button >Start a Game now!</button>
            </form>
        </div>
    </div>
    )
}

export default Ui