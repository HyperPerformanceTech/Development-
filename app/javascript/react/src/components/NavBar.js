import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <div className="grid-container">
        <div className='grid-x nav-bar'>
          <p className='large-1 cell nav-bar-tab'>Tunsure logo</p>
          <Link to='/'><p className='large-1 large-offset-6 cell nav-bar-tab'>HOME</p></Link>
          <p className='large-1 cell nav-bar-tab'>ABOUT</p>
          <p className='large-1 cell nav-bar-tab'>CONTACT</p>
          <p className='large-1 cell nav-bar-tab'>SIGN UP</p>
          <p className='large-1 cell nav-bar-tab'>LOGIN</p>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar
