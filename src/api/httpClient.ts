import axios from 'axios'
import { useGlobalLoading } from '@/composables/useGlobalLoading'

const { startLoading, stopLoading } = useGlobalLoading()

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

httpClient.interceptors.request.use(
    (config) => {
        startLoading()

        const apiKey = import.meta.env.VITE_API_KEY
        if (apiKey) {
            config.headers['X-API-KEY'] = apiKey
        }
        return config
    },
    (error) => {
        stopLoading()
        return Promise.reject(error)
    },
)

httpClient.interceptors.response.use(
    (response) => {
        stopLoading()
        return response
    },
    (error) => {
        stopLoading()
        console.error('API Error:', error.response?.data || error.message)
        return Promise.reject(error)
    },
)

export default httpClient
