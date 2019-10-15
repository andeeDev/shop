import send from './api';

const getProductsByCategory = route => {
    return send(route);
};

const getProduct = route => {
    return send(route);
};

const getPopularProducts = route => {
    return send(route);
};

export { getProductsByCategory, getProduct, getPopularProducts };
