import { useState, useEffect } from 'react'
import { tasks } from '../Db/task'
import { useParams } from 'react-router-dom'

export default function useTask () {
  const { week } = useParams()
  const [taskList, setTasksList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTaskCreate = [
      ...taskList,
      {
        id: taskList.length,
        nameTask: newTask,
        important: false
      }
    ]
    setTasksList(newTaskCreate)
  }

  useEffect(() => {
    const findTask = tasks.find(wee => wee.week === week)
    setTasksList(findTask.task)
  }, [])

  const deleteTask = (id) => {
    const filterTask = taskList.filter(res => res.id !== id)
    setTasksList(filterTask)
  }

  const saveTask = ({ id, refTask, refCheckBox, setEditable }) => {
    const task = taskList.findIndex(tas => tas.id === id)
    taskList[task] = {
      id,
      nameTask: refTask.current.textContent,
      important: refCheckBox.current.checked
    }
    setEditable(false)
    setTasksList([...taskList])
  }

  return { deleteTask, saveTask, handleChange, handleSubmit, taskList, setTasksList }
}
