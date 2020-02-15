import axios from 'axios';

const BASEURL = 'randomuser.me/api/?q=';

export default {
    search: function(query) {
        return axios.get(BASEURL + query)
    }
};