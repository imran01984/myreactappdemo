import React from 'react'
//import { Link } from "react-router-dom";
import accentureLogo from './Images/accentureLogo.png'

export default function Navbar() {
  return (
   <div style={{'borderBottom': '2px solid #eee'}} >
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <img src={accentureLogo} alt='Accenture' className='logo'/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          Learn    
        </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          Use
        </li>
      </ul>
      <form className="d-flex" role="search">
      {/*<button type="submit"><i class="fa fa-search"></i></button>*/}
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>      
    </div>    
    </div>
  </nav>
  </div>
  )
}
