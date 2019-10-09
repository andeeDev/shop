import React, {Component} from "react";
import Navigation from "./Navigation";
//import logo from '../assets/logo.svg';
import './header.css';

class Header extends Component {

    render() {
        return (
           <header className="App-header">
               <img className="App-logo" width="200" height="75" src={"https://static.rozetka.com.ua/assets/img/design/logo_n.svg"} alt="logo" />
               <Navigation />
           </header>
        )
    }
}

export default Header;