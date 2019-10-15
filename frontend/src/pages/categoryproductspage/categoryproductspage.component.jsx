import React from 'react';

import './categoryproductspage.styles.scss';

import CategoryProducts from '../../components/categoryProducts/CategoryProducts.component';

const CategoryProductPage = () => {
    return (
        <div className="category-product-page">
            <CategoryProducts />
        </div>
    );
};

export default CategoryProductPage;
