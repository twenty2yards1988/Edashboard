import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskCard from '../components/TaskCard'

const DashboardPage = () => {
  return (
    <div className="page dashboard-page">
      <Sidebar />
      <section className="dashboard-content">
        <h1>Dashboard</h1>
        <TaskCard title="Review Metrics" description="Analyze dashboard analytics." status="Active" />
      </section>
    </div>
  )
}

export default DashboardPage
