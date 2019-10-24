import React, { Component } from 'react';

import './categoryproductspage.styles.scss';

import { getProductsByCategory } from '../../services/Products';
import ProductList from '../../components/ProductsList/ProductList.component';

class CategoryProductPage extends Component {
    state = {
        products: [],
        pageCount: 1,
        currentPage: 0
    };

    async componentDidUpdate(prevProps, prevState) {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const {
            params: { id: prevId }
        } = prevProps.match;

        if (id !== prevId) {
            const popularProducts = await getProductsByCategory(id);
            const {
                data,
                meta: { last_page}
            } = popularProducts.data;
            this.setState({
                products: data,
                pageCount: last_page,
                currentPage: 0
            });
        }
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const popularProducts = await getProductsByCategory(id);
        const {
            data,
            meta: { last_page, current_page }
        } = popularProducts.data;
        this.setState({
            products: data,
            pageCount: last_page,
            currentPage: current_page - 1
        });
    }

    handlePaginationChange = async ({ selected }) => {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const productsList = await getProductsByCategory(id, { page: selected + 1 });
        const {
            data,
            meta: { last_page, current_page }
        } = productsList.data;

        this.setState({ products: data, pageCount: last_page, currentPage: current_page - 1 });
    };

    render() {
        const { paginationProps } = this.props;
        const { products, pageCount, currentPage } = this.state;
        return (
            <div className="category-product-page">
                <ProductList
                    paginationProps={paginationProps}
                    products={products}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    handle={this.handlePaginationChange}
                />
            </div>
        );
    }
}

export default CategoryProductPage;
