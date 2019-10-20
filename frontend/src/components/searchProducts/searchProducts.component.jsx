import React from "react";
import {withRouter} from 'react-router-dom';
import './searchProducts.styles.scss';

class  SearchProducts extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log("search products = ", this.props);
        return (
            <div>


            </div>
        )
    }
};

export default withRouter(SearchProducts);
