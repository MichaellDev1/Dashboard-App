import React from 'react'
import CardWeeks from '../../components/CardWeeks'
import { tasks } from '../../Db/task'

export default function ToDoApp () {
  return (
    <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='font-bold text-2xl '>To Do List Weeks</h1>

      <ul className='text-black w-full flex flex-col justify-center items-center min-h-[460px] gap-3'>
        {tasks.map(week => (
          <li key={week.week} className=' sm:w-[420px] w-[290px] cursor-pointer'>
            <CardWeeks week={week.week} />
          </li>
        ))}
      </ul>
    </div>
  )
}
