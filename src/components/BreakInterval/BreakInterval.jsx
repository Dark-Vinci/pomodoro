import React from 'react';
import classe from './break.module.css';

const BreakInterval = (props) => {
    const decreaseCounter = () => {
        if (props.breakInterval === 1) {
            return
        }

        props.decreaseBreak()
    }

    const increaseCounter = () => {
        if (props.breakInterval === 60) {
            return
        }

        props.increaseBreak();
    }

    return ( 
        <div className = { classe.container }>
            <p>break length</p>

            <div className={ classe.but }>
                <button 
                    onClick = { decreaseCounter }
                    disabled = { props.isPlay }
                >REDUCE</button>
                <button 
                    onClick = { increaseCounter }
                    disabled = { props.isPlay }
                >INCREASE</button>
            </div>

            <p
                className = { classe.dis }
            >{ props.breakInterval }</p>
        </div>
     );
}
 
export default BreakInterval;