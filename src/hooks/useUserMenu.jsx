import { useContext, useState, useEffect } from 'react'
import Context from '../context/userContext'

export default function useUserMenu () {
  const [imageUser, setImageUser] = useState()
  const { user, setUser } = useContext(Context)

  const imageShow = (e) => {
    setImageUser(e.target.result)
  }

  const handlePerfilUser = (e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', imageShow)
    reader.readAsDataURL(image)
  }

  useEffect(() => {
    if (imageUser) {
      setUser({
        ...user,
        image: imageUser
      })
      window.localStorage.setItem(
        'user',
        JSON.stringify({ ...user, image: imageUser })
      )
    }
  }, [imageUser])
  return { handlePerfilUser, imageShow, setImageUser, user }
}
