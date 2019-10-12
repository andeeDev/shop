import React, { Component } from "react";
import {
    Link, Route,
    useParams,
    useRouteMatch
} from 'react-router-dom'
// import PropTypes from 'prop-types';
import './ContentPart.css';
import getProductsByCategory from "../../services/Products";
import ProductCard from "../ProductCard/ProductCard";

class ContentPart extends Component {

    /*static propTypes = {
      customAttribute: PropTypes.string
  };

  static defaultProps = {
      customAttribute: '1'
  };*/

    state = {
        data: []
    };

    constructor(props){
        super(props);
    }
    /*static propTypes = {
      customAttribute: PropTypes.string
  };

  static defaultProps = {
      customAttribute: '1'
  };*/
    async componentWillReceiveProps(nextProps) {
        const { url } = this.props.match;
        const productsList = await getProductsByCategory(url);
        console.log("productsList = ", productsList.data.data[0]);
        //console.log("categList = ", categList.data.data);
        this.setState({ data: productsList.data.data} );
    }


    async componentDidMount() {
        const { url } = this.props.match;
        const productsList = await getProductsByCategory(url);
        console.log("productsList = ", productsList.data.data[0]);
        //console.log("categList = ", categList.data.data);
        this.setState({ data: productsList.data.data} );
    }
    render() {
        const { url } = this.props.match;
        console.log("url = ",this.state.data[0]);


        return (
            <main className="ContentPart">
                <h1 className="section-title">10 most wanted items</h1>
                <div className="ContentPart__Container">
                    {}
                    {
                        this.state.data.map( (product) => {
                                console.log(product.name);
                                return (


                                        <ProductCard key={product.id} title={product.name} />

                                    );

                        })
                    }
                </div>
            </main>
        );
    }
}

export default ContentPart;
