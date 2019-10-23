import send from './api';

const getProductsByCategory = (route, data) => {
    return send(route, 'get', data);
};

const getProduct = product_id => {
    return send(`/products/${product_id}`);
};

const getPopularProducts = data => {
    return send('/products/popular', 'get', data);
};

export { getProductsByCategory, getProduct, getPopularProducts };
