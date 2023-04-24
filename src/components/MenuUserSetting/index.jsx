import React from 'react'
import { BiPencil } from 'react-icons/bi'
import useUserMenu from '../../hooks/useUserMenu'
import { linkMenuUser } from '../../Db/menuData'

export default function MenuUserSetting () {
  const { handlePerfilUser, user } = useUserMenu()
  return (
    <div className='w-[300px] z-20 bg-[#ffffff] absolute right-1 top-20 flex rounded-lg flex-col justify-center p-10 shadow-lg'>
      <div>
        <div className='relative flex mb-5 justify-center items-center'>
          <div className='w-28 rounded-full overflow-hidden h-28'>
            <img src={user.image} alt='' className='object-cover w-full h-full' />
          </div>
          <div className='bottom-[0px] bg-[#4360ef]  text-white text-lg p-1 absolute right-[60px] rounded-full'>
            <BiPencil />
            <input type='file' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0' onChange={handlePerfilUser} />
          </div>
        </div>
        <ul className='flex flex-col'>
          {linkMenuUser.map((res, inx) => (
            <li key={inx} className='my-[7px] text-[15px]'>
              <a href='#' className='font-medium'>{res.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
