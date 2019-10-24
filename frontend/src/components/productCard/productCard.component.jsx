import React, { Component } from 'react';
import './productCard.styles.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

class ProductCard extends Component {
    state = {
        buyIsClicked: false
    };

    render() {
        const { id, title, price } = this.props;

        return (
            <section className="ProductCard">
                <Link to={`/products/${id}`}>
                    <img
                        src={`https://picsum.photos/id/${id}/200/300`}
                        width="200px"
                        height="300px"
                        alt="productcard__img"
                    />
                    <h2 className="ProductCard__title">{title}</h2>
                </Link>
                <CartContext.Consumer>
                    {({ cart }) => {
                        if (cart.get(id) === undefined) {
                            return (
                                <Button variant="contained" color="primary">
                                    Buy
                                </Button>
                            );
                        } else {
                            return (
                                <Button variant="contained" color="secondary">
                                    Buy
                                </Button>
                            );
                        }
                    }}
                </CartContext.Consumer>
                <span>{`${price} $`}</span>
            </section>
        );
    }
}

export default ProductCard;
