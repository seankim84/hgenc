import { Icon } from 'antd';
import React from 'react';
import './Construct.css';
 
const Construct = () => {
    return (
        <div className="Construct">
            <div className="constructTitle">
                <h1>Factory</h1>
            </div>
            <div className="constructBox">
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#EC2434"}} type="fire" />
                    </div>
                    <div className="constructExplain">
                        <h4>Design Group</h4>
                        <p>We has own Design Team</p>
                        <p>They are making blahblah</p>
                    </div>
                </div>
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#26396f"}} type="like" />
                    </div>
                     <div className="constructExplain">
                        <h4>Fabrication Group</h4>
                        <p>We has own Design Team</p>
                        <p>They are making blahblah</p>
                    </div>
                </div>
                <div className="constructInnerBox">
                    <div className="constructIcon">
                        <Icon style={{fontSize:"3.5rem", color: "#24A44C"}} type="global" />
                    </div>
                     <div className="constructExplain">
                        <h4>PM Group</h4>
                        <p>We has own Design Team</p>
                        <p>They are making blahblah</p>
                    </div>
                </div>
            </div>
            <div className="factoryBox">
                <div className="factoryExplain1">
                  <div className="factoryInnerExplain1">
                    <span>MAIN & ITEM</span>
                    <p>Steel Structure, Duct, Pipe</p>
                    <p>Pressure Vessel , Heat Exchanger</p>
                    <p>Any Other Steel Items </p>
                    <div className="factoryButton">
                        <button>View More</button>
                    </div>
                  </div>
                </div>
                <div className="factoryExplain2">
                  <div className="factoryInnerExplain">
                    <Icon style={{fontSize:"2.5rem", color: "#33a5a8"}} type="bulb" />
                    <div className="innerExplainBox">
                        <h4>Strategic production</h4>
                        <p>sadfdfsafasfsdfsadf</p>
                    </div>
                  </div>
                  <div className="factoryInnerExplain">
                    <Icon style={{fontSize:"2.5rem", color: "#33a5a8"}} type="team" />
                    <div className="innerExplainBox">
                        <h4>Production Team</h4>
                        <p>sadfdfsafasfsdfsadf</p>
                    </div>
                  </div>
                  <div className="factoryInnerExplain">
                    <Icon style={{fontSize:"2.5rem", color: "#33a5a8"}} type="clock-circle" />
                    <div className="innerExplainBox">
                        <h4>On Time Delivery</h4>
                        <p>sadfdfsafasfsdfsadf</p>
                    </div>
                  </div>
                  <div className="factoryInnerExplain">
                    <Icon style={{fontSize:"2.5rem", color: "#33a5a8"}} type="dollar" />
                    <div className="innerExplainBox">
                        <h4>Reasonable Price</h4>
                        <p>sadfdfsafasfsdfsadf</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    ) 
}

export default Construct;