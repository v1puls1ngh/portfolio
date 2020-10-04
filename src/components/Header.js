import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <Link className='mainTitle' to="/">
                <span className='firstLetter'>T</span>echMonk
            </Link>
            <ul>
                <li>
                    <NavLink className='nav-link' to="/work">Work</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to="/contact">Contact</NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default Header;