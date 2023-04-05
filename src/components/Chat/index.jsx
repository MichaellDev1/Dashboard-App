import React, { useEffect, useRef, useState } from 'react'

const chatUser = [
  {
    id: 0,
    name: 'Maria',
    image: '..',
    menssages: [
      {
        name: 'Maria',
        mensagge: 'Estoy interesada en comprarte bitcoin!!!',
        date: new Date()
      }
    ]
  },
  {
    id: 1,
    name: 'Alice',
    image: '..',
    menssages: [
      {
        name: 'Alice',
        mensagge: 'Hola como te va????',
        date: new Date()
      }
    ]
  },
  {
    id: 2,
    name: 'Daniel',
    image: '..',
    menssages: [
      {
        name: 'Daniel',
        mensagge: 'Hola como te va????',
        date: new Date()
      }
    ]
  }
]

export default function Chat () {
  const [selected, setSelected] = useState(null)
  const [menssageUser, setMenssageUser] = useState('')
  const [chatUsers, setChatUsers] = useState([])
  const refInput = useRef()
  const refContentChat = useRef()

  useEffect(() => {
    setChatUsers(chatUser)
  }, [])

  const handleEnterChat = (user) => {
    const userSelected = chatUsers.find(res => res.id === user)
    setSelected(userSelected)
  }

  const handleAtras = () => {
    setSelected(null)
  }

  const handleChange = (e) => {
    setMenssageUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      name: 'user',
      mensagge: menssageUser,
      date: new Date()
    }
    selected.menssages.push(newMessage)
    setChatUsers([...chatUsers])
    refInput.current.value = ''
    refContentChat.current.scrollTop = refContentChat.current.scrollHeight
  }
  return (
    <div className='fixed z-10 p-5 rounded-lg w-[320px] h-[500px] bg-[#f9f9f9] top-20 left-0 right-0 m-auto' style={{ boxShadow: '0px 2px 20px rgba(0 0 0 / 7%)' }}>
      <div className='h-[40px] flex gap-3 items-center'>
        {selected !== null ? <button onClick={() => handleAtras()}>Atras</button> : null}
        <h4>Chat</h4>
      </div>
      {
        selected === null
          ? <ul className='flex flex-col gap-5'>
            {chatUsers.map(res => (
              <li key={res.id} className='cursor-pointer'>
                <div
                  className='bg-[#e4e3e3] w-full py-3
            px-2 flex items-center gap-2'
                  onClick={() => handleEnterChat(res.id)}
                >
                  <div className='w-10 h-10 bg-black rounded-full ' />
                  <h4>{res.name}</h4>
                </div>
              </li>
            ))}
            </ul>
          : <div className='h-full relative'>
            <h3>{selected.name}</h3>
            <ul className='flex flex-col gap-3 overflow-y-scroll h-[365px]' ref={refContentChat}>
              {selected.menssages.map((res, inx) => (
                <li key={inx} className={`${res.name === 'user' ? 'bg-green-400 text-right' : 'bg-slate-300 text-left'} font-medium text-base rounded-2xl block py-2 px-3`}>
                  <div>{res.mensagge}</div>
                </li>
              ))}
            </ul>
            <form action='' onSubmit={handleSubmit} className='absolute bottom-7 w-full'>
              <input type='text' ref={refInput} name='chat' onChange={handleChange} className='py-2 w-[100%] bg-slate-300 rounded-3xl outline-none px-5' id='chat' />
            </form>
            </div>
      }
    </div>
  )
}
