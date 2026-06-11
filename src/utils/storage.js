export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const loadFromStorage = (key) => {
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : null
}

export const removeFromStorage = (key) => {
  localStorage.removeItem(key)
}
