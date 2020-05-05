import axios from 'axios';

const instance=axios.create({
    baseURL:'https://burger-builder-b81e1.firebaseio.com/'
});

export default instance;