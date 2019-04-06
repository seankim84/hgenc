import { Modal } from 'antd';
import React, { Component } from 'react';

import './Certification.css';
import Certification1 from '../../../static/images/certification.png'
import Certification2 from '../../../static/images/certification1.png'

class Certification extends Component {

    render(){

        function Certi() {
            Modal.success({
                title: 'ISO Certification EN',
                content: <div className="CertiContent">
                    <img style={{ width: "25vw" }} src={Certification1} alt="ISO Certification"/>
                </div>,
            });
        }

        function Certi1() {
            Modal.success({
                title: 'ISO Certification VN',
                content: <div>
                    <img style={{ width: "25vw" }} src={Certification2} alt="ISO Certification"/>
                </div>,
            });
        }
        return(
            <div className="Certification">
                <div className="CertiTitle"><h1>CERTIFICATION</h1></div>
                <div className="CertiBox">
                    <div className="CertiImageBox">
                        <div className="CertiImage">
                            <img 
                             style={{ width:"18vw"}} 
                             onClick={Certi} 
                             src={Certification1} 
                             alt="ISO Certificate" 
                             />
                        </div>
                        <div className="CertiImage">
                            <img  
                             style={{ width:"18vw"}} 
                             onClick={Certi1} 
                             src={Certification2} 
                             alt="ISO Certificate" 
                             />
                        </div>
                    </div>
                    <div className="CertiBox2">
                        <p>
                            “ISO 9001 Certified” means an organization has met the requirements in ISO 9001. It defines an ISO 9000 Quality Management System (QMS). ISO 9001 evaluates whether your Quality Management System is appropriate and effective, while forcing you to identify and implement improvements.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Certification;
