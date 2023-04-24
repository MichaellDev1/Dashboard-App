import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter ({ navigate }) {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user === null) return <Navigate to={`/${navigate}`} />
  return <Outlet />
}
