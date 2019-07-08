import React, { Component } from 'react';

import Button from './Button';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                'AC', '+/-', '%', '/',
                7, 8, 9, '*',
                4, 5, 6, '-',
                1, 2, 3, '+',
                'null', 0, '.', '='
            ]
        }
    }

    render() {
        return (
            <div className="buttons-container">
                {this.state.buttons.map((button, index) => {
                    return (
                        <Button
                            button={button}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Buttons;
