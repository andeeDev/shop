import React, { Component } from "react";
import { getPopularProducts } from '../../services/Products';
import ProductCard from "../productCard/productCard.component";
import './popularItems.styles.scss';




class PopularItems extends Component {

    state = {
        products: []
    };

    async componentDidMount() {
        const popularProducts = await getPopularProducts('/products/popular');
        this.setState({ products: popularProducts.data.data} );
    }



    render() {
        return (
            <main className="popular-items">
                <h1 className="section-title">Popular items</h1>
                  <div className="ContentPart__Container">
                      {this.state.products.map((product) => {
                        return (
                            <ProductCard key={product.id} title={product.name} id={product.id} price={product.price}  />
                        );
                      })}
                  </div>
            </main>
        );
    }
}

export default PopularItems;
