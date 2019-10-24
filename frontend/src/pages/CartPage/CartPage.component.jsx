import React, { Component } from 'react';
import './CartPage.styles.scss';
import CartContext from './../../context/CartContext';


class CartPage extends Component {
    state = {

    };

    render() {
        return (
            <CartContext.Consumer>
                {
                    ({cart}) => (
                        <div>
                            {cart.get(1)}
                        </div>
                    )
                }
            </CartContext.Consumer>

        )
    }
}

export default CartPage;
