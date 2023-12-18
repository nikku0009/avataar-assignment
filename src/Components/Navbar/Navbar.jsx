import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={search} alt=''/>
        </div>

        <img src='' alt='' className='toggle-icon'/>
    
    </div>
  )
}

export default Navbar