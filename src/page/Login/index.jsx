import React, { useContext, useState } from 'react'
import SvgLogin from '../../components/SvgLogin'
import { Link, useNavigate } from 'react-router-dom'
import Context from '../../context/userContext'
import { startUser } from '../../Db/startUser'

export default function Login () {
  const navigate = useNavigate()
  const { setUser } = useContext(Context)
  const [user, setUserLocal] = useState(startUser)

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
