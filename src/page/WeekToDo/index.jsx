import { useParams } from 'react-router-dom'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Context from '../../context/userContext'
import CardTask from '../../components/CardTask/CardTask'
import ContentSection from '../../components/ContentSection/index'

export default function WeekToDo () {
  const { week } = useParams()
  const { user, setUser } = useContext(Context)
  const [newTask, setNewTask] = useState('')
  const taskList = JSON.parse(window.localStorage.getItem('tasks'))
  const inxWeek = taskList.findIndex(res => res.week === week)
  const [tasks, setTasks] = useState()
  const refCheckImportant = useRef()

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')))
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
      important: refCheckImportant.current.checked,
      completed: false
    }
    taskList[inxWeek].task = [createTask, ...tasks]
    window.localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks([createTask, ...tasks])
    setNewTask('')
  }

  const handleDeleteTask = ({ id }) => {
    const deleteTask = taskList[inxWeek].task.filter(taskk => taskk.id !== id)
    taskList[inxWeek].task = deleteTask
    window.localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks(taskList[inxWeek].task)
  }

  const handleSaveTask = ({ id, setEditable, refTask, refCheckBox, isCompleted }) => {
    const inxTaskEditable = taskList[inxWeek].task.findIndex(task => task.id === id)
    taskList[inxWeek].task[inxTaskEditable] = {
      id,
      nameTask: refTask.current.textContent,
      important: refCheckBox.current.checked,
      completed: isCompleted
    }
    window.localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks(taskList[inxWeek].task)
    setEditable(false)
  }

  const handleCompleted = ({ id, isCompleted }) => {
    const inxTaskEditable = taskList[inxWeek].task.findIndex(task => task.id === id)
    taskList[inxWeek].task[inxTaskEditable] = {
      ...taskList[inxWeek].task[inxTaskEditable],
      completed: isCompleted
    }
    window.localStorage.setItem('tasks', JSON.stringify(taskList))
    setTasks(taskList[inxWeek].task)
  }

  return user
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <h1 className='text-2xl font-semibold mb-2 capitalize'>{week}</h1>

        <div className='flex w-full h-[70vh] flex-col items-center'>
          <form className='flex items-center flex-wrap justify-center' onSubmit={handleAddTask}>
            <div className='relative'>
              <input type='text' name='task' id='inputTask' onChange={(e) => hanldeChange(e)} className='bg-transparent py-[6px] pr-8 font-medium text-base my-3 px-3 outline-none rounded-2xl' style={{ border: '2px solid #bebebe' }} value={newTask} />
              <div className='mx-3 flex items-center absolute right-0 top-0 h-full'>
                <input type='checkbox' ref={refCheckImportant} />
              </div>
            </div>
            <button className='bg-[#1d4cc0] ml-3  my-3 text-white font-semibold text-base py-2 px-5 rounded-2xl'>Create task</button>
          </form>
          <ul className='mt-5'>
            {
            tasks
              ? tasks.map(({ id, important, nameTask, completed }) => (
                <li key={id}>
                  <CardTask data={{ id, important, nameTask, completed }} saveTask={handleSaveTask} handleCompleted={handleCompleted} deleteTask={handleDeleteTask} />
                </li>
              ))
              : null
          }
          </ul>
        </div>
      </div>
    </ContentSection>
    : null
}
