import React from 'react'
import CardTask from '../CardTask/CardTask'

export default function ListTask ({ tasks, handleCompleted, handleDeleteTask, handleSaveTask }) {
  return (
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
  )
}
