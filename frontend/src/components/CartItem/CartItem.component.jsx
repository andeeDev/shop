import React from 'react';
import './CartItem.styles.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import CartContext from "../../context/CartContext";

class CartItem extends React.Component {


    render() {
        const {context: {cart, minusItem, addItem, removeItem},  product : {id, name, desc,  price } } = this.props;
        const ar = cart.size;

       /* console.log(Array.isArray(ar) && ar.length);*/
        return (

                (<section className={'cart-item'}>
                    <img
                        className='cart-item__image'
                        src={`https://picsum.photos/id/${id}/100/100`}
                        width="100px"
                        height="100px"
                        alt="productcard__img"
                    />
                    <div className='product_info'>
                        <div className='about-product'>
                            <h3 className='product-name'>{name}</h3>
                            <p className='product-desc'>{desc}</p>
                        </div>
                        <div className='product-order-details'>
                            <Fab color="primary" aria-label="add" onClick={addItem(id)}>
                                <AddIcon />
                            </Fab>
                            <span className='product-price'>{price}</span>
                            <Fab color='secondary' aria-label="remove" onClick={minusItem(id)} >
                                <RemoveIcon  />
                            </Fab>
                            <span className='quontity'>
                                {cart[id]}
                        </span>
                            <Fab aria-label="delete" onClick={removeItem(id)}>
                                <DeleteIcon />
                            </Fab>
                        </div>
                    </div>
                </section>)
        )
    }
}

export default CartItem;
