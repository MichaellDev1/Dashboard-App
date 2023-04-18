import React, { useRef, useState } from 'react'

export default function CardTask ({ data, deleteTask, saveTask }) {
  const [editable, setEditable] = useState(false)
  const [isCompleted, setCompleted] = useState(false)
  const refCheckBox = useRef()
  const { nameTask, important, id } = data
  const refTask = useRef()

  const modifyTask = () => {
    setEditable(true)
  }

  const handleCompleted = (e) => {
    setCompleted(e.target.checked)
  }

  return data
    ? <div className='flex items-center'>
      <input type='checkbox' name='check' id='check' className='mr-2' />
      <span contentEditable={editable} ref={refTask}>{nameTask}</span>
      <div className='ml-5 flex'>
        {
          editable
            ? <div className='flex items-center mr-5'>
              <input type='checkbox' name='important' id='important' />
              <span>Important</span>
              </div>
            : null
        }
        <button onClick={modifyTask}>Edit</button>
        <button className='ml-5' onClick={() => deleteTask({ id })}>Delete</button>
        {
        editable ? <button className='ml-5' onClick={(() => saveTask({ id, setEditable, refTask }))}>Save</button> : null
       }
      </div>
    </div>
    : null
}
