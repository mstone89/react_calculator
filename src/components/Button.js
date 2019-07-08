import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div `
    font-size: 30px;
    width: 98px;
    height: 50px;
    text-align: center;
    border: 1px solid gray;
`

class Button extends Component {
    render() {
        return (
            <StyledButton
                onClick={() => {
                    this.props.handleDetermineAction(this.props.button)
                }}
            >
                {this.props.button}
            </StyledButton>
        );
    }
}

export default Button;
