import React from 'react'
import { cards } from '../../Db/cards'

export default function SectionBalanceUser ({ user }) {
  return (
    <div
      className='w-full mi-h-[300px] justify-center bg-white relative my-5  py-3 px-5 rounded-2xl'
      style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
    >
      <h2 className='font-semibold text-xl mb-3'>Your Target</h2>

      <div className='flex justify-center items-center sm:flex-row flex-col'>
        {
      cards.map(({ bkgnPrimary, bkgnSecondary, type, number, icon, balance }) => (
        <div key={type} className='rounded-xl relative m-2 text-white shadow-lg py-4 px-5 sm:w-[50%] w-[100%] card-animation' style={{ background: `linear-gradient(30deg,${bkgnPrimary},${bkgnSecondary})` }}>
          <div className='flex justify-end w-full min-h-[30px] text-[40px]'>
            {icon}
          </div>
          <div className='flex flex-col'>
            <h5 className='text-sm font-semibold'>Name</h5>
            <span className='font-normal text-sm'>{user.name}</span>
            <span className='font-normal mt-2'>{number}</span>
            <h5 className='text-sm mt-2 font-semibold'>Balance</h5>
            <span className='font-normal  text-sm'>${balance}</span>
          </div>
        </div>
      ))
    }
      </div>
    </div>
  )
}
