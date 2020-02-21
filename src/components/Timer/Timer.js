import React, { Component } from 'react';
import Clock from './Clock/Clock';
import StartButton from './StartButton/StartButton';
import SettingsButton from './SettingsButton/SettingsButton';
import SettingsPopup from './SettingsPopup/SettingsPopup';
import niceSound from '../../assets/sound/niceSound.wav';

class Timer extends Component {
    state = { 
        hr: 0,
        min: 30,
        sec: 0,
        workHours: 0,
        workMinutes: 30,
        shortBreak: 7,
        longBreak: 15,
        counter: 1,
        breakTime: true,
        active: false,
        isOpen: false,
    }
    
    //set interval and call counting function
    handleStartButtonClick = () => {
        if(this.state.active) {
            clearInterval(this.idInterval);
        } else {
            this.idInterval = setInterval(() => this.countdown(), 1000)
        }

        this.setState({
            active: !this.state.active,
            isOpen: false
        })
    }

    playSound = () => {
        const audio = new Audio(niceSound);
        audio.play();
    }

    //start counting and make some noise when finish
    countdown = () => {
        if(this.state.sec === 0) {
           if(this.state.min === 0) {
               if(this.state.hr === 0) {
                   this.playSound();
                   clearInterval(this.idInterval);
                   this.setState({
                       active: !this.state.active
                   })
                   this.breakCountdown();
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

    //change clock value for break time and work time 
    breakCountdown = () => {
        if (this.state.breakTime) {
            if ((this.state.counter % 3) === 0) {
                this.setState({
                    hr: 0,
                    min: this.state.longBreak + this.props.doneTasks,
                    sec: 0,
                    breakTime: false,
                })
            } else {
                this.setState({
                    hr: 0,
                    min: this.state.shortBreak + this.props.doneTasks,
                    sec: 0,
                    breakTime: false,
                })
            }
        } else if (this.state.breakTime === false) {
            this.setState({
                hr: this.state.workHours,
                min: this.state.workMinutes,
                sec: 0,
                breakTime: true,
                counter: this.state.counter + 1,
            })
            this.props.resetAddTasks();
        }
    }

    //open and close settings popup(also checks if user can do it)
    handleSettingsButtonClick = () => {
        if (this.state.active === false) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    handleAddHrClick = () => {
        if (this.state.workHours < 5 && this.state.hr < 5){
            this.setState({
                hr: this.state.hr + 1,
                workHours: this.state.workHours + 1,
                sec: 0,
            })
        }
    }

    handleSubHrClick = () => {
        if (this.state.workHours > 0 && this.state.hr > 0) {
            this.setState({
                hr: this.state.hr - 1,
                workHours: this.state.workHours - 1,
                sec: 0, 
            })
        }
    }

    handleAddMinClick = () => {
        if (this.state.workMinutes < 60 && this.state.min < 60) {
            this.setState({
                min: this.state.min + 1,
                workMinutes: this.state.workMinutes + 1,
                sec: 0,
            })
        }
    }

    handleSubMinClick = () => {
        if (this.state.workMinutes > 1 && this.state.min > 1) {
            this.setState({
                min: this.state.min - 1,
                workMinutes: this.state.workMinutes - 1,
                sec: 0,
            })
        }
    }

    handleAddShortBreakClick = () => {
        if (this.state.shortBreak < 9) {
            this.setState({
                shortBreak: this.state.shortBreak + 1,
            })
        }
    }

    handleSubShortBreakClick = () => {
        if (this.state.shortBreak > 1) {
            this.setState({
                shortBreak: this.state.shortBreak - 1, 
            })
        }
    }

    handleAddLongBreakClick = () => {
        if (this.state.longBreak < 20) {
            this.setState({
                longBreak: this.state.longBreak + 1, 
            })
        }
    }

    handleSubLongBreakClick = () => {
        if (this.state.longBreak > 10) {
            this.setState({
                longBreak: this.state.longBreak - 1, 
            })
        }
    }

    render() { 
        const { active, } = this.state;
        return (
            <section className={'center-wrapper'}>
                <div className={'timer'}>
                    <Clock {...this.state}/>
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
                </div>
            </section>
        );
    }
}
 
export default Timer;