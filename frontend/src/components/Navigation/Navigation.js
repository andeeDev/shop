import React, {Component} from "react";

class Navigation extends Component {

    render() {
        return(
            <nav className={"App-nav"}>
                <ul className={"App-nav-list"}>
                    <li key={8} className={"App-list-item App-list-button"}>Register</li>
                    <li key={9} className={"App-list-item App-list-cart"}>Cart</li>
                </ul>
            </nav>
        )
    }
}


export default Navigation;