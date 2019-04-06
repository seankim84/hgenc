import { Icon } from 'antd';
import React from 'react';
import './Construct.css';
import factoryMenu1 from '../../../static/images/factoryMenu1.png'
import factoryMenu2 from '../../../static/images/factoryMenu2.png'
import factoryMenu3 from '../../../static/images/factoryMenu3.png'
import factoryMenu4 from '../../../static/images/factoryMenu4.png'
 
const Construct = () => {
    return (
        <div className="Construct">
            <div className="constructTitle">
                <h1>FACTORY</h1>
            </div>
            <div className="constructBox">
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#EC2434"}} type="fire" />
                    </div>
                    <div className="constructExplain">
                        <h4>Design Group</h4>
                        <p>
                            Broad knowledge of using Tekla Structure<br /> 
                            AutoCAD for steel fabrication
                        </p>
                    </div>
                </div>
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#26396f"}} type="like" />
                    </div>
                     <div className="constructExplain">
                        <h4>Fabrication Group</h4>
                        <p>
                            A great experience of fabrication<br />
                            Various steel items including steel structure, pressure vessel<br /> 
                            And any other steel items
                        </p>
                    </div>
                </div>
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#24A44C"}} type="global" />
                    </div>
                     <div className="constructExplain">
                        <h4>PM Group</h4>
                        <p>
                           Excellent management skills to control <br />
                           Fabrication projects properly for on time delivery
                        </p>
                    </div>
                </div>
            </div>
            <div className="factoryBox">
                <div className="factoryExplain1">
                  <div className="factoryInnerExplain1">
                    <h1 style={{color:"#223973"}}>MAIN & ITEMS</h1>
                    <p><Icon type="tool" /> Steel Structure, Duct, Pipe</p>
                    <p><Icon type="setting" /> Pressure Vessel , Heat Exchanger</p>
                    <p><Icon type="tags" /> Any Other Steel Items </p>
                    <div className="factoryButton">
                        <button><a target="blank" href="https://www.google.com/maps/place/C%C3%94NG+TY+TNHH+MTV+HG+ENC+VINA/@10.698458,106.844361,16z/data=!4m5!3m4!1s0x0:0xdea93749bbfdb390!8m2!3d10.698458!4d106.844361?hl=ko-KR">View More</a></button>
                    </div>
                  </div>
                </div>
                <div className="factoryExplain2">
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src={factoryMenu1} alt="factory menu" />
                  </div>
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src={factoryMenu2} alt="factory menu" />
                  </div>
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src={factoryMenu3} alt="factory menu" />
                  </div>
                  <div className="innerFactoryPhoto">
                    <img width="100%" height="100%" src={factoryMenu4} alt="factory menu" />
                  </div>
                </div>
            </div>
        </div>
    ) 
}

export default Construct;