import React from 'react'
import { Link } from 'react-router-dom'

export default function ListFavorite ({ favorites }) {
  return favorites
    ? <div className='sm:px-[20px] w-full'>
      <ul>
        {favorites.map(coin => (
          <li key={coin.id} className='cursor-pointer  my-2'>
            <Link to={`/detail/${coin.id}`} className='flex items-center justify-between py-2 my-1 mb-1 text-[#1a1a1a] bg-white px-5 shadow-sm w-full rounded-lg text-lg font-semibold'>
              <div className='flex items-center'>
                <div className='w-[35px] h-[35px] overflow-hidden mr-3 rounded-full'>
                  <img src={coin.image} alt={coin.name} className='w-full h-full object-cover' />
                </div>
                <div className='flex items-center'>
                  <h4 className='text-base font-semibold'>{coin.name}</h4>
                  <span className='ml-[5px] text-stone-600 font-normal text-sm'>{coin.symbol}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    : <h4 className='text-base font-normal text-[#919191]'>No record</h4>
}
