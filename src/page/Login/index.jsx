import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from '../../context/userContext'
import { startUser } from '../../Db/startUser'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdOutlineMailOutline, MdOutlineVisibility } from 'react-icons/md'
import { IconGitHub, IconGoogle, IconMicrosoft } from '../../components/Icons/index'
import { AiOutlineUser } from 'react-icons/ai'
import './index.css'

export default function Login () {
  const navigate = useNavigate()
  const [isShow, setShow] = useState(false)
  const { setUser } = useContext(Context)
  const [user, setUserLocal] = useState(startUser)
  const userLocal = localStorage.getItem('user')

  if (userLocal) return <Navigate to='/dashboard' />
  const handleChange = (e) => {
    setUserLocal({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/dashboard')
  }

  const handleVisibilityPassword = (e) => {
    e.preventDefault()
    setShow(!isShow)
  }

  return (
    <main className='flex justify-center items-center min-h-[100vh] w-full'>
      <form action='' onSubmit={handleSubmit} className='flex flex-col items-center bg-white md:p-10 p-5 rounded-lg justify-center min-h-[400px] md:min-w-[420px] min-w-[300px]' style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}>
        <div className='text-center mb-7'>
          <h3 className='text-[#1137bf] font-bold text-4xl uppercase'>Welcome</h3>
          <h3 className='text-[#adacac] font-medium text-base'>Sign to continue</h3>
        </div>
        <div className=' relative flex my-2 flex-col w-full'>
          <input required='required' className='inputs-login' type='text' name='name' id='name' onChange={handleChange} />
          <label className='labels-login' htmlFor='name'>Name</label>
          <span className='icons-input'><AiOutlineUser /></span>
        </div>
        <div className=' relative flex my-2 flex-col w-full'>
          <input required='required' className='inputs-login' type='email' name='email' id='email' onChange={handleChange} />
          <label className='labels-login' htmlFor='email'>Email</label>
          <span className='icons-input'><MdOutlineMailOutline /></span>
        </div>
        <div className=' relative flex my-2 flex-col w-full'>
          <input required='required' className='inputs-login' type={`${isShow ? 'text' : 'password'}`} name='password' id='passworld' onChange={handleChange} />
          <label className='labels-login' htmlFor='password'>Password</label>
          <span className='icons-input'><RiLockPasswordLine /></span>
          <button className='btn-visibility' onClick={(e) => handleVisibilityPassword(e)}><MdOutlineVisibility /></button>
        </div>
        <div className='w-full flex justify-start my-1'>
          <a href='#' className='text-[#1137bf] font-semibold text-sm'>Did you forget your password?</a>
        </div>
        <button className='bg-[#003cc0] font-medium w-full text-white py-2 px-9 my-1 transition-[background-color] hover:bg-[#1a50c4] rounded-md uppercase'>Login</button>
        <div className='text-center mt-2'>
          <h4 className='text-base text-stone-800 font-medium'>Or Sign With</h4>
          <ul className='flex my-2'>
            <li className='mx-2'><a href='#'><IconGoogle /></a></li>
            <li className='mx-2'><a href='#'><IconMicrosoft /></a></li>
            <li className='mx-2'><a href='#'><IconGitHub /></a></li>
          </ul>
        </div>
        <div><h6 className='text-stone-600 text-base'>You do not have an account??? <Link to='/register' className='text-blue-500'>Sign up</Link></h6></div>
      </form>
    </main>
  )
}
