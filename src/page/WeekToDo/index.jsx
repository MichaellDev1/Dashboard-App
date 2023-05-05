import { useParams } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'
import Context from '../../context/userContext'
import ContentSection from '../../components/ContentSection/index'
import FormTask from '../../components/FormTask'
import ListTask from '../../components/ListTask'
import weekToDo from '../../helper/weekToDo'

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

  const { handleAddTask, handleCompleted, handleDeleteTask, handleSaveTask, hanldeChange } = weekToDo({ inxWeek, newTask, refCheckImportant, setNewTask, setTasks, taskList, tasks })

  return user
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <h1 className='text-2xl font-semibold mb-2 capitalize'>{week}</h1>
        <FormTask handleAddTask={handleAddTask} hanldeChange={hanldeChange} newTask={newTask} refCheckImportant={refCheckImportant} />
        <div className='flex w-full h-[70vh] flex-col items-center'>
          <ListTask handleCompleted={handleCompleted} handleDeleteTask={handleDeleteTask} handleSaveTask={handleSaveTask} tasks={tasks} />
        </div>
      </div>
    </ContentSection>
    : null
}
