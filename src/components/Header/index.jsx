import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { BsChatSquareText } from 'react-icons/bs'
import Chat from '../Chat'
import ContentSection from '../ContentSection'
import useHeader from '../../hooks/useHeader'

export default function Header ({ handleOpenMenuUser }) {
  const { chatShow, handleChangeSearch, handleOpenChat, handleSearch, user } = useHeader()
  return (
    <ContentSection>
      <header className='text-black h-24 items-center w-full flex justify-between sm:px-10  px-5 py-5 bg-[#f9f9f9]'>
        <form action='' className='relative' onSubmit={handleSearch}>
          <div className='absolute top-[12px] text-[#000000] left-3 text-lg'>
            <FiSearch />
          </div>
          <input type='text' name='' id='' className='text-base pl-10 py-[10px] rounded-3xl sm:min-w-[300px] w-[150px] placeholder:text-[#868686] outline-none font-normal bg-white' onChange={handleChangeSearch} style={{ boxShadow: '1px 5px 45px rgba(0 0 0 / 4%)' }} placeholder='Search' />
        </form>
        <div className='flex justify-center items-center p-1 bg-white rounded-3xl' style={{ boxShadow: '1px 5px 45px rgba(0 0 0 / 4%)' }}>
          <div className='text-[26px] flex items-center justify-center'>
            <button className='relative mx-2'>
              <span className='w-[9px] h-[9px] top-[1px] right-[6px] absolute bg-[#e65d56] rounded-full ' />
              <span className='text-[#2b2b2b]'><IoMdNotificationsOutline /></span>
            </button>
            <button onClick={handleOpenChat} className='mx-2'><span className='text-[#2b2b2b] text-[22px]'><BsChatSquareText /></span></button>
          </div>
          <button onClick={() => handleOpenMenuUser()}>
            <div className='w-[40px] h-[40px] rounded-full relative overflow-hidden ml-3'>
              <img src={user.image} alt='' className='w-full h-full object-cover' />
            </div>
          </button>
        </div>
        {chatShow ? <Chat handleOpenChat={handleOpenChat} /> : null}
      </header>
    </ContentSection>
  )
}
