import React from 'react'
import './Footer.css'
import logo from '../../images/logo-img.svg';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src={logo} alt="Logo" className='footer-img' />
      </footer>
    </>
  )
}

export default Footer