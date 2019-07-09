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
            value: 0,
            decimal: false,
            operator: false
        }
        this.determineAction = this.determineAction.bind(this);
        this.setValue = this.setValue.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.togglePosNeg = this.togglePosNeg.bind(this);
        this.calculatePercentage = this.calculatePercentage.bind(this);
        this.addDecimalSymbol = this.addDecimalSymbol.bind(this);
        this.processOperator = this.processOperator.bind(this);
    }

    setValue(symbol) {
        this.setState((currentState) => {
            if (currentState.value === 0) {
                return {
                    value: currentState.value + symbol
                }
            } else {
                return {
                    value: parseFloat(currentState.value.toString() + symbol)
                }
            }
        });
    }

    clearDisplay() {
        this.setState({
            value: 0
        });
    }

    togglePosNeg() {
        this.setState({
            value: -(this.state.value)
        });
    }

    calculatePercentage() {
        this.setState({
            value: this.state.value / 100
        });
    }

    addDecimalSymbol() {
        this.setState((currentState) => {
            return {
                value: currentState.value + '.',
                decimal: true
            }
        });
    }

    processOperator(symbol) {
        console.log(symbol)
    }

    determineAction(symbol) {
        if (typeof symbol === 'number') {
            this.setValue(symbol);
            return;
        }
        if (symbol === 'AC') {
            this.clearDisplay();
            return;
        }
        if (symbol === '+/-') {
            this.togglePosNeg();
            return;
        }
        if (symbol === '%') {
            this.calculatePercentage();
            return;
        }
        if (symbol === '.' && !this.state.decimal) {
            this.addDecimalSymbol();
            return;
        }
        if (symbol === '=') {
            console.log(symbol);
            return;
        }
        this.processOperator(symbol);
    }

    render() {
        console.log(this.state.value);
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
