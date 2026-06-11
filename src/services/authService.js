import axiosInstance from './axiosInstance'

export const login = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials)
  return response.data
}

export const logout = async () => {
  await axiosInstance.post('/auth/logout')
}
