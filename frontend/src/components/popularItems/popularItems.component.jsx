import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { getPopularProducts } from '../../services/Products';
import ProductCard from '../productCard/productCard.component';
import './popularItems.styles.scss';

class PopularItems extends Component {
    state = {
        products: [],
        pageCount: 1,
        currentPage: 1
    };

    async componentDidMount() {
        const popularProducts = await getPopularProducts();
        this.setState({
            products: popularProducts.data.data,
            pageCount: popularProducts.data.meta.last_page,
            currentPage: popularProducts.data.meta.current_page
        });
    }

    handlePaginationChange = async ({ selected }) => {
        const popularProducts = await getPopularProducts({ page: selected + 1 });
        const { last_page, current_page } = popularProducts.data.meta;
        const { data } = popularProducts.data;
        this.setState({ products: data, pageCount: last_page, currentPage: current_page });
    };

    render() {
        const paginationProps = {
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
        return (
            <main className="popular-items">
                <h1 className="section-title">Popular items</h1>
                <div className="ContentPart__Container">
                    {this.state.products.map(product => {
                        return (
                            <ProductCard key={product.id} title={product.name} id={product.id} price={product.price} />
                        );
                    })}
                </div>
                <div className="react-paginate">
                    <ReactPaginate
                        previousLabel={paginationProps.previousLabel}
                        nextLabel={paginationProps.nextLabel}
                        breakLabel={paginationProps.breakLabel}
                        breakClassName={paginationProps.breakClassName}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={paginationProps.marginPagesDisplayed}
                        pageRangeDisplayed={paginationProps.pageRangeDisplayed}
                        onPageChange={this.handlePaginationChange}
                        containerClassName={paginationProps.containerClassName}
                        subContainerClassName={paginationProps.subContainerClassName}
                        activeClassName={paginationProps.activeClassName}
                    />
                </div>
            </main>
        );
    }
}

export default PopularItems;
