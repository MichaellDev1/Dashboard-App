import { useContext } from 'react'
import Context from '../context/userContext'
import { useNavigate } from 'react-router-dom'

export default function useMenu () {
  const url = window.location.pathname
  const navigate = useNavigate()
  const { setUser } = useContext(Context)

  const removeLocalStorage = (key) => {
    window.localStorage.removeItem(key)
  }

  const handleLogOut = () => {
    removeLocalStorage('user')
    removeLocalStorage('lastCoin')
    removeLocalStorage('favorites')
    removeLocalStorage('tasks')
    setUser(null)
    navigate('/login')
  }

  return { url, handleLogOut }
}
