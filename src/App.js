import React, { Component } from 'react';

import Buttons from './components/Buttons';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 0
        }
    }

    render() {
        return (
            <div className="calculator-container">
                <div className="display">
                    {this.state.initialValue}
                </div>
                <Buttons />
            </div>
        );
    }
}

export default App;
