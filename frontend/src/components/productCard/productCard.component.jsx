import React, { Component } from 'react';
import './productCard.styles.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
                <Button variant="contained" color="primary">
                    Buy
                </Button>
                <span>{`${price} $`}</span>
            </section>
        );
    }
}

export default ProductCard;
