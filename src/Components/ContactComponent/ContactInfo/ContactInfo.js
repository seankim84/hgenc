import  { Icon }  from 'antd';
import React, { Component  } from  'react';
import ContactMap from '../ContactMap';
import './ContactInfo.css';

class ContactInfo extends Component {
    render(){
        return(
            <div className="contact">
                <div className="contactTitle">
                    <h1>Contact Us</h1>
                </div>
                <div className="contactMain">
                    <div className="contactBoxs">
                        <div className="contactBox">
                            <Icon style={{fontSize: "3.5rem", color: "#2157a7"}} type="home" />
                            <div className="contactExplain">
                                <h1>Address</h1>
                                <p>OFFICE:</p>
                                <span>
                                    Tầng 8 Khu Phức Hợp Cantavil An Phú, Số 1 Đường Song Hành Xa, Phường An Phú, Quận 2, Hồ Chí Minh
                                </span>
                                <br />
                                <p>FACTORY:</p>
                                <span>
                                    Khu tiểu thủ công nghiệp Nhơn Trạch, Phú Thạnh, Phú Thạnh, Nhơn Trạch, Đồng Nai
                                </span>
                            </div>
                        </div>
                        <div className="contactBox">
                            <Icon style={{fontSize: "3.5rem", color: "#2157a7"}} type="mail" />
                            <div className="contactExplain">
                                <h1>Email</h1>
                                <p>sean.kim84@gmail.com</p>
                            </div>
                        </div>
                        <div className="contactBox">
                            <Icon style={{fontSize: "3.5rem", color: "#2157a7"}} type="phone" />
                            <div className="contactExplain">
                                <h1>Phone</h1>
                                <p>0303542386</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactMap">
                        <ContactMap />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactInfo;
