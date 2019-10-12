import React, {Component} from 'react';
import Header from './components/Header/Header';
import AsideBar from './components/AsideBar/AsideBar';
import ContentPart from './components/ContentPart/ContentPart';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
/* ,
    Switch,
    Route,
    Link */

// import logo from './logo.svg';
import './App.css';
import getAllCategories from "./services/Categories";
import PopularItems from "./components/PopularItems/PopularItems";



function App() {

    /*async componentDidMount()  {
        const categList = await getAllCategories();
        console.log("categList = ", categList.data.data);
        this.setState({ data: categList.data.data} );
    }*/

    return (
        <div className="App">
            <Router>
                    <Header />
                    <AsideBar />  {/*ctgList={{ data: this.state.data }}*/}
                <Switch>

                    <Route exact path="/category/product/:id" component={ContentPart} />
                    <Route exact path="/" component={PopularItems}/>
                </Switch>

                {/*<ContentPart />*/}
            </Router>
        </div>
    );
}

/* <img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */

export default App;
