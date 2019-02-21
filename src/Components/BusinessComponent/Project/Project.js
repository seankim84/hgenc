import React, { Component } from 'react';
import Project1 from '../../../static/images/project1.png';
import Formosa from '../../../static/images/formosa.png';
import Hyundai from '../../../static/images/hyundai.png';
import CJ from '../../../static/images/cj.png';
import Sujin from '../../../static/images/sujin.png';
import Hyosung from '../../../static/images/hyosung.png';
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
                        <div className="InnerProjectExplain1">
                             <figure class="snip1283">
                                <img src={Project1} alt="Formosa Project"/>
                                <figcaption>
                                    <h3>FORMOSA</h3>
                                    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="InnerProjectTable">
                            <table class="type09">
                                <thead>
                                <tr>
                                    <th scope="cols">POSCO</th>
                                    <th scope="cols">CONTENTS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">PORJECT</th>
                                    <td>POSCO COLD ROLLING MILL</td>
                                </tr>
                                <tr>
                                    <th scope="row">SITE</th>
                                    <td>Phu My, IP Ba Ria Vung Tau</td>
                                </tr>
                                <tr>
                                    <th scope="row">CAPA</th>
                                    <td>1,200,000 ton / year</td>
                                </tr>
                                <tr>
                                    <th scope="row">YEAR</th>
                                    <td>2008 ~ 2009</td>
                                </tr>
                                <tr>
                                    <th scope="row">SCOPE OF WORK</th>
                                    <td>
                                        T.C.M Machinery Installation<br />
                                        Duct & Pipe Installation<br />
                                        Steel Structure Installation <br />
                                        Steel Fabrication
                                    </td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="InnerProjcet2">
                        <div className="InnerProjectExplain2">
                            <div className="InnerProjectTable">
                            <table class="type09">
                                <thead>
                                <tr>
                                    <th scope="cols">FORMOSA</th>
                                    <th scope="cols">CONTENTS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">PORJECT</th>
                                    <td>FORMOSA POWER PLANT PROJECT</td>
                                </tr>
                                <tr>
                                    <th scope="row">SCOPE OF WORK</th>
                                    <td>
                                        Desulfurization (脫硫) Installation<br />
                                        Tank Installation
                                    </td>
                                    
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="InnerProjectExplain1">
                             <figure class="snip1283">
                                <img src={Formosa} alt="Formosa Project"/>
                                <figcaption>
                                    <h3>FORMOSA</h3>
                                    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="InnerProjcet3">
                        <div className="InnerProjectExplain1">
                             <figure class="snip1283">
                                <img src={Hyundai} alt="Hyun dai Project"/>
                                <figcaption>
                                    <h3>FORMOSA</h3>
                                    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="InnerProjectExplain3">
                            <div className="InnerProjectTable">
                            <table class="type09">
                                <thead>
                                <tr>
                                    <th scope="cols">HYUNDAI ROTEM</th>
                                    <th scope="cols">CONTENTS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">PORJECT</th>
                                    <td>HYUNDAI ROTEM Drinkable Water Treat Plant</td>
                                </tr>
                                <tr>
                                    <th scope="row">SITE</th>
                                    <td>Thu Duc</td>
                                </tr>
                                <tr>
                                    <th scope="row">CAPA</th>
                                    <td>300.000 m3/day</td>
                                </tr>
                                <tr>
                                    <th scope="row">YEAR</th>
                                    <td>2006 ~ 2008</td>
                                </tr>
                                <tr>
                                    <th scope="row">SCOPE OF WORK</th>
                                    <td>
                                        300.000 m3/day
                                    </td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div className="InnerProjcet4">
                        <div className="InnerProjectExplain4">
                            <div className="InnerProjectTable">
                            <table class="type09">
                                <thead>
                                <tr>
                                    <th scope="cols">CJ</th>
                                    <th scope="cols">CONTENTS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">PORJECT</th>
                                    <td> CJ Feed Mill </td>
                                </tr>
                                <tr>
                                    <th scope="row">SITE</th>
                                    <td>Dong Nai</td>
                                </tr>
                                <tr>
                                    <th scope="row">YEAR</th>
                                    <td>2008</td>
                                </tr>
                                <tr>
                                    <th scope="row">SCOPE OF WORK</th>
                                    <td>
                                        Machinery, Silo <br/>
                                        Piping and Duct
                                    </td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="InnerProjectExplain1">
                             <figure class="snip1283">
                                <img src={CJ} alt="CJ Project"/>
                                <figcaption>
                                    <h3>CJ</h3>
                                    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="InnerProjcet5">
                        <div className="InnerProjectExplain1">
                             <figure class="snip1283">
                                <img src={Sujin} alt="Sujin Project"/>
                                <figcaption>
                                    <h3>Sujin</h3>
                                    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="InnerProjectExplain5">
                            <div className="InnerProjectTable">
                            <table class="type09">
                                <thead>
                                <tr>
                                    <th scope="cols">SUJIN</th>
                                    <th scope="cols">CONTENTS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">PORJECT</th>
                                    <td> Feed Mill Project</td>
                                </tr>
                                <tr>
                                    <th scope="row">SITE</th>
                                    <td>Hung Yen Province</td>
                                </tr>
                                <tr>
                                    <th scope="row">YEAR</th>
                                    <td>2008</td>
                                </tr>
                                <tr>
                                    <th scope="row">SCOPE OF WORK</th>
                                    <td>
                                        Machinery, Silo <br/>
                                        Piping and Duct
                                    </td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div className="InnerProjcet6">
                        <div className="InnerProjectExplain6">
                            <div className="InnerProjectTable">
                            <table class="type09">
                                <thead>
                                <tr>
                                    <th scope="cols">HYOSUNG</th>
                                    <th scope="cols">CONTENTS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">PORJECT</th>
                                    <td> HYOSUNG VN PROJECT</td>
                                </tr>
                                <tr>
                                    <th scope="row">SITE</th>
                                    <td>Nhon Trach Dong Nai</td>
                                </tr>
                                <tr>
                                    <th scope="row">YEAR</th>
                                    <td>2007 ~ 2016</td>
                                </tr>
                                <tr>
                                    <th scope="row">SCOPE OF WORK</th>
                                    <td>
                                        Various Machinery Installation <br />
                                        Piping & Duct <br />
                                        Pressure Vessel & Tank & Silo <br />
                                        Steel Fabrication <br />
                                    </td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="InnerProjectExplain1">
                             <figure class="snip1283">
                                <img src={Hyosung} alt="Hyosung Project"/>
                                <figcaption>
                                    <h3>HYOSUNG</h3>
                                    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;


