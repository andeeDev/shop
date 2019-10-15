import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Navigation extends Component {
    render() {
        return (
            <nav className="App-nav">
                <Button className={'App-list-item App-list-cart'} variant="outlined" color="primary">
                    Cart
                </Button>
                <Button variant="outlined" color="primary">
                    Register
                </Button>
            </nav>
        );
    }
}

export default Navigation;
