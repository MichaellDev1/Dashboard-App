import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/userContext'
import ContentSection from '../../components/ContentSection/index'
import { weeks } from '../../Db/weeks'
import ListToDo from '../../components/ListTodoDo'

export default function ToDoApp () {
  const [tasks, setTask] = useState()
  const { setUser } = useContext(Context)

  useEffect(() => {
    const verifiWeeksLocalStorage = JSON.parse(window.localStorage.getItem('tasks'))
    setUser(JSON.parse(window.localStorage.getItem('user')))
    if (verifiWeeksLocalStorage) {
      setTask(verifiWeeksLocalStorage)
    } else {
      setTask(weeks)
      window.localStorage.setItem('tasks', JSON.stringify(weeks))
    }
  }, [])

  return tasks
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <h1 className='text-2xl font-semibold'>To Do List Weeks</h1>
        <ListToDo tasks={tasks} />
      </div>
    </ContentSection>
    : <h3>No existen listas</h3>
}
