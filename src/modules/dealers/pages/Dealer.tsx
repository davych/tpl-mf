import React from 'react'
import { Outlet } from 'react-router-dom'

const Dealer: React.FC = () => {
  return (
    <div>
      <h1>Dealer Page</h1>
      <Outlet />
    </div>
  )
}

export default Dealer
