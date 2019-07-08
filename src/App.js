import React, { Component } from 'react';
import styled from 'styled-components';

import Buttons from './components/Buttons';

const CalculatorContainer = styled.div `
    width: 400px;
    border: 5px solid darkgray;
    border-radius: 10px;
    padding: 10px;
    background-color: lightgray;
    font-family: Helevetica, sans-serif;
`

const StyledDisplay = styled.div `
    font-size: 50px;
    color: white;
    width: 390px;
    text-align: right;
    background-color: cornflowerblue;
    border-radius: 5px;
    padding-right: 10px;
`

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.determineAction = this.determineAction.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    clearDisplay() {
        this.setState({
            value: 0
        });
    }

    determineAction(button) {
        if (typeof button === 'number') {
            this.setState((currentState) => {
                return {
                    value: currentState.value * 10 + button
                }
            });
        }
        if (button === 'AC') {
            this.clearDisplay();
        }
    }

    render() {
        return (
            <CalculatorContainer>
                <StyledDisplay>
                    {this.state.value}
                    </StyledDisplay>
                <Buttons
                    handleDetermineAction={this.determineAction}
                />
            </CalculatorContainer>
        );
    }
}

export default App;
