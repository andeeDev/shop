import send from './api';

const getProductsByCategory = (id, data = {}) => {
    return send(`/categories/${id}/products`, 'get', data);
};

const getProduct = product_id => {
    return send(`/products/${product_id}`);
};

const getPopularProducts = data => {
    return send('/products/popular', 'get', data);
};
const findProducts = data => send(`/search`, 'get', data);

export { getProductsByCategory, getProduct, getPopularProducts, findProducts };
