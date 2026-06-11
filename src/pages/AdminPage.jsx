import React from 'react'
import RoleBadge from '../components/RoleBadge'

const AdminPage = () => {
  return (
    <main className="page admin-page">
      <h1>Admin</h1>
      <p>Manage system settings and user roles.</p>
      <RoleBadge role="Admin" />
    </main>
  )
}

export default AdminPage
