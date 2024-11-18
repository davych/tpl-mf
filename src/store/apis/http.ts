import axios, { AxiosResponse } from 'axios'

const baseURL = process.env.REACT_APP_API_URL

const instance = axios.create({
  timeout: 40000,
  baseURL,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
