import React from 'react'

export default function FormBuyCoin ({ handleAmountCoin, handleBuyCoin, amount }) {
  return (
    <form className='flex items-center' onSubmit={handleBuyCoin}>
      <div>
        <div className='relative'>
          <input type='number' name='number' value={amount} id='number' onChange={handleAmountCoin} className='mr-1 bg-transparent border-[1px] border-stone-700 py-1 border-solid sm:w-[250px] w-[150px] text-black text-lg rounded-md pr-20 pl-2' />
          <span className='absolute font-medium text-stone-700 right-7 border-l border-stone-700 top-[7px] uppercase px-2'>Usd</span>
        </div>
      </div>
      <button className='bg-[#4360EF] hover:bg-[#3048c2] text-white font-semibold transition-[background-color] text-base rounded-lg py-2 px-5'>Buy</button>
    </form>
  )
}
