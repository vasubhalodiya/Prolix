import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="container">
                <nav className='navbar'>
                    <div className='navbar-logo'>Logo</div>
                    <ul className='navbar-links-list'>
                        <li className='navbar-link'>Claude</li>
                        <li className='navbar-link'>API</li>
                        <li className='navbar-link'>Solution</li>
                        <li className='navbar-link'>Research</li>
                        <li className='navbar-link'>Commitments</li>
                        <li className='navbar-link'>Learn</li>
                        <li className='navbar-link'>News</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar