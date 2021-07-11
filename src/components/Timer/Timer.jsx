import React, { Component } from 'react';
import classe from './timer.module.css'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSession: true,
            timerSecond: 0,
            intervalId: 0
         }
    }

    play = () => {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.setState({
            intervalId: intervalId
        });
        this.props.onPlay(true)
    }

    decreaseTimer = () => {
        switch ( this.state.timerSecond ) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        });

                        this.props.toggle(false)
                    } else {
                        this.setState({
                            isSession: true
                        });

                        this.props.toggle(true);
                    }
                } else {
                    this.props.update()
                    this.setState({
                        timerSecond: 59
                    })
                }
                break;

            default:
                this.setState( (prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stop = () => {
        clearInterval(this.state.intervalId);
        this.props.onPlay(false);
    }

    reset = () => {
        this.stop();
        this.setState({
            timerSecond: 0,
            isSession: true
        });
        this.props.reset();
        this.props.onPlay(false);
    }

    skip = () => {
        if (!this.state.isSession) {
            this.reset()
            this.play()
        }
    }

    render() { 
        return ( 
            <div className={ classe.container }>
                <h3>Hello Pomodoro</h3>
                <div className={ classe.box }>
                    <p>{ this.state.isSession ? "session" : "break" }</p>
                    <div>
                        <span> { this.props.timerMinute } : </span> 
                        <span> 
                            { this.state.timerSecond === 0 ? "00" : 
                            this.state.timerSecond < 10 ? "0" + this.state.timerSecond:
                            this.state.timerSecond } 
                        </span>
                    </div>
                </div>

                <div className={ classe.action }>
                    <button onClick = { this.play }>PLAY</button>
                    <button onClick = { this.stop }>STOP</button>
                    <button onClick = { this.reset }>REFRESH</button>
                </div>

                <div className = { classe.skip }>
                    <button
                        onClick = { this.skip }
                        disabled = { this.state.isSession }
                    >skip break</button>
                </div>
            </div>
        );
    }
}
 
export default Timer;