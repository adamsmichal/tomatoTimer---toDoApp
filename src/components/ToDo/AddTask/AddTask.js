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
            <div className="to-do-form">
                <input className={'to-do-form__text'} type="text" placeholder="add task" value={this.state.text} onChange={this.handleText}/>
                <input className={'to-do-form__check'} type="checkbox" id='important' checked={this.state.checked} onChange={this.handleCheckbox}/>
                <button className={'to-do-form__btn'} onClick={this.handleAddClick}>+</button>
            </div>
        );
    }
}
 
export default AddTask;