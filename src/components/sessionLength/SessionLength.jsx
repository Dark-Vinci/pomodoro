import React from 'react';
import classe from './session.module.css';

const SessionLength = (props) => {
    const increaseCounter = () => {
        if (props.sessionLength === 60) {
            return;
        }

        props.increaseSession()
    }

    const decreaseCounter = () => {
        if (props.sessionLength === 1) {
            return;
        }

        props.decreaseSession()
    }

    return ( 
        <div className = { classe.container }>
            <p>session length</p>

            <div className={ classe.but }>
                <button 
                    onClick = { decreaseCounter }
                    disabled = { props.isPlay }
                >DOWN</button>
                <button 
                    onClick = { increaseCounter }
                    disabled = { props.isPlay }
                >UP</button>
            </div>
            <p
                className = { classe.out }
            >{ props.sessionLength }</p>
        </div>
     );
}
 
export default SessionLength;