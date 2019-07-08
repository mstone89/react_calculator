import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 0
        }
    }

    render() {
        return (
            <div>{this.state.initialValue}</div>
        );
    }
}

export default Display;
