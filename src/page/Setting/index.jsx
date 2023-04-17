import React, { useContext, useEffect } from 'react'
import Context from '../../context/userContext'

export default function Setting () {
  const { user, setUser } = useContext(Context)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  return user
    ? <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='text-2xl font-semibold'>Setting</h1>
      </div>
    : null
}