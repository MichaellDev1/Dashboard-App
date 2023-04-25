import { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Context from '../context/userContext'
import { startUser } from '../Db/startUser'
import { IconGitHub, IconGoogle, IconMicrosoft } from '../components/Icons/index'

export default function useLogin () {
  const navigate = useNavigate()
  const [isShow, setShow] = useState(false)
  const { setUser } = useContext(Context)
  const [user, setUserLocal] = useState(startUser)
  const userLocal = window.localStorage.getItem('user')
  const methodLogin = [<IconGitHub />, <IconGoogle />, <IconMicrosoft />]

  if (userLocal) return <Navigate to='/dashboard' />
  const handleChange = (e) => {
    setUserLocal({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(user)
    window.localStorage.setItem('user', JSON.stringify(user))
    navigate('/dashboard')
  }

  const handleVisibilityPassword = (e) => {
    e.preventDefault()
    setShow(!isShow)
  }
  return { handleChange, handleSubmit, handleVisibilityPassword, isShow, methodLogin }
}
