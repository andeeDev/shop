import React, {Component} from "react";
import Navigation from "../navigation/navigation.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

import './header.styles.scss';
import SearchForm from "../searchForm/searchForm.component";

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
                <SearchForm />
                <Navigation />
            </header>
        )
    }
}

export default Header;
