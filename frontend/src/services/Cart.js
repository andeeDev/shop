import send from './api';

const sendCart = (data)  => () => {
    return send('/cart', 'post', data);
};
export default sendCart;
