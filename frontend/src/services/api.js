import axios from 'axios';

async function send(api, method = 'get') {
    let response;
    try {
        const apiUrl = process.env.REACT_APP_API_URL + api;
        response = await axios({
            method,
            url: apiUrl
        });
    } catch (error) {
        return error;
    }
    return response;
}

export default send;
