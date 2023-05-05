import { useCallback } from 'react'

export default function weekToDo ({ setNewTask, setTasks, refCheckImportant, tasks, taskList, inxWeek, newTask }) {
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

  return { handleAddTask, handleDeleteTask, handleSaveTask, hanldeChange, handleCompleted }
}
