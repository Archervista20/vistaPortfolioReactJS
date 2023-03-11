import React from 'react'
// import { useState } from 'react'
import './hero.css'
import {Link} from 'react-router-dom'
import myAvatar from '../images/avatar1.jpg' 

const Hero = () => {

return (
<section className='hero-section'>
  <div className="hero-container">
    <div className="profile">
      <div className="avatar" src={myAvatar}></div>
    </div>
      <div className='introduction'>
        <pre className="language-jsx" tabindex="0">
          <code className="language-markup">
              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>section</span>
              <span className="token attr-name"> className</span><span className="token attr-value">
              <span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>introduction<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
              <span className="token tag"><span className="token tag"><br></br>  <span className="token punctuation">&lt;</span>h1</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>name<span className="token punctuation">"</span></span>
              <span className="token punctuation">&gt;</span></span><h1 className='my-text'>My Name is Danny Vista!</h1>
              <span className="token tag"><span className="token tag"><span className="token punctuation">  &lt;/</span>h1</span><span className="token punctuation">&gt;</span></span>
              <span className="token tag"><span className="token tag"><br></br>  <span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>role<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Self-Taught Aspiring Web-Developer!<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
              <span className="token tag"><span className="token tag"><br></br><span className="token punctuation">&lt;/</span>section</span><span className="token punctuation">&gt;</span></span>
          </code>
        </pre>
    </div>
  </div>
  <div className="contacts">
    <div className="contacts-wrapper">
        <i className='contact-icons fa-solid fa-envelope'><p>dannyvista1979@gmail.com</p></i>
        <i className="contact-icons fa-solid fa-phone"><p>+63-961-840-51-72</p></i>
    </div>
    <div className='important-links'>
        <p>Find my links here:</p>
        <Link to="#"><i className="contact-icons fa-brands fa-linkedin"></i></Link>
        <Link to="#"><i className="contact-icons fa-brands fa-github"></i></Link>
        <Link to="#"><i className="contact-icons fa-brands fa-square-behance"></i></Link>
    </div>
  </div>
</section>

  )
}

export default Hero