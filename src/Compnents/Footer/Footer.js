import React from 'react';
 
const Footer = () => {
    return (
       <div>
         <footer>
          <figure>
            <a className="logo-anchor" href="/">
              <img className="logo" src="img/logo.png" alt="GM-logo" /></a>
          </figure>

          <div className = "social-container">
            <a href = "https://instagram.com"><img className = "instagram" src = "img/instagram.png" alt =  "instagram logo" /></a>
            <a href = "https://facebook.com"><img className = "facebook" src = "img/facebook.png" alt =  "facebook logo" /></a>
        </div>
        
        <p className='copyright'>GameWorld &copy; 2020, All Right Reserved</p>
        </footer>
       </div>
    );
}
 
export default Footer;