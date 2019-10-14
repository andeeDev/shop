import React, {Component} from "react";
import Navigation from "../navigation/navigation.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import './header.styles.scss';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
                <Navigation />
            </header>
        )
    }
}

export default Header;
