import { Icon } from 'antd';
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
    <div className="contactInfo">
        <div className="contactInfoBox">
            <div className="InnerContactBox">
                <div className="contactBoxTitle">
                    <h1><Icon style={{ color: "#26396f" }} type="desktop" /> OFFICE</h1>
                </div>
                <div className="contactContent">
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="pushpin" /> LOCATION</p>
                        </div>
                        <div>
                            <span>
                                Tầng 8 Khu Phức Hợp Cantavil An Phú, Số 1 Đường Song Hành Xa,<br />
                                Phường An Phú, Quận 2, Hồ Chí Minh
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="phone" /> PHONE</p>
                        </div>
                        <div>
                            <span>
                                030.354.2386
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="mail" /> EMAIL</p>
                        </div>
                        <div>
                            <span>
                                hansangwoo@hg-enc.com
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="InnerContactBox">
                <div className="contactBoxTitle">
                    <h1><Icon style={{ color: "#a52218" }} type="setting" /> FACTORY</h1>
                </div>
                <div className="contactContent">
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="pushpin" /> LOCATION</p>
                        </div>
                        <div>
                            <span>
                                Khu tiểu thủ công nghiệp Nhơn Trạch, Phú Thạnh, <br /> 
                                Phú Thạnh, Nhơn Trạch, Đồng Nai
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="phone" /> PHONE</p>
                        </div>
                        <div>
                            <span>
                                02513.519.368
                            </span>
                        </div>
                    </div>
                    <div className="InnerContent">
                        <div>
                            <p><Icon style={{ color:"#56a3a7" }}type="mail" /> EMAIL</p>
                        </div>
                        <div>
                            <span>
                                yunkyongbok@hg-enc.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default ContactInfo;