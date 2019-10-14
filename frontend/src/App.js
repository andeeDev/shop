import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
// Pages
import HomePage from "./pages/homepage/homepage.component";
//Components
import Header from './components/header/header.component';
import AsideBar from "./components/asideBar/asideBar.component";
import ProductPage from "./pages/productpage/productpage.component";
import CategoryProductPage from "./pages/categoryproductspage/categoryproductspage.component";
// Styles
import './App.css';





function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <AsideBar />
                <Switch>
                    <Route exact path="/categories/:id/products/" component={CategoryProductPage} />
                    <Route exact path="/products/:product_id" component={ProductPage} />
                    {/* <Route exact path="/cart" component={HomePage}/>*/}
                    <Route exect path="/" component={HomePage}/>
                </Switch>
            </Router>
        </div>
    );
}


export default App;
