import axios from 'axios'

const authProvider = {
    login: ({ username, password }) => {
        return axios.post('/api/admin',{username, password}, {withCredentials : true})
        .then( (res) => {
           return Promise.resolve()
        })
        .catch( (err) => {
            return Promise.reject()
        })
    },
    logout: () => {
        return axios.delete('/api/admin', {withCredentials : true})
        .then( (res) => {
            return Promise.reject()
        })
        .catch( (err) => {
            return Promise.resolve()
        })
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>{
        return axios.get('/api/admin', {withCredentials : true})
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