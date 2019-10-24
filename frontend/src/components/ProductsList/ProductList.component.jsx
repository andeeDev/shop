import React from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../productCard/productCard.component';
import PropTypes from 'prop-types';

const ProductList = props => {
    return (
        <React.Fragment>
            <div className="ContentPart__Container">
                {props.products.map(product => {
                    return <ProductCard key={product.id} title={product.name} id={product.id} price={product.price} />;
                })}
            </div>
            <div className="react-paginate">
                <ReactPaginate
                    {...props.paginationProps}
                    pageCount={props.pageCount}
                    forcePage={props.currentPage}
                    currentPage={props.currentPage}
                    onPageChange={props.handle}
                />
            </div>
        </React.Fragment>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    paginationProps: PropTypes.object.isRequired,
    pageCount: PropTypes.number.isRequired,
    handle: PropTypes.func.isRequired
};

ProductList.defaultProps = {
    products: [],
    forcePage: 0
};

export default ProductList;
