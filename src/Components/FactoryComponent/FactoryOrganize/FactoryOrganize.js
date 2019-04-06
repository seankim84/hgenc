import React, { Component } from 'react';
import factoryOrganize from '../../../static/images/factoryOrganize.png'
import './FactoryOrganize.css';

class FactoryOrganize extends Component {
    render() {
        return(
            <div className="FactoryOrganize">
                <div className="organizeTitle">
                    <h1>FACTORY | ORGANIZATION</h1>
                </div>
                <div className="organizePhoto">
                    <img width="85%" height="30%" src={factoryOrganize} alt="factory organize" />
                </div>
            </div>
        )
    }
}

export default FactoryOrganize;