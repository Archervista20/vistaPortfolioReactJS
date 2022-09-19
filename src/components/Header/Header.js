import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  
  const [click, setClick] = useState(true)
  const toggleMenu = () => {
     setClick(!click)
  }

  useEffect(() => {
    setClick(true)
  }, []);
  
  return (
    <header className="header">
      <Link to='/'>Hello World</Link>
      <nav className="nav-menu">
        <ul className="links">
          <li className="link"><Link to='./products'>Products</Link></li>
          <li className="link"><Link to='./destinations'>Destinations</Link></li>
          <li className="link"><Link to='./reservations'>Reservations</Link></li>
          <li className="link"><Link to='./contact-us'>Contact Us</Link></li>
        </ul>
      </nav>
      <div onClick={toggleMenu} className='menu'>
        { click ? <span class="material-symbols-outlined">menu</span> : <span class="material-symbols-outlined">close</span>}
      </div>
    </header>
  )
}

export default Header