import { Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterLogo from '../../static/images/logo.png';

const Footer = () => (
    <div className="footer">
        <div className="footerIntro">
            <span>HG Corporation | Copyright&copy; All rights reserved |  2019 HG E&C Corporation</span>
        </div>
        <div className="footerLogo">
            <Link to={"/"}>
                <img style={{width:"15%"}}src={FooterLogo} alt="hgenc"/>
            </Link>
        </div>
            
        <div className="footerIcon">
            <div className="facebook"><Icon style={{ padding:"0 1rem", fontSize:"2.5rem" }} type="facebook" /></div>
            <div className="linkedin"><Icon style={{ padding:"0 1rem", fontSize:"2.5rem" }} type="linkedin" /></div>
            <div className="instagram "><Icon style={{ padding:"0 1rem", fontSize:"2.5rem" }} type="instagram" /></div>
        </div>
    </div>
)
    
export default Footer;