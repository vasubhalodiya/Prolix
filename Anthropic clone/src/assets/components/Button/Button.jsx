import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <>
      <button className='ibutton'>{props.title}</button>
    </>
  )
}

export default Button