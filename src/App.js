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
            initialValue: 0,
            updatedValue: ''
        }
        this.determineAction = this.determineAction.bind(this);
    }

    determineAction(button) {
        if (typeof button === 'number') {
            this.setState((currentState) => {
                return {
                    updatedValue: currentState.updatedValue + button
                }
            });
        }
    }

    render() {
        return (
            <CalculatorContainer>
                <StyledDisplay>
                    {
                        this.state.updatedValue
                        ?  this.state.updatedValue
                        : this.state.initialValue
                    }
                    </StyledDisplay>
                <Buttons
                    handleDetermineAction={this.determineAction}
                />
            </CalculatorContainer>
        );
    }
}

export default App;
