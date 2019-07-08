import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const ButtonsContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                'AC', '+/-', '%', '/',
                7, 8, 9, '*',
                4, 5, 6, '-',
                1, 2, 3, '+',
                ' ', 0, '.', '='
            ]
        }
    }

    render() {
        return (
            <ButtonsContainer>
                {this.state.buttons.map((button, index) => {
                    return (
                        <Button
                            button={button}
                            key={index}
                            handleDetermineAction={this.props.handleDetermineAction}
                        />
                    );
                })}
            </ButtonsContainer>
        );
    }
}

export default Buttons;
