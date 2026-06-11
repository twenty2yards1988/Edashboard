import axios from 'axios'
import { env } from '../config/env'

const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
