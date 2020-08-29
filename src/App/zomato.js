import axios from 'axios';

export default axios.create({
    baseUrl:"https://developers.zomato.com/api/v2.1",
    headers: {
        'user-key': "f985d357708f9e0123d0ab364d60a499"
    }

});