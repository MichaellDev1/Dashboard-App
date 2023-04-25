import React from 'react'
import CardActivity from '../CardActivity'

function CardResentActivity ({ coinActivitie }) {
  return (
    <div
      className='w-full overflow-y-scroll h-[300px] my-5 bg-white p-5 rounded-2xl'
      style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
    >
      <h2 className='font-semibold text-xl mb-3'>Recent Activities</h2>
      <div className='mt-5'>
        <ul className='flex flex-col'>
          {coinActivitie.length > 0
            ? coinActivitie.map(coin => <CardActivity key={coin.id} coin={coin} />)
            : <h4 className='text-sm font-semibold text-[#8f8f8f]'>Ningun registro</h4>}
        </ul>
      </div>
    </div>
  )
}

export default React.memo(CardResentActivity)
