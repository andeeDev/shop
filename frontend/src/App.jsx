import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import HomePage from './pages/homepage/homepage.component';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404Page.component.jsx';

//Components
import Header from './components/header/header.component';
import AsideBar from './components/asideBar/asideBar.component';
import ProductPage from './pages/productpage/productpage.component';
import CategoryProductPage from './pages/categoryproductspage/categoryproductspage.component';
import SearchProductsPage from './pages/searchproductspage/searchProductspage.component';
// Styles
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <AsideBar />
                    <Switch>
                        <Route
                            exact
                            path="/categories/:id/products/"
                            render={props => <CategoryProductPage {...props} paginationProps={this.paginationProps} />}
                        />
                        <Route exact path="/products/:product_id" component={ProductPage} />
                        {/* Route will be implemented in next versions */
                        /* <Route exact path="/cart" component={HomePage}/>*/}
                        <Route exec path="/404" component={ErrorPage404} />
                        <Route
                            exact
                            path="/searchProducts"
                            render={props => <SearchProductsPage {...props} paginationProps={this.paginationProps} />}
                        />
                        <Route
                            exect
                            path="/"
                            render={props => <HomePage {...props} paginationProps={this.paginationProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
