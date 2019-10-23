import React from 'react';

import './categoryproductspage.styles.scss';

import CategoryProducts from '../../components/categoryProducts/CategoryProducts.component';

const CategoryProductPage = props => {
    const { id } = props.match.params;
    console.log(id);
    return (
        <div className="category-product-page">
            <CategoryProducts id={id}/>
        </div>
    );
};

export default CategoryProductPage;
