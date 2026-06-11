import React from 'react'
import Navbar from '../components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="layout dashboard-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
