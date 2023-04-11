import React, { createContext, useState } from 'react'

const Context = createContext({

})

export function UserContext ({ children }) {
  const [user, setUser] = useState(null)
  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
