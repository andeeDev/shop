import React, { Component } from 'react';
import './CartPage.styles.scss';
import CartContext from './../../context/CartContext';
import { getProducts } from '../../services/Products';
import CartItem from '../../components/CartItem/CartItem.component';
import Button from '@material-ui/core/Button';

class CartPage extends Component {
    state = {
        productsInCart: [],
        cart: []
    };


    async componentDidMount() {
        /*const { cart } = this.props;
        const productsList = await getProducts({productsId: Array.from(cart.keys())});
        const data = productsList.data;
        this.setState({productsInCart: data.data});*/
        const { cart } = this.props;
        console.log("did mount = ", this.props);

        if(Object.keys(cart).length !== 0){
            const productsList = await getProducts({ productsId: Array.from(Object.keys(cart)) });
            const data  = productsList.data;


            this.setState({productsInCart: data.data, cart: cart});
        }
        else {
            this.setState({productsInCart:[], cart: []});

        }

    }

    async componentDidUpdate(prevProps, prevState) {
        console.log("prev = ", prevProps.cart);
        console.log("this  = ", this.props.cart);
        const { cart } = this.props;
        const { cart: cartPrev  } = prevProps;
        console.log(this.state.productsInCart);
        console.log(Object.keys(cart).length);
        if(Object.keys(cart).length !== 0 && prevProps !== this.props) {
            const productsList = await getProducts({productsId: Array.from(Object.keys(cart))});
            const { data }  = productsList.data;
            this.setState(() => ({productsInCart: data}));
        }
        if(Object.keys(cart).length === 0 && prevProps !== this.props) {
            this.setState(() => ({productsInCart: []}));
        }
    }



    render() {

        const { productsInCart } = this.state;
        if(Object.keys(this.state.cart).length)
        return (
            <div className="cart-container">
                {
                    <CartContext.Consumer>
                        {(context) => {
                            return productsInCart.map(product => {
                                return <CartItem key={product.id} context={context} product={product} />;
                            });
                        }}
                    </CartContext.Consumer>
                }
                <div className='send-cart'>
                    <label htmlFor="address">
                    <input  id="address" type='text' placeholder="address"/>
                    </label>
                    <Button variant="contained" color="primary" >
                        Proceed order
                    </Button>
                    </div>
            </div>
        );
        return (
            <h1>Cart is empty</h1>
        )
    }
}

export default CartPage;
