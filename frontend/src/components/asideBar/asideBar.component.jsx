import React, {Component} from "react";

import './asideBar.styles.scss';

import getAllCategories from '../../services/Categories'
import Button from '@material-ui/core/Button';

import {
    Link,
    NavLink
} from "react-router-dom";


class AsideBar extends Component {
    constructor(props){
        super(props);

        // const data = getAllCategories();
        // console.log("com = ", data);
        // this.setState({data:data})

        /* list.then( (data) => {
            this.setState({data:data})
        }); */

        this.state = {
            /* id: null, */
            data: []
        };

    }

    /* componentDidMount() {
        const categList = getAllCategories().then((categList) => {
            console.log("categList = ", categList.data.data);

            this.setState({ data: categList.data.data} );
        })
    } */

    async componentDidMount() {
        const categList = await getAllCategories();
        this.setState({ data: categList.data.data} );
    }



    /* handleCategoryClick = id => () => {
         this.setState('id', id);
         history.push(`categories/${id}`);
    }; */


    render() {
        console.log(this.props);
        return (
            <aside className="App-aside">
                <nav className="App-aside-nav">
                    { this.state.data.map( (category) => {
                        console.log(category);
                        return (
                            <NavLink activeClassName={'active-side-bar-link'}

                                key={`category_link_${category.id}`}
                                to={{
                                    pathname:`/categories/${category.id}/products/`,
                                    state: {
                                        name:category.name
                                    }
                                }}


                            >
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
