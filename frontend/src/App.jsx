import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import HomePage from './pages/homepage/homepage.component';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404Page.component.jsx';
import CategoryProductPage from './pages/categoryproductspage/categoryproductspage.component';
import CartPage from './pages/CartPage/CartPage.component.jsx';
//Components
import Header from './components/header/header.component';
import AsideBar from './components/asideBar/asideBar.component';
import ProductPage from './pages/productpage/productpage.component';
import cloneDeep from 'clone-deep';
// Styles
import './App.css';
//Context
import CartContext from './context/CartContext';

class App extends Component {
    removeItem = id => () => {
        const cart = cloneDeep(this.state.cart);
        delete cart[id];
        this.setState({ cart }, () => {
            localStorage.setItem('cart', this.state.cart);
        });

    };

    componentDidMount() {
        //const cart = JSON.parse(localStorage.getItem('cart')|| {}) || [];
        this.state.user.gtoken = localStorage.getItem('gtoken') || '';
        this.state.user.ftoken = localStorage.getItem('ftoken') || '';
        /*this.setState({
            cart: cart
        });*/
        this.forceUpdate();
        console.log(localStorage);
        console.log("dfd = ", localStorage.getItem('cart'));
    }

    state = {
        /*cart: new Map([[1, 3], [2, 1]]),*/ //   1: 2, 2: 4
        cart: {},
        user: {
            authenticated: false,
            ftoken: '',
            gtoken: ''
        },
        minusItem: id => () => {
            const cart = cloneDeep(this.state.cart);
            cart[id] = cart[id] - 1;
            this.setState({ cart }, () => {
                localStorage.setItem('cart', this.state.cart);
            });
            // const object = Object.assign({}, this.state.cart);
            // this.setState(object, );
        },
        addItem: id => () => {
            // const o = {
            //     cart: {
            //         ...this.state.cart,
            //         [id]: (this.state.cart[id] || 0) + 1
            //     }
            // };
            // const cart = Object.assign({}, this.state.cart);
            // cart[id] = (this.state.cart[id] || 0) + 1;
            //this.setState(cart);
            const cart = cloneDeep(this.state.cart);
            cart[id] = (cart[id] || 0) + 1;
            this.setState({ cart }, () => {
                localStorage.setItem('cart', this.state.cart);
            });
        },
        removeItem: this.removeItem
    };

    paginationProps = {
        subContainerClassName: 'pages pagination',
        containerClassName: 'pagination',
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        activeClassName: 'active',
        previousLabel: 'previous',
        nextLabel: 'next',
        breakLabel: '...',
        breakClassName: 'break-me'
    };
    render() {
        return (
            <div className="App">
                <CartContext.Provider value={this.state}>
                    <Router>
                        <Header />
                        <AsideBar />
                        <Switch>
                            <Route
                                exact
                                path="/categories/:id/products/"
                                render={props => (
                                    <CategoryProductPage {...props} paginationProps={this.paginationProps} />
                                )}
                            />
                            <Route exact path="/products/:product_id" component={ProductPage} />
                            <Route exec path="/404" component={ErrorPage404} />
                            <Route
                                exact
                                path="/cart"
                                render={props => (
                                    <CartPage
                                        {...props}
                                        cart={this.state.cart}
                                        token={this.state.user.ftoken || this.state.user.ftoken}
                                    />
                                )}
                            />
                            <Route
                                exect
                                path="/"
                                render={props => <HomePage {...props} paginationProps={this.paginationProps} />}
                            />
                        </Switch>
                    </Router>
                </CartContext.Provider>
            </div>
        );
    }
}

export default App;
