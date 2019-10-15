import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {
    NavLink
} from "react-router-dom";

import getAllCategories from '../../services/Categories'

import './asideBar.styles.scss';



class AsideBar extends Component {
    state = {
        data: []
    };

    async componentDidMount() {
        const categList = await getAllCategories();
        this.setState({ data: categList.data.data} );
    }

    render() {
        return (
            <aside className="App-aside">
                <nav className="App-aside-nav">
                    { this.state.data.map( (category) => {
                        return (
                            <NavLink activeClassName={'active-side-bar-link'}
                                key={`category_link_${category.id}`}
                                to={{
                                    pathname:`/categories/${category.id}/products/`,
                                    state: {
                                        name:category.name
                                    }
                                }}>
                                <Button  variant="contained" color="primary" >
                                    {category.name}
                                </Button>
                            </NavLink>
                        )
                    })}
                </nav>
            </aside>
        )
    }
}

export default AsideBar;
