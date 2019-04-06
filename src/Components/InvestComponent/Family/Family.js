import React, { Component } from 'react';
import familyMain from '../../../static/images/familyMain.jpg';
import family1 from '../../../static/images/family1.jpeg';
import family3 from '../../../static/images/family3.jpeg';
import family5 from '../../../static/images/family5.jpeg';
import family6 from '../../../static/images/family6.jpeg';
import family7 from '../../../static/images/family7.jpeg';
import family8 from '../../../static/images/family8.jpeg';
import family9 from '../../../static/images/family9.jpeg';
import family10 from '../../../static/images/family10.jpeg';
import family13 from '../../../static/images/family13.jpeg';
import family15 from '../../../static/images/family15.jpeg';
import fm1 from '../../../static/images/fm1.jpeg';
import fm2 from '../../../static/images/fm2.jpeg';
import fm3 from '../../../static/images/fm3.jpeg';
import fm4 from '../../../static/images/fm4.jpeg';
import fm5 from '../../../static/images/fm5.jpeg';
import fm6 from '../../../static/images/fm6.jpeg';
import fm7 from '../../../static/images/fm7.jpeg';
import fm8 from '../../../static/images/fm8.jpeg';
import fm9 from '../../../static/images/fm9.jpeg';
import fm10 from '../../../static/images/fm10.jpeg';
import fm11 from '../../../static/images/fm11.jpeg';
import fm12 from '../../../static/images/fm12.jpeg';
import fm13 from '../../../static/images/fm13.jpeg';
import fm14 from '../../../static/images/fm14.jpeg';
import fm15 from '../../../static/images/fm15.jpeg';

import './Family.css';

class Family extends Component  {
    render() {
        return (
            <div className="Family">
                <div className="FamilyTitle">
                    <h1>FAMILY</h1>
                </div>
                <div className="FamilyBox">
                    <div className="FamilyImagemodify"><img width="100%" src={fm1} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm2} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm3} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm4} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm5} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm6} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm7} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm8} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm9} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm10} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm11} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm12} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm13} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm14} alt="hgenc family"/></div>
                    <div className="FamilyImagemodify"><img width="100%" src={fm15} alt="hgenc family"/></div>
                </div>
                <div className="FamilyBackground">
                    <img width="100%" height="100%" src={familyMain} alt="hgenc familyMain" />
                </div>
                <div className="FamilyBox">
                    <div className="FamilyImage"><img width="100%" src={family1} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family3} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family5} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family6} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" height="100%" src={family7} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family8} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family9} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family10} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family13} alt="hgenc family"/></div>
                    <div className="FamilyImage"><img width="100%" src={family15} alt="hgenc family"/></div>
                </div>
            </div>
        )
    }
}

export default Family;