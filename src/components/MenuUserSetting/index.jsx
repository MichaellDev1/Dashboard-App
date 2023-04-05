import React, { useEffect, useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { userConfig } from '../../Db/user'

const linkMenuUser = [
  {
    name: 'Tu perfil'
  },
  {
    name: 'Cambiar de cuenta'
  },
  {
    name: 'Idioma: Español'
  }, {
    name: 'Ubicación: Argentina'
  }
]

export default function MenuUserSetting () {
  const [imageUser, setImageUser] = useState()
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
      userConfig.image = imageUser
    }
  }, [imageUser])

  return (
    <div className='w-[300px] z-10 h-[400px] bg-slate-100 absolute right-10 top-20 flex rounded-lg flex-col justify-center p-10'>
      <div>
        <div className='relative flex mb-5 justify-center items-center'>
          <div className='w-28 rounded-full overflow-hidden h-28'>
            <img src={userConfig.image} alt='' className='object-cover w-full h-full' />
          </div>
          <div className='bottom-[0px] bg-orange-400 text-white text-lg p-1 absolute right-[60px] rounded-full'>
            <BiPencil />
            <input type='file' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0' onChange={handlePerfilUser} />
          </div>
        </div>
        <ul className='flex flex-col gap-2'>
          {linkMenuUser.map((res, inx) => (
            <li key={inx}>
              <a href='#'>{res.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
