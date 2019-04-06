import { Icon } from 'antd';
import React from 'react';
import './Strength.css'

const Strength = () => {
    return (
        <div className="strength">
        <div className="strengthTitle">
            <h1>STRENGTH</h1>
        </div>
        <div className="stContent">
            <div className="stBox1">
                <div className="stTitle">
                    <Icon type="sound" />   
                    <h1>Direct Management Labor</h1>
                </div>
                <div className="stExplain">
                    <p>
                      Great know-how on management of labor Direct Management <br /> 
                      With a rare hands on approach to managing construction
                    </p>
                </div>
            </div>
            <div className="stBox2">
                <div className="stTitle">
                    <Icon type="eye" />
                    <h1>Localization</h1>
                </div>
                <div className="stExplain">
                    <p>
                        16 years experience in Vietnam local risk management ability
                    </p>
                </div>
            </div>
            <div className="stBox3">
                <div className="stTitle">
                    <Icon type="setting" />
                    <h1>Fabrication factory</h1>
                </div>
                <div className="stExplain">
                    <p>
                        Great experience on steel item fabrication to support site (steel structure, tank, silo)
                    </p>
                </div>
            </div>
            <div className="stBox4">
                <div className="stTitle">
                    <Icon type="dollar" />
                    <h1>Reasonably competitive price</h1>
                </div>
                <div className="stExplain">
                    <p>
                        Based on lots of mechanical & construction experience
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Strength;