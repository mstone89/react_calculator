import React, { Component } from 'react';
import styled from 'styled-components';

import Buttons from './components/Buttons';

const CalculatorContainer = styled.div `
    width: 400px;
    border: 5px solid darkgray;
    border-radius: 10px;
    padding: 10px;
    background-color: lightgray;
`

const StyledDisplay = styled.div `
    font-size: 50px;
    color: white;
    width: 400px;
    text-align: right;
    background-color: cornflowerblue;
    border-radius: 5px;
`

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 0
        }
    }

    render() {
        return (
            <CalculatorContainer>
                <StyledDisplay>{this.state.initialValue}</StyledDisplay>
                <Buttons />
            </CalculatorContainer>
        );
    }
}

export default App;
