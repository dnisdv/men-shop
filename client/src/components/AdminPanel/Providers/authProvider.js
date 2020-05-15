import axios from 'axios'

const authProvider = {
    login: ({ username, password }) => {
        return axios.post('http://localhost:5000/api/admin',{username, password}, {withCredentials : true})
        .then( (res) => {
           return Promise.resolve()
        })
        .catch( (err) => {
            return Promise.reject()
        })
    },
    logout: () => {
        return axios.delete('http://localhost:5000/api/admin', {withCredentials : true})
        .then( (res) => {
            return Promise.reject()
        })
        .catch( (err) => {
            return Promise.resolve()
        })
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>{
        return axios.get('http://localhost:5000/api/admin', {withCredentials : true})
        .then( (res) => {
            return Promise.resolve()
        })
        .catch( (err) => {
            return Promise.reject()
        })
    },
    getPermissions: () => Promise.reject('Unknown method'),
};

export default authProvider;