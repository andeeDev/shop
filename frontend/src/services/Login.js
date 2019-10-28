import send from './api';

const sendToken = (data) => {
    return send('/login', 'post', data);
};
export default sendToken;
