import React from 'react';
import { Link } from 'react-router-dom'

import logo from './chucklogo.png'
import './logo.scss'

export interface LogoProps {
  
}
 
const Logo: React.SFC<LogoProps> = () => {
  return ( 
    <React.Fragment>
      <div className='logo-container'>
        <img style={{width: '21%'}} src={logo} alt="Logo" />
      </div>
      <div className='links-container' >
        <Link className='navigation-pane' to='/'>Categories</Link>
        <Link className='navigation-pane' to='/favorites'>Favorites</Link>
        <Link className='navigation-pane' to='/search-filters'>Search jokes</Link>
      </div>
    </React.Fragment>
    
   );
}
 
export default Logo;