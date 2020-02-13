import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilderreact-4494e.firebaseio.com/',
});

export default instance;