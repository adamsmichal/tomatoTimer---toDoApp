import React, { Component } from 'react';
import Timer from './Timer/Timer';
import ToDo from './ToDo/ToDo';

class App extends Component {

    state = {
        
    }

    render() {

        return(
            <React.Fragment>
                <Timer/>
                <ToDo />
            </React.Fragment>
        )
    }
}

export default App;
