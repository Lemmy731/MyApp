import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

// nav bar
function Nav() {
  return (
    <div className='nav'>
        <h2 className='nav-brand'>blog2for</h2>
        <ul className='menu'>
            <li><Link to="/" style={{textDecoration: "none"}} className='menu-btn'>Home</Link></li>
            <li><Link to="/blog" style={{textDecoration: "none"}} className='menu-btn'>create</Link></li>
            <li><Link to="/posts" style={{textDecoration: "none"}} className='menu-btn'>Posts</Link></li>
            <li><Link to="/login" className='menu-btn' >Login</Link></li>
            <li><Link to="/register" className='menu-btn' >Register</Link></li>
        </ul>
      
    </div>
  )
}

export default Nav