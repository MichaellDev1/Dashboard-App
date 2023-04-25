import React from 'react'
import { RxStar, RxStarFilled } from 'react-icons/rx'

export default function SectionAddFavoriteCoin ({ coin, handleAddFavorite, isFavorite }) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col'>
        <div className='flex items-center mb-3'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden mr-2 relative'>
            <img src={coin.large} alt='' className='w-full object-cover h-full' />
          </div>
          <h1 className='text-3xl font-semibold'>{coin.name}</h1>
        </div>
        <span className='text-stone-800 text-2xl font-medium'>${coin.current_price.usd}</span>
        <span className={` ${coin.market_data.price_change_24h_in_currency.usd.toString().includes('-') ? 'text-[#e22222]' : 'text-green-700'} text-base font-medium`}>{coin.market_data.price_change_24h_in_currency.usd}</span>
      </div>
      <div>
        <button className='text-2xl' onClick={handleAddFavorite}>
          {isFavorite ? <span className='text-yellow-400'><RxStarFilled /></span> : <RxStar />}
        </button>
      </div>
    </div>
  )
}
