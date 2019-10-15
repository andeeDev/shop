import React, { Component } from "react";
import {
    withRouter
} from 'react-router-dom'
import './CategoryProducts.styles.scss';
import { getProductsByCategory } from "../../services/Products";
import ProductCard from "../productCard/productCard.component";

class CategoryProducts extends Component {

    state = {
        data: []
    };

    async componentWillReceiveProps(nextProps) {
        const { url } = nextProps.match;
        const productsList = await getProductsByCategory(url);
        this.setState(() => ({ data: productsList.data.data} ));
    }


    async componentDidMount() {
        const { url } = this.props.match;
        const productsList = await getProductsByCategory(url);
        this.setState({ data: productsList.data.data});
    }


    render() {
        const { name } = this.props.location.state;
        return (
            <main className="ContentPart">
                <h1 className="section-title">{name}</h1>
                <div className="ContentPart__Container">
                    {
                        this.state.data.map( (product) => {
                                return (
                                        <ProductCard
                                            key={product.id}
                                            title={product.name}
                                            id={product.id}
                                            price={product.price} />
                                    );
                        })
                    }
                </div>
            </main>
        );
    }
}

export default withRouter(CategoryProducts);
