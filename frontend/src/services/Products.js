import send from './api';

const getProductsByCategory = (route, data) => {
    return send(route, 'get', data);
};

const getProduct = route => {
    return send(route);
};

const getPopularProducts = data => {
    return send( '/products/popular', 'get', data);
};

export { getProductsByCategory, getProduct, getPopularProducts };
