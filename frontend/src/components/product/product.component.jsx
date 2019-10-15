import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { getProduct } from '../../services/Products';

import './product.styes.scss';

class Product extends Component {
    state = {
        product: {}
    };

    async componentDidMount() {
        const { url } = this.props.match;
        const productData = await getProduct(url);
        this.setState({ product: productData.data.data[0] });
    }

    render() {
        const { id, name, desc, price } = this.state.product;
        return (
            <div className="product-container">
                <div className="image-container">
                    <img src={`https://picsum.photos/id/${id}/800/500`} width="800" height="500" alt="" />
                </div>
                <div className="item-info">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <span> {price}</span>
                    <Button variant="contained" color="secondary">
                        Add to cart
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Product);
