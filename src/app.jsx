import React, { Component } from 'react';
import classe from'./App.module.css';
import BreakInterval from './components/BreakInterval/BreakInterval';
import SessionLength from './components/sessionLength/SessionLength';
import Timer from './components/Timer/Timer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false,
            onBreak: false
        }
    }

    reset = () => {
        this.setState({
            timerMinute: this.state.sessionLength
        })
    }

    onIncreaseBreakLength = () => {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 1
            }
        });
    }

    onDecreaseBreakLength = () => {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength - 1
            }
        });
    }

    onIncreaseSessionLength = () => {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.timerMinute + 1
            }
        });
    }

    onDecreaseSessionLength = () => {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.timerMinute - 1
            }
        });
    }

    onUpdateTimerMinute = () => {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }

    onToggleInterval = (isSession) => {
        if (isSession) {
            this.setState({ 
                timerMinute: this.state.sessionLength,
                onBreak: false
            })
        } else {
            this.setState({ 
                timerMinute: this.state.breakLength,
                onBreak: true
            })
        }
    }

    onPlay = (play) => {
        this.setState({ 
            isPlay: play
        })
    }

    skipBreak = () => {
        if (this.state.onBreak) {
            this.setState({ 
                timerMinute: this.state.sessionLength 
            });
        }
    }

    render() { 
        return ( 
            <div className={ classe.App }>
                <div className={ classe.cont }></div>
                <Timer 
                    timerMinute = { this.state.timerMinute }
                    breakLength = { this.state.breakLength }
                    update = { this.onUpdateTimerMinute }
                    toggle = { this.onToggleInterval }
                    reset = { this.reset }
                    onPlay = { this.onPlay }
                    onBreak = { this.state.onBreak }
                    skipBreak = { this.skipBreak }
                />

                <BreakInterval 
                    isPlay = { this.state.isPlay }
                    breakInterval = { this.state.breakLength }
                    increaseBreak = { this.onIncreaseBreakLength }
                    decreaseBreak = { this.onDecreaseBreakLength }
                />

                <SessionLength 
                    isPlay = { this.state.isPlay }
                    sessionLength = { this.state.sessionLength }
                    increaseSession = { this.onIncreaseSessionLength }
                    decreaseSession = { this.onDecreaseSessionLength }
                />
            </div>
         );
    }
}
 
export default App;