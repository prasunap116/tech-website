import React, { useState } from 'react' 
import  '../styles/Nav.css'
import logo from '../images/logo.png'

const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)
  return (
    <div className='navigation'>
      
      <nav>
        <img style={{width:'20%'}} src={logo} alt='logo'/>
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
            console.log("clkd")
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <a href='/' className='active'>Home</a>
                
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/services'>Services</a>
            </li>
            <li>
                <a href='/contact'>Contact</a>
            </li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
