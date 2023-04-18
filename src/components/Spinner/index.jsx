import React from 'react'
import './index.css'

export default function Spinner () {
  return (
    <div className='relative my-10 h-[60px] flex items-end'>
      <div className=' mx-1 bg-blue-500 spinner' />
      <div className=' mx-1 bg-green-500 spinner' />
      <div className=' mx-1 bg-amber-500 spinner' />
      <div className=' mx-1 bg-red-500 spinner' />
    </div>
  )
}
