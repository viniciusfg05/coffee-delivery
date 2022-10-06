import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://coffee-delivery-6aot6fyyz-viniciusfg05.vercel.app/api'
})