import { useContext, useEffect } from 'react'
import Context from '../context/userContext'

export default function useUser () {
  const { user, setUser } = useContext(Context)
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')))
  }, [])
  return { user }
}
