import React, { Component } from 'react';
import './intro.css';


class Intro extends Component {
    render() {
        return(
            <div className="intro">
                <div className="introTitle">
                    <h1>Who We Are</h1>
                </div>
                <div className="introBox">
                    <div className="Plant">
                        <h3>Plant</h3>
                        <div className="eachExplain">
                            Leading plant <br />
                            company <br />
                            In Vietnam
                        </div>
                    </div>
                    <div className="Experience">
                        <h3>Experience</h3>
                        <div className="eachExplain">
                            More than <br />
                            15 years of experience<br /> 
                            In Vietnam
                        </div>
                    </div>
                    <div className="Employees">
                        <h3>Employees</h3>
                        <div className="eachExplain">
                            Around 600 employees<br /> 
                            including highly <br />
                            experienced engineers
                        </div>
                    </div>
                    <div className="Fabrication">
                        <h3>Fabrication</h3>
                        <div className="eachExplain">
                            HG E&C<br /> 
                            has a its own <br/>
                            fabrication factory
                        </div>
                    </div>
                </div>
                <div className="introFooter">
                        <span> ONE OF THE LEADERS IN <strong style={{color: "#1d3977"}}> INDUSTRIAL </strong> <strong style={{color:"#B40404"}}>PLANT</strong> SECTOR IN VIETNAM </span>
                </div>
            </div>
        )
    }
}

export default Intro