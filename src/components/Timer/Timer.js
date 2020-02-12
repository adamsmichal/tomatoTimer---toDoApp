import React, { Component } from 'react';
import Clock from './Clock/Clock';
import StartButton from './StartButton/StartButton';
import SettingsButton from './SettingsButton/SettingsButton';
import SettingsPopup from './SettingsPopup/SettingsPopup';

class Timer extends Component {
    state = { 
        hr: 0,
        min: 30,
        sec: 10,
        shortBreak: 7,
        longBreak: 15,
        active: false,
        isOpen: false,
    }
    
    //set interval and call counting function
    handleStartButtonClick = () => {
        if(this.state.active) {
            clearInterval(this.idInterval);
        } else {
            this.idInterval = setInterval(() => this.counting(), 1000)
        }

        this.setState({
            active: !this.state.active,
            isOpen: false
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

    //open and close settings popup(also when user can do it)
    handleSettingsButtonClick = () => {
        if (this.state.active === false) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    handleAddHrClick = () => {
        if (this.state.hr < 5){
            this.setState({
                hr: this.state.hr + 1,
            })
        }
    }

    handleSubHrClick = () => {
        if (this.state.hr >= 0) {
            this.setState({
                hr: this.state.hr - 1, 
            })
        }
    }

    handleAddMinClick = () => {
        if (this.state.min <= 60) {
            this.setState({
                min: this.state.min + 1, 
            })
        }
    }

    handleSubMinClick = () => {
        if (this.state.min > 0) {
            this.setState({
                min: this.state.min - 1, 
            })
        }
    }

    handleAddShortBreakClick = () => {
        if (this.state.shortBreak < 10) {
            this.setState({
                shortBreak: this.state.shortBreak + 1, 
            })
        }
    }

    handleSubShortBreakClick = () => {
        if (this.state.shortBreak > 0) {
            this.setState({
                shortBreak: this.state.shortBreak - 1, 
            })
        }
    }

    handleAddLongBreakClick = () => {
        if (this.state.shortBreak < 20) {
            this.setState({
                longBreak: this.state.longBreak + 1, 
            })
        }
    }

    handleAddLongBreakClick = () => {
        if (this.state.shortBreak > 10) {
            this.setState({
                longBreak: this.state.longBreak - 1, 
            })
        }
    }

    render() { 
        const { hr, min, sec, active } = this.state;
        return (
            <React.Fragment>
                <Clock hr={hr} min={min} sec={sec}/>
                <StartButton active={active} startCounting={this.handleStartButtonClick} />
                <SettingsButton openSettings={this.handleSettingsButtonClick} />
                <SettingsPopup 
                    {...this.state}
                    addHr={this.handleAddHrClick}
                    subHr={this.handleSubHrClick}
                    addMin={this.handleAddMinClick}
                    subMin={this.handleSubMinClick}
                    addShortBreak={this.handleAddShortBreakClick}
                    subShortBreak={this.handleSubShortBreakClick}
                    addLongBreak={this.handleAddLongBreakClick}
                    subLongBreak={this.handleSubLongBreakClick}
                />
            </React.Fragment>
        );
    }
}
 
export default Timer;