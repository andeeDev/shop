import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="App-nav">
                <Link to={'/cart'}>
                    <Button className={'App-list-item App-list-cart'} variant="outlined" color="primary">
                        Cart
                    </Button>
                </Link>
                <Button className={'register-button'} variant="outlined" color="primary">
                    Register
                </Button>

            </nav>
        );
    }
}

export default Navigation;
