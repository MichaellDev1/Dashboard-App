import { useParams } from 'react-router-dom'
import { useCallback, useContext, useEffect, useState } from 'react'
import Context from '../../context/userContext'
import CardTask from '../../components/CardTask/CardTask'

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
  }, [])

  const hanldeChange = useCallback((e) => {
    setNewTask(e.target.value)
  }, [])

  const handleAddTask = (e) => {
    e.preventDefault()
    const createTask = {
      id: tasks.length,
      nameTask: newTask,
      important: false
    }
    taskList[inxWeek].task = [createTask, ...tasks]
    localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks([createTask, ...tasks])
    setNewTask('')
  }

  const handleDeleteTask = ({ id }) => {
    const deleteTask = taskList[inxWeek].task.filter(taskk => taskk.id !== id)
    taskList[inxWeek].task = deleteTask
    localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks(taskList[inxWeek].task)
  }

  const handleSaveTask = ({ id, setEditable, refTask }) => {
    const inxTaskEditable = taskList[inxWeek].task.findIndex(task => task.id === id)
    taskList[inxWeek].task[inxTaskEditable] = {
      id,
      nameTask: refTask.current.textContent,
      important: false
    }
    localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks(taskList[inxWeek].task)
    setEditable(false)
  }

  return user
    ? <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='font-bold text-2xl capitalize py-3'>{week}</h1>

      <div>
        <form className='flex items-center' onSubmit={handleAddTask}>
          <input type='text' name='task' id='inputTask' onChange={(e) => hanldeChange(e)} value={newTask} />
          <button>Add</button>
        </form>
        <ul>
          {
            tasks
              ? tasks.map(({ id, important, nameTask }) => (
                <li key={id}>
                  <CardTask data={{ id, important, nameTask }} saveTask={handleSaveTask} deleteTask={handleDeleteTask} />
                </li>
              ))
              : null
          }
        </ul>
      </div>
      </div>
    : null
}
