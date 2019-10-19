import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryProducts.styles.scss';
import { getProductsByCategory } from '../../services/Products';
import ProductCard from '../productCard/productCard.component';
import ReactPaginate from 'react-paginate';

class CategoryProducts extends Component {
    state = {
        data: [],
        pageCount: 1,
        currentPage: 1
    };

    async componentWillReceiveProps(nextProps) {
        /*const { url } = nextProps.match;
        const productsList = await getProductsByCategory(url);
        this.setState(() => ({ data: productsList.data.data }));*/
        const { url } = nextProps.match;
        const productsList = await getProductsByCategory(url);
        const { last_page, current_page } = productsList.data.meta;
        const { data } = productsList.data;
        console.log('current_page = ', current_page);
        this.setState({ data: data, pageCount: last_page, currentPage: current_page });
    }

    async componentDidMount() {
        const { url } = this.props.match;
        const productsList = await getProductsByCategory(url);
        const { last_page, current_page } = productsList.data.meta;
        const { data } = productsList.data;
        this.setState({ data: data, pageCount: last_page, currentPage: current_page });
    }

    handlePaginationChange = async ({ selected }) => {
        const { url } = this.props.match;
        const productsList = await getProductsByCategory(url, { page: selected + 1 });
        const { last_page, current_page } = productsList.data.meta;
        const { data } = productsList.data;
        this.setState({ data: data, pageCount: last_page, currentPage: current_page });
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
        const { name } = this.props.location.state;
        return (
            <main className="ContentPart">
                <h1 className="section-title">{name}</h1>
                <div className="ContentPart__Container">
                    {this.state.data.map(product => {
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
                        initialPage={this.state.currentPage - 1}
                        forcePage={this.state.currentPage - 1}
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

export default withRouter(CategoryProducts);
