import React from 'react'
import { Link } from 'react-router-dom'
import './buttons.css'

const styles = ['primary-btn', 'secondary-btn']
const sizes = ['sm-btn', 'md-btn', 'lg-btn']

const Buttons = ({children, type, onClick, btnStyle, btnSize}) => {
  
  const checkBtnStyle = styles.includes(btnStyle)? btnStyle : styles[0]
  const checkBtnSize = sizes.includes(btnSize) ? btnSize : sizes[0]


  return (
    <Link to='./signup'>
    <button
    className={`btn ${checkBtnStyle} ${checkBtnSize}`}
    type={type}
    onClick={onClick}
    >
      {children}
    </button>
    </Link>
  )
}

export default Buttons