import React from 'react';
 
import { Route, Router } from 'react-router-dom';
 
const Navbar = () => {
    return (
    
    <nav className= "navbar">
      <ul className = "navbar-item">
        <li className = "logoname__text">
        <a className="logo-anchor" href="/">
          <img className="logo" src="img/logo.png" alt="GM-logo"/></a><a class="logoname__text" href="/">
          Game World
        </a>
      </li>
        <li><a href="/Products">Product</a></li>
        <li><a href="/Contact">Contact Us</a>
        </li>
      </ul>
    </nav>
    );
}
 
export default Navbar;