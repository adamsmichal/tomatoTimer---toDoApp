import React, { Component } from 'react';
import Timer from './Timer/Timer';

class App extends Component {

    state = {
        isBreakTime: false,
    }

    render() {

        const {isBreakTime} = this.state;
        return(
            <React.Fragment>
                <Timer/>
            </React.Fragment>
        )
    }
}

export default App;
