import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { getPopularProducts } from '../../services/Products';
import ProductCard from '../productCard/productCard.component';
import './popularItems.styles.scss';

class PopularItems extends Component {
    state = {
        products: [],
        pageCount:1,
        currentPage:1
    };

    async componentDidMount() {
        const popularProducts = await getPopularProducts(`/products/popular`);
        this.setState({ products: popularProducts.data.data, pageCount: popularProducts.data.meta.last_page, currentPage: popularProducts.data.meta.current_page });
        console.log(popularProducts.data);
    }

     handlePaginationChange = async (data) =>  {
         const popularProducts = await getPopularProducts(`/products/popular?page=${data.selected + 1}`);
         this.setState({ products: popularProducts.data.data, pageCount: popularProducts.data.meta.last_page, currentPage: popularProducts.data.meta.current_page });
         console.log(popularProducts.data);
    };

    render() {
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
                <div className='react-paginate'>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePaginationChange}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />


                </div>
            </main>
        );
    }
}

export default PopularItems;
