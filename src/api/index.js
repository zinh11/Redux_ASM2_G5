import axios from 'axios';

const API_URL = 'http://localhost:4000';

export default async function callApi(endpoint, method = 'GET', body) {
    try {
        const response = await axios({
            method,
            url: `${API_URL}/${endpoint}`,
            data: body,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
}
