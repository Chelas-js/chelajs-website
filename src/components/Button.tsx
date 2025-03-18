import React from 'react'
import { PropsWithChildren } from 'react'

export interface ButtonProps {
  onClick: () => void
}


export  function Button({children, onClick}: PropsWithChildren<ButtonProps>) {
  return (
    <button className='p-4 bg-green-400 border rounded-lg' onClick={onClick}>{children}</button>
  )
}
