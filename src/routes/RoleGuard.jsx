import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const RoleGuard = ({ children, role }) => {
  const { user } = useAuth()

  if (!user || user.role !== role) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

export default RoleGuard
