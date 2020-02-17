import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleAddClick = (e) => {
        const {text, checked} = this.state
        const add = this.props.addTask(text, checked);
        if (add) {
            this.setState({
                text: '',
                checked: false,
            })
        }
    }

    render() { 
        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
                <input type="checkbox" id='important' checked={this.state.checked} onChange={this.handleCheckbox}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <button onClick={this.handleAddClick}>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;