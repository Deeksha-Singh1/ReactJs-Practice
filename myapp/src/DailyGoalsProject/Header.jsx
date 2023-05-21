import React from 'react'
import './Home.css';

const Header = () => {
  return (
    <>
      <nav>Get Ready to complete your daily tasks!</nav>
      <div className="header">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/user">User</a>
      </div>
    </>
    
  )
}

export default Header