import axios from 'axios';
import { createBrowserHistory }  from 'history';

async function send(api, method = 'get', data = {}) {
    let response;
    try {
        const apiUrl = process.env.REACT_APP_API_URL + api;
        response = await axios[method](apiUrl, {
            params: data
        });
    } catch (error) {
        const history = createBrowserHistory();
        history.replace('/404');
        return error;
    }
    return response;
}

export default send;
