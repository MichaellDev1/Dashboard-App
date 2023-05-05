import React from 'react'
import { Link } from 'react-router-dom'

export default function CardWallet ({ id, amount, name, image, symbol }) {
  return (
    <li key={id} className='my-1 py-3 mb-1 text-[#1a1a1a] bg-white px-5 shadow-sm w-full rounded-lg text-lg font-semibold'>
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
  )
}
