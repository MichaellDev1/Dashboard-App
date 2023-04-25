import React from 'react'
import ChartLine from '../ChartLine'

export default function SectionChart ({ data, options }) {
  return (
    <div
      className='w-full h-[300px] flex flex-col justify-center items-center bg-white p-3 rounded-2xl'
      style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
    >
      <ChartLine data={data} options={options} />
    </div>
  )
}
