import React from 'react'
import Navbar from '../navbar/page'

export default function UserTemplate({children}) {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
