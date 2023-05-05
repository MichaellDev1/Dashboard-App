import React from 'react'
import CardWeeks from '../CardWeeks'

export default function ListToDo ({ tasks }) {
  return (
    <ul className='text-black w-full flex flex-col justify-center items-center min-h-[460px]'>
      {tasks.map(week => (
        <li key={week.week} className=' sm:w-[500px] w-[290px] cursor-pointer my-2'>
          <CardWeeks week={week.week} borderColor={week.color} />
        </li>
      ))}
    </ul>
  )
}
