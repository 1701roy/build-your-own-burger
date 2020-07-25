import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-your-own-burger.firebaseio.com/'    
});

export default instance;
