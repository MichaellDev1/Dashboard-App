import React, { useContext, useState } from 'react'
import Header from '../components/Header/index'
import Menu from '../components/Menu/index'
import Dashboard from '../page/Dashboard/index'
import Market from '../page/Market'
import ToDoApp from '../page/ToDo'
import WeekToDo from '../page/WeekToDo'
import MenuUserSetting from '../components/MenuUserSetting'
import PrivateRouter from '../components/PrivateRouter'
import Login from '../page/Login'
import Context from '../context/userContext'
import Detail from '../page/Detail'
import Favorite from '../page/Favorite'
import Wallet from '../page/Wallet'
import Setting from '../page/Setting'
import Home from '../page/Home/index'
import { IoMdClose } from 'react-icons/io'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Routers () {
  const { user } = useContext(Context)
  const [menuHidden, setMenuHidden] = useState(false)
  const [menuUserHidden, setMenuUserHidden] = useState(false)
  const handleOpenMenuUser = () => {
    setMenuUserHidden(!menuUserHidden)
  }

  return (
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
          <Menu menuHidden={menuHidden} setMenuHidden={setMenuHidden} />
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
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/setting' element={<Setting />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
