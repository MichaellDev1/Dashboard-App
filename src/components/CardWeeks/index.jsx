import React from 'react'
import { Link } from 'react-router-dom'

export default function CardWeeks ({ week, borderColor }) {
  console.log(borderColor)
  return (
    <Link to={`/todolist/${week}`} className='py-5 font-semibold block text-[#141414] text-lg  bg-[#fff] rounded-xl w-full px-5' style={{ boxShadow: '0px 10px 10px rgba(0 0 0 / 3%)', borderLeft: `4px solid ${borderColor}` }}>
      <h4 className='capitalize'>{week}</h4>
    </Link>
  )
}
