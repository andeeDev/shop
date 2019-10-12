import React, {Component} from "react";

import '../AsideBar/AsideBar.css';
import getAllCategories from '../../services/Categories'
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


class AsideBar extends Component {
    state = {
        /* id: null, */
        data: []
    };

    constructor(props){
        super(props);
        //const data = getAllCategories();
        //console.log("com = ", data);
        //this.setState({data:data})
        /*list.then( (data) => {
            this.setState({data:data})


        });*/
    }
   /* componentDidMount() {
        const categList = getAllCategories().then((categList) => {
            console.log("categList = ", categList.data.data);

            this.setState({ data: categList.data.data} );
        })
    }*/
    async componentDidMount() {
        const categList = await getAllCategories();
        //console.log("categList = ", categList.data.data);
        this.setState({ data: categList.data.data} );
    }



    handleCategoryClick = id => () => {
        // this.setState('id', id);
        //  history.push(`categories/${id}`);
    };


    render() {
        console.log(this.props);
        return (
            <aside className="App-aside">
                <nav className="App-aside-nav">
                        { this.state.data.map( (m, i) => {
                            console.log(m);
                            return (
                                <Link  to={`/category/product/${m.id}`}>
                                    {/* onClick={this.handleCategoryClick(m.id)} */}
                                    <Button key={m.id} variant="contained" color="primary" >
                                        {m.name}
                                    </Button>
                                </Link>
                            )
                        }) }

                </nav>
            </aside>

        )

    }
}

export default AsideBar;
