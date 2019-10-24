import React, { Component } from 'react';
import './searchproductspage.styles.scss';
import SearchProducts from '../../components/searchProducts/searchProducts.component';
import { findProducts } from '../../services/Products';

class SearchProductsPage extends Component {
    state = {
        products: [],
        pageCount: 1,
        currentPage: 0
    };

    async componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            location: {
                state: { searchedString }
            }
        } = this.props;
        if (searchedString !== prevProps.location.state.searchedString) {
            const searchedProducts = await findProducts({ searchedString: searchedString });
            const {
                data,
                meta: { last_page, current_page }
            } = searchedProducts.data;
            this.setState({
                products: data,
                pageCount: last_page,
                currentPage: current_page
            });
        }
    }

    async componentDidMount() {
        const {
            location: {
                state: { searchedString }
            }
        } = this.props;

        const searchedProducts = await findProducts({ searchedString: searchedString });
        const {
            data,
            meta: { last_page, current_page }
        } = searchedProducts.data;
        console.log("data = ",searchedProducts.data);
        this.setState({
            products: data,
            pageCount: last_page,
            currentPage: current_page
        });
    }

    handlePagination = async ({ selected }) => {
        const {
            location: {
                state: { searchedString }
            }
        } = this.props;
        const popularProducts = await findProducts({ searchedString: searchedString, page: selected + 1 });
        const {
            data,
            meta: { last_page, current_page }
        } = popularProducts.data;
        this.setState({ products: data, pageCount: last_page, currentPage: current_page - 1 });
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
        const { products, pageCount, currentPage } = this.state;
        console.log('this.state.products');
        return (
            <div className="SearchProductsPage">
                <main className="popular-items">
                    <h1 className="section-title">Searched products</h1>
                    <SearchProducts
                        paginationProps={paginationProps}
                        currentPage={currentPage}
                        lastPage={pageCount}
                        products={products}
                        handle={this.handlePagination}
                    />
                </main>
            </div>
        );
    }
}

export default SearchProductsPage;
