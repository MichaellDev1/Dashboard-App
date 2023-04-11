import React from 'react'
import Routers from './routers/routers'
import { UserContext } from './context/userContext'

export default function App () {
  return (
    <UserContext>
      <Routers />
    </UserContext>
  )
}
