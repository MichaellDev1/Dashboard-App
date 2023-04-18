import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/userContext'
import { BiPencil } from 'react-icons/bi'

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
      localStorage.setItem('user', JSON.stringify({ ...user, image: imageUser }))
    }
  }, [imageUser])

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
