import React from 'react';
import './searchProducts.styles.scss';
import ProductCard from '../productCard/productCard.component';
import ReactPaginate from 'react-paginate';

class SearchProducts extends React.Component {
    paginationProps = {
        subContainerClassName: 'pages pagination',
        containerClassName: 'pagination',
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        activeClassName: 'active',
        previousLabel: 'previous',
        nextLabel: 'next',
        breakLabel: '...',
        breakClassName: 'break-me'
    };
    render() {
        const { products, lastPage, currentPage, handle } = this.props;
        return (
            <div>
                <div className="ContentPart__Container">
                    {
                        products.map(({ id, name, price }) => <ProductCard key={id} title={name} id={id} price={price} />)
                    }
                </div>
                <div className="react-paginate">
                    <ReactPaginate
                        pageCount={lastPage}
                        currentPage={currentPage}
                        onPageChange={handle}
                        {...this.paginationProps}
                    />
                </div>
            </div>
        );
    }
}

export default SearchProducts;
