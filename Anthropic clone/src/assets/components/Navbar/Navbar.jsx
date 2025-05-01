import React from 'react';
import './Navbar.css';
import logo from '../../images/logo-img.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'; // 👈 IMPORT THIS

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
            <div className='navbar-link-btn'>
                <ul className='navbar-links-list'>
                    <li className='navbar-link'><Link to="/claude">Claude</Link></li>
                    <li className='navbar-link'><Link to="/api">API</Link></li>
                    <li className='navbar-link'><Link to="/solution">Solution</Link></li>
                    {/* <li className='navbar-link'><Link to="/research">Research</Link></li>
                    <li className='navbar-link'><Link to="/commitments">Commitments</Link></li>
                    <li className='navbar-link'><Link to="/learn">Learn</Link></li>
                    <li className='navbar-link'><Link to="/news">News</Link></li> */}
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link> */}
                </ul>
                <Button title="try Claude" />
            </div>
        </nav>
    );
};

export default Navbar;
