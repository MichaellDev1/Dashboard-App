import React from 'react'
import CardWallet from '../CardWallet'

export default function ListCoins ({ user }) {
  return (
    <ul className='w-full'>
      {
  user.coins.length > 0
    ? user.coins.map(({ id, image, name, amountUsd, amount, symbol }) => (
      <CardWallet amount={amount} id={id} key={id} name={name} symbol={symbol} image={image} />
    ))
    : <h4 className='text-base font-normal text-[#919191]'>No record</h4>
}
    </ul>
  )
}
