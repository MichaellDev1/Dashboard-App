import React, { useContext, useEffect, useState } from 'react'
import CardWeeks from '../../components/CardWeeks'
import Context from '../../context/userContext'
import { weeks } from '../../Db/weeks'

export default function ToDoApp () {
  const [tasks, setTask] = useState()
  const { setUser } = useContext(Context)

  useEffect(() => {
    const verifiWeeksLocalStorage = JSON.parse(localStorage.getItem('tasks'))
    setUser(JSON.parse(localStorage.getItem('user')))

    if (verifiWeeksLocalStorage) {
      setTask(verifiWeeksLocalStorage)
    } else {
      setTask(weeks)
      localStorage.setItem('tasks', JSON.stringify(weeks))
    }
  }, [])

  return tasks
    ? <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='text-2xl font-semibold'>To Do List Weeks</h1>
      <ul className='text-black w-full flex flex-col justify-center items-center min-h-[460px]'>
        {tasks.map(week => (
          <li key={week.week} className=' sm:w-[500px] w-[290px] cursor-pointer my-2'>
            <CardWeeks week={week.week} borderColor={week.color} />
          </li>
        ))}
      </ul>
      </div>
    : <h3>Nash</h3>
}
