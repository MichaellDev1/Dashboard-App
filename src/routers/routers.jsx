import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../container/Header/index'
import Menu from '../container/Menu/index'
import Dashboard from '../page/Dashboard/index'
import Market from '../page/Market'
import { IoMdClose } from 'react-icons/io'
import { HiMenuAlt1 } from 'react-icons/hi'
import ToDoApp from '../page/ToDo'
import WeekToDo from '../page/WeekToDo'
import MenuUserSetting from '../components/MenuUserSetting'
import PrivateRouter from '../components/PrivateRouter'
import Login from '../page/Login'
import Context from '../context/userContext'
import Detail from '../page/Detail'

export default function Routers () {
  const { user } = useContext(Context)
  const [menuHidden, setMenuHidden] = useState(false)
  const [menuUserHidden, setMenuUserHidden] = useState(false)

  const handleOpenMenuUser = () => {
    setMenuUserHidden(!menuUserHidden)
  }

  return (
    <div className='lg:pl-[calc(100% / 256px)] lg:ml-64'>
      <BrowserRouter>
        {user
          ? <>
            {menuUserHidden ? <MenuUserSetting /> : null}
            <button
              className='p-3 bg-[#4360EF] text-[#fff] rounded-full fixed bottom-10 text-2xl z-20 right-10 lg:hidden block'
              onClick={() => setMenuHidden(!menuHidden)}
            >
              {menuHidden
                ? <IoMdClose />
                : <HiMenuAlt1 />}
            </button>
            <Menu menuHidden={menuHidden} />
            <Header handleOpenMenuUser={handleOpenMenuUser} />
          </>
          : null}
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/detail/:keyword' element={<Detail />} />
            <Route path='/market' element={<Market />} />
            <Route path='/todolist' element={<ToDoApp />} />
            <Route path='/todolist/:week' element={<WeekToDo />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
