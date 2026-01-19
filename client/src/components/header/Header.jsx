import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLoggedIn = true;
  return (
    <div className='header'>    
        <div className="header-wrapper">
            <p className="logo"><Link className="nav-link" to="/">PMMP</Link> </p>
            <nav className="nav-menu-container">
                <ul className="nav-list">
                    <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
                     <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                      {isLoggedIn ? <>
                        
                        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/score">Score</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                      </> : 
                        <li className="nav-item">Login</li>
                      }                    
                </ul>
            </nav>
            <p className="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? '✕' : '☰'}</p>
        </div>
        <nav className="mobile-menu">
            {isMenuOpen ? 
            <ul className="nav-mobile-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                     <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                      {isLoggedIn ? <>
                        
                        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/score">Score</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                      </> : 
                        <li className="nav-item">Login</li>
                      }                    
            </ul>
            : <></>
        }
            
        </nav> 
    </div>
  )
}

export default Header