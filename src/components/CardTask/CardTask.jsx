import React, { useRef, useState } from 'react'

export default function CardTask ({ data, deleteTask, saveTask }) {
  const [editable, setEditable] = useState(false)
  const [isCompleted, setCompleted] = useState(false)
  const refCheckBox = useRef()
  const { nameTask, important, id } = data
  const refTask = useRef()

  // const modifyTask = () => {
  //   setEditable(true)
  // }

  // const handleCompleted = (e) => {
  //   setCompleted(e.target.checked)
  // }

  console.log(id)

  return data
    ? <div className='flex items-center'>
      <input type='checkbox' name='check' id='check' />
      <span>{nameTask}</span>
      <div className='ml-5'>
        <button>Edit</button>
        <button className='ml-5' onClick={() => deleteTask({ id })}>Delete</button>
      </div>
      </div>
    : null
}
