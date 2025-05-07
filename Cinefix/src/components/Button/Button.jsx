import React from 'react'
import './Button.css'

const Button = ({ children, variant = 'filled', onClick }) => {
  return (
    <>
      <button className={`btn ${variant === 'outline' ? 'btn-outline' : 'btn-filled'}`} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button

{/* <Button>Play Now</Button> // Default filled
<Button variant="outline">Add to List</Button> */}