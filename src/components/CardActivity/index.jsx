import React from 'react'

export default function CardActivity ({ coin }) {
  const { name, image, amount, amountUsd } = coin
  return (
    <li className='my-2'>
      <div className=' flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-11 h-11 mr-2 relative overflow-hidden rounded-2xl'>
            <img
              src={image}
              className='w-full h-full object-cover'
              alt={name}
            />
          </div>
          <h5 className='text-base font-semibold'>{name}</h5>
        </div>
        <div className='flex flex-col text-end text-[16px] font-semibold'>
          <span className='text-[#e65d56]'>-${amountUsd}</span>
          <span className='text-[#4de2ce]'>+{(amount).toFixed(5)}</span>
        </div>
      </div>
    </li>
  )
}
