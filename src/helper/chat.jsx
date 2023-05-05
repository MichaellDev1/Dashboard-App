export default function chatFunctions ({ chatUsers, setChatUsers, selected, setSelected, setMenssageUser, menssageUser, refInput, refContentChat }) {
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
  return { handleAtras, handleChange, handleEnterChat, handleSubmit }
}
