import React, { useContext, useState } from 'react'
import SvgLogin from '../../components/SvgLogin'
import { Link, useNavigate } from 'react-router-dom'
import Context from '../../context/userContext'

export default function Login () {
  const navigate = useNavigate()
  const { setUser } = useContext(Context)
  const [user, setUserLocal] = useState({
    email: '',
    password: '',
    image: 'https://img.wattpad.com/8f19b412f2223afe4288ed0904120a48b7a38ce1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5650722d38464e2d744a515349673d3d2d3234323931353831302e313434336539633161633764383437652e6a7067?s=fit&w=720&h=720'
  })

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

  return (
    <main className='flex justify-center items-center min-h-[100vh] w-full'>
      <div>
        <SvgLogin height={450} width={450} />
      </div>
      <form action='' onSubmit={handleSubmit} className='flex flex-col items-center bg-white p-5 rounded-lg justify-center min-h-[400px] min-w-[500px]'>
        <h3>Sign in</h3>
        <div className='flex flex-col'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' name='name' id='name' onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={handleChange} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Contraseñas</label>
          <input type='password' name='password' id='passworld' onChange={handleChange} />
        </div>
        <div>
          <input type='checkbox' name='' id='' />
          <label htmlFor='sign'>i agree fro</label>
        </div>
        <button className='bg-purple-700 text-white py-1 px-9 rounded-2xl'>Login</button>
        <div className='text-center'>
          <h4>Or Sign With</h4>
          <ul className='flex'>
            <li>Google</li>
            <li>Git Hub</li>
            <li>Microsoft</li>
          </ul>
        </div>
        <div><h6>No tienes cuenta??? <Link to='/register'>Register</Link></h6></div>
      </form>
    </main>
  )
}
