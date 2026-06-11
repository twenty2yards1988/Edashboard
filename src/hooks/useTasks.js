import { useEffect, useState } from 'react'
import { fetchTasks } from '../services/taskService'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true)
      try {
        const data = await fetchTasks()
        setTasks(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  return { tasks, loading, error }
}
