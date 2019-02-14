import React, { Component } from 'react'
import { Link } from  'react-router-dom';
import HeaderDrawer from './Drawer/HeaderDrawer';
import Logo from '../../static/images/logo.png';
import './Header.css';

  

class Header extends Component {
  render(){
    return(
      <div className="HeaderMain">
        <div className="ShadowHeader">
          <div className="ShadowTitle">
            <Link style={{ textDecoration:"none" }} to='/'>H&G</Link>
          </div>
          <div className="ShadowMenu"><HeaderDrawer /></div>
        </div>

    <div className="Header">
      <div className="blueLine"></div>
      <div className="HeaderNav">
        <div className="HeaderTitle">
        <Link to='/'>
          <img style={{ width:"100%", height:"100%" }} src={Logo} alt="hgenc"/>
        </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/intro'}>Intro</Link>
            </li>
            <li>
              <Link to={'/business'}>Business</Link>
            </li>
            <li>
              <Link to={'/invest'}>Invest</Link>
            </li>
            <li>
              <Link to={'/factory'}>Factory</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
        <div className="redLine"></div>
      
    </div>
  </div>
    )
  } 
}

export default Header;