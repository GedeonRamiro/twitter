import axios from 'axios'

const api = axios.create({
    baseURL: 'https://maratonas-academy-twitter.herokuapp.com/'
})

export default api