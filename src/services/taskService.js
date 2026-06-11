import axiosInstance from './axiosInstance'

export const fetchTasks = async () => {
  const response = await axiosInstance.get('/tasks')
  return response.data
}

export const createTask = async (task) => {
  const response = await axiosInstance.post('/tasks', task)
  return response.data
}
