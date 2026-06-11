import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Edashboard</div>
      <div className="navbar__links">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  )
}

export default Navbar
