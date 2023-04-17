import React, { useContext, useEffect, useState } from 'react'
import getPriceCoin from '../../services/getPriceCoin'
import Context from '../../context/userContext'
import { Link } from 'react-router-dom'

export default function Market () {
  const [coins, setCoins] = useState([])
  const { user, setUser } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }

    getPriceCoin({ limit: 20, page: 1 }).then(res => {
      setCoins(res)
    })
  }, [])

  return (
    <div className='flex justify-center px-6 w-full h-min-[400px] relative'>
      <div className='sm:px-[20px] w-full'>
        <div className='flex justify-between mb-1 text-[#1a1a1a] text-lg font-semibold'>
          <h2>Coin</h2>
          <div className='flex'>
            <div className='w-[100px]'>
              <span className='mr-[45px]'>
                24h
              </span>
            </div>
            <div className='w-[100px]'>
              <span>
                Price
              </span>
            </div>
          </div>
        </div>
        <ul>
          {coins.map(coin => (
            <li key={coin.id} className='cursor-pointer  my-2'>
              <Link to={`/detail/${coin.id}`} className='flex items-center justify-between py-2'>
                <div className='flex items-center'>
                  <div className='w-[35px] h-[35px] overflow-hidden mr-3 rounded-full'>
                    <img src={coin.image} alt={coin.name} className='w-full h-full object-cover' />
                  </div>
                  <div className='flex items-center'>
                    <h4 className='text-base font-semibold'>{coin.name}</h4>
                    <span className='ml-[5px] text-stone-600 font-normal text-sm'>{coin.symbol}</span>
                  </div>
                </div>
                <div className='font-medium flex'>
                  <div className='w-[100px]'>
                    <span className={`${coin.price_change_24h.toString().includes('-') ? 'text-[#e22222]' : 'text-green-700'} mr-8`}>{(coin.price_change_24h).toFixed(3)}
                    </span>
                  </div>
                  <div className='w-[100px]'>
                    <span>${coin.current_price}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
