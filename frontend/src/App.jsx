import React, { Component, createContext } from 'react';
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
// Styles
import './App.css';
//Context
import CartContext from './context/CartContext';

class App extends Component {
    state = {
        cart: new Map([[1, 3], [2, 1]]),
        user: {
            name: '',
            token: '',
            address: ''
        }
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
                            <Route exact path="/cart" component={CartPage} />
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
