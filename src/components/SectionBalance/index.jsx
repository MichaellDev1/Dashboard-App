import React from 'react'
import { AiOutlineRise } from 'react-icons/ai'

export default function SectionTotalBalance ({ user }) {
  return (
    <div
      className='w-full h-[300px] flex flex-col justify-center items-center bg-white p-3 rounded-2xl'
      style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
    >
      <div className='w-28 h-28 relative  rounded-full  overflow-hidden'>
        <img
          src={user.image}
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
      <div className='flex flex-col text-center mt-2'>
        <h4 className='text-lg font-semibold text-slate-950'>
          Total Balance
        </h4>
        <span className='text-2xl font-bold text-[#1a1a1a]'>
          ${user.balance}
        </span>
        <div className='flex mt-2 justify-center'>
          <span className='text-sm font-bold py-1 px-3 mr-2 text-white bg-[#4360ef] rounded-xl'>
            {user.balancePercentege}%
          </span>
          <span className='text-lg font-bold py-1 px-3 text-white bg-[#4360ef] grid place-content-center rounded-xl'>
            <AiOutlineRise />
          </span>
        </div>
      </div>
    </div>
  )
}
