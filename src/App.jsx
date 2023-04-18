import React, { Suspense } from 'react'

import { UserContext } from './context/userContext'
import Spinner from './components/Spinner'
const Routers = React.lazy(() => import('./routers/routers'))

export default function App () {
  return (
    <UserContext>
      <Suspense fallback={<div className='w-[100%] flex h-[100vh] justify-center items-center'><Spinner /></div>}>
        <Routers />
      </Suspense>
    </UserContext>
  )
}
