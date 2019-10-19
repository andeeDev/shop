import axios from 'axios';

async function send(api, method = 'get', data = {}) {
    let response;
    try {
        const apiUrl = process.env.REACT_APP_API_URL + api;
        response = await axios[method]( apiUrl, {
            params: data
        });
    } catch (error) {
        return error;
    }
    return response;
}

export default send;
