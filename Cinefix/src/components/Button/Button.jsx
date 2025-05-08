import React from 'react'
import './Button.css'

const Button = ({ children, variant = 'filled', onClick, icon }) => {

  const variantClass = variant === 'outline' ? 'btn-outline' : variant === 'iconText' ? 'btn-icon-text' : 'btn-filled';

  return (
    <>
      {/* <button className={`btn ${variant === 'outline' ? 'btn-outline' : 'btn-filled'}`} onClick={onClick}>{children}</button> */}

      <button className={`btn ${variantClass}`} onClick={onClick}>
        {variant === 'iconText' && icon && <i className={`btn-icon ${icon}`}></i>}
        {children}
      </button>
    </>
  )
}

export default Button

{/* <Button>Play Now</Button> // Default filled
<Button variant="outline">Add to List</Button> 
<Button variant="iconText" icon={<FaPlay />}>Play Now</Button>*/}