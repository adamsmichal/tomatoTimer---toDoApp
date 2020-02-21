import React, { Component } from 'react';
import Instruction from './Instruction/Instruction';

class Header extends Component {
    state = {
        isOpen: true,
    }

    handleOpenButton = () => {
        this.setState({
            isOpen: true,
        })
    }

    handleCloseButton = () => {
        this.setState({
            isOpen: false,
        })
    }

    render() { 
        return (
        <header className={"header"}>
            <h3 className={'header__title'}>Tomatotimer</h3>
            <button className={'header__info'} onClick={this.handleOpenButton}></button>
            <Instruction isOpen={this.state.isOpen} closeInstructionPopup={this.handleCloseButton}/>
        </header>
        );
    }
}
 
export default Header;