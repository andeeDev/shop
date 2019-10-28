import axios from 'axios';
import { createBrowserHistory }  from 'history';

async function send(api, method = 'get', data = {}) {
    let response;
    try {
        const apiUrl = process.env.REACT_APP_API_URL + api;
        if(method  === 'get') {
            response = await axios[method](apiUrl, {
                params: data
            });
        } else {
            response = axios.post(apiUrl, data);
            console.log(response );
            response.then((data) => {
                console.log(data);
            }).catch((data) => {
                console.log(data);
            })
        }
    } catch (error) {
        console.log("error", error);
        const history = createBrowserHistory();
        history.replace('/404');
        return error;
    }
    return response;
}

export default send;
