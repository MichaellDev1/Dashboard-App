import React from 'react'

export default function DetailCoin ({ coin }) {
  return (
    <div className='flex sm:justify-between justify-center my-5 flex-wrap sm:flex-row  flex-col'>
      <div className='flex flex-col m-3'>
        <h6 className='text-lg font-semibold'>Circulating Supply</h6>
        <span className='text-sm font-medium text-[#8f8f8f]'>{coin.circulating_supply}</span>
      </div>
      <div className='flex flex-col m-3'>
        <h6 className='text-lg font-semibold'>Low 24H</h6>
        <span className='text-sm font-medium text-[#8f8f8f]'>${coin.low_24h.usd}</span>
      </div>
      <div className='flex flex-col m-3'>
        <h6 className='text-lg font-semibold'>High_24H</h6>
        <span className='text-sm font-medium text-[#8f8f8f]'>${coin.high_24h.usd}</span>
      </div>
    </div>
  )
}
