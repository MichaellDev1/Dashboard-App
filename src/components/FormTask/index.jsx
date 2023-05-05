import React from 'react'

export default function FormTask ({ refCheckImportant, handleAddTask, hanldeChange, newTask }) {
  return (
    <form className='flex items-center flex-wrap justify-center' onSubmit={handleAddTask}>
      <div className='relative'>
        <input type='text' name='task' id='inputTask' onChange={(e) => hanldeChange(e)} className='bg-transparent py-[6px] pr-8 font-medium text-base my-3 px-3 outline-none rounded-2xl' style={{ border: '2px solid #bebebe' }} value={newTask} />
        <div className='mx-3 flex items-center absolute right-0 top-0 h-full'>
          <input type='checkbox' ref={refCheckImportant} />
        </div>
      </div>
      <button className='bg-[#1d4cc0] ml-3  my-3 text-white font-semibold text-base py-2 px-5 rounded-2xl'>Create task</button>
    </form>
  )
}
