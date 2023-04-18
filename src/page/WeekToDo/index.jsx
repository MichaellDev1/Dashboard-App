import { useParams } from 'react-router-dom'
import { useCallback, useContext, useEffect, useState } from 'react'
import Context from '../../context/userContext'

export default function WeekToDo () {
  const { week } = useParams()
  const { user, setUser } = useContext(Context)
  const [newTask, setNewTask] = useState('')
  const taskList = JSON.parse(localStorage.getItem('tasks'))
  const inxWeek = taskList.findIndex(res => res.week === week)
  const [tasks, setTasks] = useState()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    setTasks(taskList[inxWeek].task)
    console.log(taskList[inxWeek])
  }, [])

  const hanldeChange = useCallback((e) => {
    setNewTask(e.target.value)
  }, [])

  const handleAddTask = (e) => {
    e.preventDefault()
  }

  return user
    ? <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='font-bold text-2xl '>{week}</h1>

      <div>
        <form className='flex items-center' onSubmit={handleAddTask}>
          <input type='text' name='task' id='inputTask' onChange={(e) => hanldeChange(e)} />
          <button>Add</button>
        </form>
        <ul>
          {
            tasks
              ? tasks.map(({ id, important, nameTask }) => (
                <li key={id}>
                  <span>{nameTask}</span>
                </li>
              ))
              : null
          }
        </ul>
      </div>
      </div>
    : null
}
