import React from 'react';
import './searchProducts.styles.scss';
import ProductCard from '../productCard/productCard.component';
import ReactPaginate from 'react-paginate';

class SearchProducts extends React.Component {
    render() {
        const { products, paginationProps, lastPage, currentPage, handle } = this.props;
        return (
            <div>
                <div className="ContentPart__Container">
                    {products.map(product => {
                        return (
                            <ProductCard key={product.id} title={product.name} id={product.id} price={product.price} />
                        );
                    })}
                </div>
                <div className="react-paginate">
                    <ReactPaginate
                        pageCount={lastPage}
                        currentPage={currentPage}
                        onPageChange={handle}
                        {...paginationProps}
                    />
                </div>
            </div>
        );
    }
}

export default SearchProducts;
