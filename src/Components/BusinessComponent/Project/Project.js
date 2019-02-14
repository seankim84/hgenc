import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    render(){
        return (
            <div className="Project">
                <div className="ProjectTitle">
                    <h1>PROJECTS</h1>
                    <span>Plant Mechanical</span>
                </div>
                <div className="ProjectBox">
                    <div className="InnerProjcet1">
                        <div className="InnerProjectImage1">a</div>
                        <div className="InnerProjectExplain1">
                            <h1>POSCO COLD ROLLING MILL</h1>
                        </div>
                    </div>
                    <div className="InnerProjcet2">
                        <div className="InnerProjectExplain2">
                            <h1>FORMOSA POWER PLANT PROJECT</h1>
                        </div>
                        <div className="InnerProjectImage2">b</div>
                    </div>
                    <div className="InnerProjcet3">
                        <div className="InnerProjectImage3">a</div>
                        <div className="InnerProjectExplain3">
                            <h1>HYUNDAI ROTEM Drinkable Water Treat Plant</h1>
                        </div>
                    </div>
                    <div className="InnerProjcet4">
                        <div className="InnerProjectExplain4">
                            <h1>Feed Mill Project</h1>
                        </div>
                        <div className="InnerProjectImage4">b</div>
                    </div>
                    <div className="InnerProjcet5">
                        <div className="InnerProjectImage5">a</div>
                        <div className="InnerProjectExplain5">
                            <h1>Feed Mill Project</h1>
                        </div>
                    </div>
                    <div className="InnerProjcet6">
                        <div className="InnerProjectExplain6">
                            <h1>Feed Mill Project</h1>
                        </div>
                        <div className="InnerProjectImage6">b</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;