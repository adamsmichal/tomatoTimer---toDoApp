import React, { Component } from 'react';
import Clock from './Clock/Clock';
import StartButton from './StartButton/StartButton';

class Timer extends Component {
    state = { 
        hr: 0,
        min: 30,
        sec: 10,
        active: false
    }
    
    //set interval and call counting function
    handleStartCountdown = () => {
        if(this.state.active) {
            clearInterval(this.idInterval);
        } else {
            this.idInterval = setInterval(() => this.counting(), 1000)
        }

        this.setState({
            active: !this.state.active,
        })
    }

    //start counting and make some noise when finish
    counting = () => {
        if(this.state.sec === 0) {
           if(this.state.min === 0) {
               if(this.state.hr === 0) {
                   clearInterval(this.idInterval);
               } else {
                   this.setState({
                       hr: this.state.hr - 1,
                       min: this.state.min + 59
                   })
               }
           } else {
               this.setState({
                   min: this.state.min -1,
                   sec: this.state.sec + 59,
               })
           }
        } else {
            this.setState({
                sec: this.state.sec - 1
            })
        }
    }

    render() { 
        const { hr, min, sec, active } = this.state;
        return (
            <React.Fragment>
                <Clock hr={hr} min={min} sec={sec}/>
                <StartButton active={active} startCounting={this.handleStartCountdown} />
            </React.Fragment>
        );
    }
}
 
export default Timer;