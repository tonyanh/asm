import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'http://127.0.0.1:8080/api',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    }
})

export default instance