import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { getPopularProducts } from '../../services/Products';
import ProductCard from '../productCard/productCard.component';
import './popularItems.styles.scss';
import PropTypes from 'prop-types';



const PopularItems = (props) => {
        return (
            <main className="popular-items">
                <h1 className="section-title">Popular items</h1>
                <div className="ContentPart__Container">
                    {props.products.map(product => {
                        return (
                            <ProductCard key={product.id} title={product.name} id={product.id} price={product.price} />
                        );
                    })}
                </div>
                <div className="react-paginate">
                    <ReactPaginate
                        {...props.paginationProps}
                        pageCount={props.pageCount}
                        currentPage={props.currentPage}
                        onPageChange={props.handle}

                    />
                </div>
            </main>
        );
}

PopularItems.propTypes = {
    products: PropTypes.array.isRequired,
    paginationProps: PropTypes.object.isRequired,
    pageCount: PropTypes.number.isRequired,
    handle: PropTypes.func.isRequired
};

PopularItems.defaultProps = {
    products: []
};

export default PopularItems;
