import { useState, useContext } from 'react'
import Context from '../context/userContext'
import { useNavigate } from 'react-router-dom'

export default function useHeader () {
  const [chatShow, setChatShow] = useState(false)
  const [keyword, setKeyword] = useState()
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const handleOpenChat = () => {
    setChatShow(!chatShow)
  }

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    return navigate(`/detail/${keyword.toLowerCase()}`)
  }
  return { handleChangeSearch, handleOpenChat, handleSearch, user, chatShow, keyword }
}
