import React, { Component } from 'react';
import Timer from './Timer/Timer';
import ToDo from './ToDo/ToDo';
import Header from './Header/Header';

class App extends Component {

    state = {
        doneTasks: 0,
    }

    addDoneTasks = () => {
        this.setState({
            doneTasks: this.state.doneTasks + 1,
        })
    }
    
    resetAddTasks = () => {
        this.setState({
            doneTasks: 0,
        })
    }

    render() {

        return(
            <React.Fragment>
                <Header />
                <Timer 
                    doneTasks={this.state.doneTasks}
                    resetAddTasks={this.resetAddTasks}
                />
                <ToDo 
                    addDoneTasks={this.addDoneTasks} 
                />
            </React.Fragment>
        )
    }
}

export default App;
