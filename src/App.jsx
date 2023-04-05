import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './container/Header'
import Menu from './container/Menu'
import Dashboard from './page/Dashboard/index'
import Market from './page/Market'
import { IoMdClose } from 'react-icons/io'
import { HiMenuAlt1 } from 'react-icons/hi'
import ToDoApp from './page/ToDo'
import WeekToDo from './page/WeekToDo'
import MenuUserSetting from './components/MenuUserSetting'
import Login from './page/Login'

export default function App () {
  const [menuHidden, setMenuHidden] = useState(false)
  const [menuUserHidden, setMenuUserHidden] = useState(false)

  const handleOpenMenuUser = () => {
    setMenuUserHidden(!menuUserHidden)
  }
  return (
    <>
      <button className='p-3 bg-[#4360EF] text-[#fff] rounded-full fixed bottom-10 text-2xl z-20 right-10 lg:hidden block' onClick={() => setMenuHidden(!menuHidden)}>
        {
          menuHidden ? <IoMdClose /> : <HiMenuAlt1 />
        }
      </button>
      <Menu menuHidden={menuHidden} />
      {menuUserHidden ? <MenuUserSetting /> : null}
      <div className='lg:pl-[calc(100% / 256px)] lg:ml-64'>
        <Header handleOpenMenuUser={handleOpenMenuUser} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/market' element={<Market />} />
            <Route path='/todolist' element={<ToDoApp />} />
            <Route path='/todolist/:week' element={<WeekToDo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
