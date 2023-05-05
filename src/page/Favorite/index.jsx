import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/userContext'
import ContentSection from '../../components/ContentSection/index'
import ListFavorite from '../../components/ListFavorite'

export default function Favorite () {
  const { user, setUser } = useContext(Context)
  const [favorites, setFavorites] = useState()

  useEffect(() => {
    const favoriteLocal = window.localStorage.getItem('favorites')
    setUser(JSON.parse(window.localStorage.getItem('user')))
    if (favoriteLocal !== null) setFavorites(JSON.parse(favoriteLocal))
  }, [])

  return user
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <h1 className='text-2xl font-semibold'>Your coins favorites</h1>
        <ListFavorite favorites={favorites} />
      </div>
      </ContentSection>
    : null
}
