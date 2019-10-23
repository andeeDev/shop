import React, { Component } from 'react';
import { withRouter,  Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { getProduct } from '../../services/Products';

import './product.styes.scss';

class Product extends Component {
    state = {
        product: {}
    };

    async componentDidMount() {
        const { product_id } = this.props.match.params;
        const productData = await getProduct(product_id);
        const [ product] = productData.data.data;
        this.setState({ product });
    }


    render() {
        if (!this.state.product){
            return <Redirect to={{
                pathname: '/'
            }} />;
        }
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
