import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home () {
  const userLocal = window.localStorage.getItem('user')

  if (userLocal !== null) {
    return <Navigate to='/dashboard' />
  } else {
    return <Navigate to='/login' />
  }
}
