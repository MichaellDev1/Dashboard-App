import React, { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { RiSendPlaneFill } from 'react-icons/ri'
import './index.css'

const chatUser = [
  {
    id: 0,
    name: 'Maria',
    img: 'https://img.freepik.com/psd-gratis/ilustracion-3d-persona-gafas-sol-cabello-verde_23-2149436201.jpg?w=740&t=st=1681848399~exp=1681848999~hmac=b0e4efe2efa39d312b248e195749c05408f63be6057ac0e481120ba581645761',
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
    img: 'https://img.freepik.com/psd-gratis/3d-ilustracion-persona_23-2149436192.jpg?w=740&t=st=1681848440~exp=1681849040~hmac=fa2d49d0f5ce9123f075a91071d9c6428dd991e9a31667cf2191120e2432f782',
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
    img: 'https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436200.jpg?w=740&t=st=1681848424~exp=1681849024~hmac=2aeac37ce916ee54b646731854b36418948ca882a6e0083edb5ff282af523436',
    menssages: [
      {
        name: 'Daniel',
        mensagge: 'Hola como te va????',
        date: new Date()
      }
    ]
  }
]

export default function Chat ({ handleOpenChat }) {
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
    <div className='w-full h-[100vh] absolute top-0 left-0'>
      <div className='w-full absolute z-[5] top-0 left-0 h-[100vh] bg-[#03030305]' onClick={() => handleOpenChat()} />
      <div className='fixed z-10 p-5 rounded-lg lg:w-[500px] w-[340px] h-[500px] bg-[#fff] top-20 left-0 right-0 m-auto' style={{ boxShadow: '0px 10px 20px rgba(0 0 0 / 10%)' }}>
        <div className='h-[40px] flex items-center'>
          {selected !== null
            ? <div className='flex items-center'>
              <button className='text-xl mr-2' onClick={() => handleAtras()}><BiArrowBack /></button>
              <div className='w-9 h-9 rounded-full overflow-hidden'>
                <img src={selected.img} alt='user chat' className='w-full h-full object-cover' />
              </div>
              <div>
                <h3 className='text-base ml-2 font-semibold capitalize'>{selected.name}</h3>
              </div>
              </div>
            : null}
          {selected == null ? <h4 className='text-[19px] font-semibold'>Chat</h4> : null}
        </div>
        {
    selected === null
      ? <ul className='flex flex-col'>
        {chatUsers.map(res => (
          <li key={res.id} className='my-2 cursor-pointer'>
            <div
              className='bg-transparent w-full py-1
        px-2 flex items-center'
              onClick={() => handleEnterChat(res.id)}
            >
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <img src={res.img} alt='user chat' className='w-full h-full object-cover' />
              </div>
              <h3 className='text-base ml-2 font-semibold capitalize'>{res.name}</h3>
            </div>
          </li>
        ))}
      </ul>
      : <div className='h-full relative py-5'>
        <ul className='flex flex-col overflow-y-scroll px-2 chat-messages-content h-[365px]' ref={refContentChat}>
          {selected.menssages.map((res, inx) => (
            <li key={inx} className={`${res.name === 'user' ? 'bg-[#526EE7] text-white  self-end text-right' : 'bg-[#f0f0f0] text-black self-start'} max-w-[180px] font-mediumtext-base rounded-2xl my-2 block py-2 px-3`}>
              <div>{res.mensagge}</div>
            </li>
          ))}
        </ul>

        <form action='' onSubmit={handleSubmit} className='absolute bottom-8 flex w-full'>
          <input type='text' ref={refInput} name='chat' onChange={handleChange} className='py-2 w-[100%] bg-[#bdbdbd] text-white rounded-3xl placeholder:text-[#fff] placeholder:font-normal outline-none px-5' id='chat' placeholder='Message' />
          <button className='ml-2 bg-[#526EE7] h-[43px] w-[55px] flex justify-center items-center rounded-full text-white text-xl'><RiSendPlaneFill /></button>
        </form>
      </div>
  }
      </div>
    </div>
  )
}
