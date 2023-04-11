import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function useTask () {
  const { week } = useParams()
  const [newTask, setNewTask] = useState('')
  const tasks = JSON.parse(localStorage.getItem('task'))
  const inxWeek = tasks.findIndex(task => task.week === week)
  const taskList = tasks[inxWeek].task

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTaskCreate = [
      ...tasks[inxWeek].task,
      {
        id: tasks[inxWeek].length,
        nameTask: newTask,
        important: false
      }
    ]
    setTasksList(newTaskCreate)
    tasks[inxWeek].task.push(newTaskCreate)
    localStorage.setItem('task', JSON.stringify(tasks))
  }

  useEffect(() => {
    const findTask = tasks.find(wee => wee.week === week)
    setTasksList(findTask.task)
  }, [])

  const deleteTask = (id) => {
    const filterTask = tasks[inxWeek].filter(res => res.id !== id)
    setTasksList(filterTask)
    localStorage.setItem('task', JSON.stringify())
  }

  const saveTask = ({ id, refTask, refCheckBox, setEditable }) => {
    const task = tasks[inxWeek].findIndex(tas => tas.id === id)
    tasks[inxWeek][task] = {
      id,
      nameTask: refTask.current.textContent,
      important: refCheckBox.current.checked
    }
    setEditable(false)
    setTasksList([...tasks[inxWeek]])
    localStorage.setItem('task', JSON.stringify(tasks))
  }

  return { deleteTask, saveTask, handleChange, handleSubmit, taskList, setTasksList }
}
