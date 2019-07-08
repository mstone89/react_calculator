import React, { Component } from 'react';
import styled from 'styled-components';

import Buttons from './components/Buttons';

const CalculatorContainer = styled.div `
    width: 400px;
`

const StyledDisplay = styled.div `
    font-size: 50px;
    width: 400px;
    text-align: right;
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
