import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div `
    font-size: 30px;
    width: 98px;
    height: 50px;
    text-align: center;
    border: 1px solid gray;
`

const Button = (props) => {
    return (
        <StyledButton
            onClick={() => {
                props.handleDetermineAction(props.button)
            }}
        >
            {props.button}
        </StyledButton>
    );
}

export default Button;
