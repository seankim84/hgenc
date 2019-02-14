import { Modal } from 'antd';
import React, { Component } from 'react';
import Registration1 from '../../../static/images/registration.png';
import Registration2 from '../../../static/images/registration1.png';
import '../Certification/Certification.css';
import './Registration.css';


class Registration extends Component {
    render(){
        function Certi() {
            Modal.success({
                title: 'Authorized by the Vietnamese government',
                content: <div className="CertiContent">
                    <img style={{ width: "20vw" }} src={Registration1} alt="Vietnam Registration"/>
                </div>,
            });
        }

        function Certi1() {
            Modal.success({
                title: 'Authorized by the Vietnamese government',
                content: <div>
                    <img style={{ width: "20vw" }} src={Registration2} alt="Vietnam Registration"/>
                </div>,
            });
        }
        return(
            <div className="Certification" style={{background: "#f8f8f8"}}>
                <div className="CertiTitle"><h1>REGISTRATION</h1></div>
                <div className="CertiBox">
                    
                    <div className="RegiBox">
                        <p>
                            우리는 합법적인 vietnam 회사로서, Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        </p>
                    </div>
                    <div className="CertiImageBox">
                        <div className="CertiImage">
                            <img 
                             style={{ width:"18vw"}} 
                             onClick={Certi} 
                             src={Registration1} 
                             alt="ISO Certificate" 
                             />
                        </div>
                        <div>
                            <img  
                             style={{ width:"18vw"}} 
                             onClick={Certi1} 
                             src={Registration2} 
                             alt="ISO Certificate" 
                             />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;
