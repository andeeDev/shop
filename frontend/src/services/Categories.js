import send from './api';

const getAllCategories = () => {
    return send('/categories', 'get');
};
export default getAllCategories;
