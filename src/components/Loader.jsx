import React from 'react'

const Loader = () => {
  return (
    <div className="loader" role="status" aria-label="Loading">
      <div className="loader__spinner" />
      <span>Loading...</span>
    </div>
  )
}

export default Loader
