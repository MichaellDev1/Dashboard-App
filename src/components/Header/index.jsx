import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { BsChatRightText } from 'react-icons/bs'
import { useState, useContext } from 'react'
import Context from '../../context/userContext'
import Chat from '../Chat'
import { useNavigate } from 'react-router-dom'

export default function Header ({ handleOpenMenuUser }) {
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

  return (
    <header className='text-black h-24 items-center w-full flex justify-between sm:px-10  px-5 py-5 bg-[#f9f9f9]'>
      <form action='' className='relative' onSubmit={handleSearch}>
        <div className='absolute top-[11px] text-[#000000] left-3 text-lg'>
          <FiSearch />
        </div>
        <input type='text' name='' id='' className='text-base pl-10 py-2 rounded-2xl sm:min-w-[300px] w-[150px] placeholder:text-[#868686] outline-none font-normal bg-white' onChange={handleChangeSearch} style={{ boxShadow: '1px 5px 45px rgba(0 0 0 / 4%)' }} placeholder='Search' />
      </form>
      <div className='flex justify-center items-center'>
        <div className='text-[26px] flex items-center justify-center'>
          <button className='relative mx-2'>
            <span className='w-[9px] h-[9px] top-[1px] right-[6px] absolute bg-[#e65d56] rounded-full ' />
            <span className='text-[#2b2b2b]'><IoMdNotificationsOutline /></span>
          </button>
          <button onClick={handleOpenChat} className='mx-2'><span className='text-[#2b2b2b] text-[23px]'><BsChatRightText /></span></button>
        </div>
        <button onClick={() => handleOpenMenuUser()}>
          <div className='w-[40px] h-[40px] rounded-full relative overflow-hidden ml-3 bg-black'>
            <img src={user.image} alt='' className='w-full h-full object-cover' />
          </div>
        </button>
      </div>

      {chatShow ? <Chat /> : null}
    </header>
  )
}
