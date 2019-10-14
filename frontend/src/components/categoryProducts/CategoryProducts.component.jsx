import React, { Component } from "react";
import {
    Link, Route,
    useParams,
    useRouteMatch,
    withRouter
} from 'react-router-dom'
// import PropTypes from 'prop-types';
import './CategoryProducts.styles.scss';
import { getProductsByCategory } from "../../services/Products";
import ProductCard from "../ProductCard/ProductCard";

class CategoryProducts extends Component {

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
        const { url } = nextProps.match;
        console.log("my url = ", url);
        const productsList = await getProductsByCategory(url);
        console.log("my productsList = ", productsList );
        this.setState(() => ({ data: productsList.data.data} ));
    }


    async componentDidMount() {
        const { url } = this.props.match;
        const productsList = await getProductsByCategory(url);
        console.log("productsList = ", productsList.data.data[0]);
        //console.log("categList = ", categList.data.data);
        this.setState({ data: productsList.data.data} );

    }
    render() {
        /*const { url } = this.props.match;
        console.log("url = ",url);*/
        const { name } = this.props.location.state;
        console.log(name)

        return (
            <main className="ContentPart">
                <h1 className="section-title">{name}</h1>
                <div className="ContentPart__Container">
                    {
                        this.state.data.map( (product) => {
                                console.log(product);
                                return (
                                        <ProductCard key={product.id} title={product.name} id={product.id} price={product.price} />
                                    );
                        })
                    }
                </div>
            </main>
        );
    }
}

export default withRouter(CategoryProducts);
