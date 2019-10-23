import React from 'react';

import Product from '../../components/product/product.component';

import './productpage.styles.scss';

const ProductPage = props => {
    const { product_id } = props.match.params;
    return (
        <div className="product-page">
            <Product product_id={product_id} />
        </div>
    );
};

export default ProductPage;
