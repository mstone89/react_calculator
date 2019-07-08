import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div `
    font-size: 20px;
    width: 100px;
    text-align: center;
`

class Button extends Component {
    render() {
        return (
            <StyledButton>
                {this.props.button}
            </StyledButton>
        );
    }
}

export default Button;
