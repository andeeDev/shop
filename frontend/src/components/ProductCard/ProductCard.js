import React, {Component} from "react";
import './ProductCard.css';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class ProductCard extends Component {
    state = {
        data: []
    };

    constructor(props){
        super(props);
    }
    /* componentDidMount() {
         const categList = getAllCategories().then((categList) => {
             console.log("categList = ", categList.data.data);

             this.setState({ data: categList.data.data} );
         })
     }*/
    /*async componentDidMount() {
        const categList = await getAllCategories();
        console.log("categList = ", categList.data.data);
        this.setState({ data: categList.data.data} );
    }*/




    handleCategoryClick = id => () => {
        // this.setState('id', id);
        //  history.push(`categories/${id}`);
    };


    render() {
        return (
            <section className="ProductCard">
                <img src="https://img.moyo.ua/img/products/1954/34_600.jpg" width="200px" height="200px" alt="productcard__img" />
                <h2 className="ProductCard__title">{this.props.title}</h2>
                <Link to="/product/1">
                <Button  variant="contained" color="primary" >
                    Buy
                </Button>
                </Link>
            </section>
        )

    }
}

export default ProductCard;
