import React from 'react'
import CardWeeks from '../../components/CardWeeks'
export default function ToDoApp () {
  const tasks = JSON.parse(localStorage.getItem('task'))
  return (
    <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='font-bold text-2xl '>To Do List Weeks</h1>

      <ul className='text-black w-full flex flex-col justify-center items-center min-h-[460px]'>
        {tasks.map(week => (
          <li key={week.week} className=' sm:w-[420px] w-[290px] cursor-pointer my-2'>
            <CardWeeks week={week.week} />
          </li>
        ))}
      </ul>
    </div>
  )
}
