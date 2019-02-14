import React from 'react';
import './Organization.css'
import Organization1 from '../../../static/images/organization.png';

const Organization = () => {
    return (
        <div className="Organization">
            <div className="OrganizationTitle">
                <h1>ORGANIZATION</h1>
            </div>
            <div className="OrganizationBox">
                <img className="OrganizationImage" src={Organization1} alt="HG Organization"/>
            </div>
        </div>
    )
}

export default Organization;