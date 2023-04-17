import React, { useContext, useEffect } from 'react'
import Context from '../../context/userContext'
import { Link } from 'react-router-dom'

export default function Wallet () {
  const { user, setUser } = useContext(Context)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))

    console.log(user)
  }, [])

  return user
    ? <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='text-2xl font-semibold'>Your wallet</h1>

      <ul className='w-full'>
        {
          user.coins.map(({ id, image, name, amountUsd, amount, symbol }) => (
            <li key={id} className='my-1 py-3'>
              <Link to={`/detail/${id}`} className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='w-[38px] h-[38px] overflow-hidden rounded-full'>
                    <img src={image} alt='' className='w-full h-full object-cover' />
                  </div>
                  <h4 className='text-lg font-semibold ml-3'>{name}</h4>
                </div>
                <div className='flex items-center text-[#65e49a] text-lg font-semibold'>
                  <span>{amount.toFixed(5)}</span>
                  <span className='ml-1 font-normal'>{symbol}</span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
      </div>
    : null
}
