import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter () {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (user === null) return <Navigate to='/login' />
  return <Outlet />
}
