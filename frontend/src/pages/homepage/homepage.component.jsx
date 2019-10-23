import React, { Component } from 'react';
import './homepage.styles.scss';
import { getPopularProducts } from '../../services/Products';
import ProductList from '../../components/ProductsList/ProductList.component';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        products: [],
        pageCount: 1,
        currentPage: 1
    };

    async componentDidMount() {
        const popularProducts = await getPopularProducts();
        const {
            data,
            meta: { last_page, current_page }
        } = popularProducts.data;
        this.setState({
            products: data,
            pageCount: last_page,
            currentPage: current_page
        });
    }

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
            <div className="home-page">
                <main className="popular-items">
                    <h1 className="section-title">Popular items</h1>
                    <ProductList
                        paginationProps={paginationProps}
                        products={this.state.products}
                        pageCount={this.state.pageCount}
                        currentPage={this.state.currentPage}
                        handle={this.handlepagination}
                    />
                </main>
            </div>
        );
    }

    handlepagination = async ({ selected }) => {
        const popularProducts = await getPopularProducts({ page: selected + 1 });

        const {
            data,
            meta: { last_page, current_page }
        } = popularProducts.data;
        console.log('popularProducts', last_page);

        this.setState({ products: data, pageCount: last_page, currentPage: current_page });
    };
}

export default HomePage;
