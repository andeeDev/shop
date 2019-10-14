import React, { Component } from "react";

import { getPopularProducts } from '../../services/Products';
import ProductCard from "../ProductCard/ProductCard";
import './popularItems.styles.scss';

// import PropTypes from 'prop-types';



class PopularItems extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }



    /* static propTypes = {
      customAttribute: PropTypes.string
  };

  static defaultProps = {
      customAttribute: '1'
  }; */

    async componentDidMount() {
        const popularProducts = await getPopularProducts('/products/popular');
        console.log("popularProducts = ", popularProducts);
        this.setState({ products: popularProducts.data.data} );
    }



    render() {
        const p = this.props;
        console.log("p = ", p);
        console.log("data = ", this.state.products );
        return (

            <main className="popular-items">
                <h1 className="section-title">Popular items</h1>
                  <div className="ContentPart__Container">
                { this.state.products.map((product) => {
                    return (
                        <ProductCard key={product.id} title={product.name} id={product.id} price={product.price}  />
                    );
                    })
                }
                  </div>
            </main>
        );
    }
}

export default PopularItems;
