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

  return (
    <div>
      {
        data
          ? <div className='flex gap-3'>
            <div>
              <input type='checkbox' name='completed' onChange={handleCompleted} id='completed' />
            </div>
            {isCompleted ? <del>{nameTask}</del> : <h3 contentEditable={editable} ref={refTask}>{nameTask}</h3>}
            <span>{important ? 'Important' : null}</span>
            {editable
              ? <div>
                <div className='flex items-center gap-1'>
                  <label htmlFor=''>Important</label>
                  <input type='checkbox' ref={refCheckBox} />
                </div>
                </div>
              : null}
            <div className='flex gap-3'>
              {editable ? <button onClick={() => saveTask({ id, refTask, refCheckBox, setEditable })} className='text-lime-500'>save</button> : <button onClick={() => modifyTask(id)}>Editar</button>}
              <button onClick={() => deleteTask(id)}>Eliminar</button>
            </div>
            </div>
          : null
    }
    </div>
  )
}
