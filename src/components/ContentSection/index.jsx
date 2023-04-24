import React from 'react'

export default function ContentSection ({ children }) {
  return (
    <div className='lg:pl-[calc(100% / 256px)] lg:ml-64'>{children}</div>
  )
}
