import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [click, setClick] = useState(false)

  const toggleMenuBtn = () => {
    setClick(prevClick => prevClick = !click)
  }
  
  return (
    <header className="primary-header">
      <Link to='/' className='logo'>ArcherVista</Link>
      <nav className={click ? "navigation" : "navigation-inactive"}>
        <ul className="nav-links">
            <li><Link to='/profile'>PROFILE</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </nav>
      <div onClick={toggleMenuBtn} className="menu">
        <i className={ click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </header>
  )
}

export default Header