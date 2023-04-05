import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineComment } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import Chat from '../../components/Chat'
import { userConfig } from '../../Db/user'

export default function Header ({ handleOpenMenuUser }) {
  const [chatShow, setChatShow] = useState(false)
  const handleOpenChat = () => {
    setChatShow(!chatShow)
  }

  return (
    <header className='text-black h-24 items-center w-full flex justify-between sm:px-10  px-4 py-5 bg-[#f9f9f9]'>
      <form action='' className='relative'>
        <div className='absolute top-[11px] text-[#000000] left-3 text-lg'>
          <FiSearch />
        </div>
        <input type='text' name='' id='' className='text-base pl-10 py-2 rounded-2xl sm:min-w-[300px] w-[150px] placeholder:text-[#868686] outline-none font-normal bg-white' style={{ boxShadow: '1px 5px 45px rgba(0 0 0 / 4%)' }} placeholder='Search' />
      </form>
      <div className='flex justify-center items-center sm:gap-5 gap-7'>
        <div className='text-[26px] flex items-center justify-center gap-7 '>
          <button className='relative'>
            <span className='w-[9px] h-[9px] top-[1px] right-[6px] absolute bg-[#e65d56] rounded-full ' />
            <span><MdNotificationsNone /></span>
          </button>
          <button onClick={handleOpenChat}><span><AiOutlineComment /></span></button>
        </div>
        <button onClick={() => handleOpenMenuUser()}>
          <div className='w-[45px] h-[45px] rounded-full relative overflow-hidden bg-black'>
            <img src={userConfig.image} alt='' className='w-full h-full object-cover' />
          </div>
        </button>
      </div>

      {chatShow ? <Chat /> : null}
    </header>
  )
}
