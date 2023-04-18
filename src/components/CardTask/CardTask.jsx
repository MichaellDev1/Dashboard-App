import React, { useRef, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { TbPencilPlus } from 'react-icons/tb'

export default function CardTask ({ data, deleteTask, saveTask, handleCompleted }) {
  const [editable, setEditable] = useState(false)
  const refCheckBox = useRef()
  const { nameTask, important, id, completed } = data
  const refTask = useRef()

  const modifyTask = () => {
    setEditable(true)
  }

  return data
    ? <div className='flex items-center bg-white my-3 py-5 max-w-[600px] rounded-2xl sm:min-w-[450px] justify-between px-5' style={{ boxShadow: '0px 10px 10px rgba(0 0 0 / 3%)' }}>
      <div className='flex relative items-center justify-between'>
        <div className='mr-5 min-h-[35px] pr-3 flex' style={{ borderRight: `2px solid ${completed ? '#12ec0d' : '#f14a87'}` }}>
          <input type='checkbox' checked={completed} name='check' id='check' onChange={(e) => handleCompleted({ id, isCompleted: e.target.checked })} />
        </div>
        {
        completed
          ? <del className='font-semibold text-[18px]'>{nameTask}</del>
          : <div className='flex flex-col font-semibold text-[18px] max-w-[200px]' style={{ lineHeight: '1' }}>
            <h6 contentEditable={editable} ref={refTask}>{nameTask}</h6>
            {important ? <span className='text-base font-normal text-[#bebebe]'>Important</span> : null}
            </div>
      }
      </div>
      <div className='ml-5 flex'>
        {
        completed
          ? null
          : <div className='flex items-center'>
            {
        editable
          ? <div className='flex items-center mr-5'>
            <input type='checkbox' name='important' id='important' ref={refCheckBox} />
            <span>Important</span>
            </div>
          : null
          }
            <button onClick={modifyTask} className='flex text-xl text-[#bebebe]'><TbPencilPlus /></button>
            {
      editable ? <button className='ml-5' onClick={(() => saveTask({ id, setEditable, refTask, refCheckBox }))}>Save</button> : null
     }
          </div>
       }
        <button className='ml-3 text-xl text-[#bebebe]' onClick={() => deleteTask({ id })}><RiCloseFill /></button>
      </div>
    </div>
    : null
}
