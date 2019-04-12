import React, { Component } from 'react';
import Master from '../../../static/images/master.jpeg';
import './Greeting.css'

class Greeting extends Component {
    render() {
        return ( 
            <div className = "Greeting" >
                <div className = "GreetingTitle" >
                <h1> CEO | GREETING </h1>  
                </div> 
                <div className = "GreetingExplain">
                    <div className="ceoExplain1">
                        Since its founding in 2002, <br />
                        HG Engineering and Construction has achieved remarkable achievement in Vietnam by satisfying customers through < br / >
                        the Best Service, Best Quality and Competitive Price. 
                </div> 
                    <div className = "ceoExplain2" >
                        <div className = "ceoExplain3" >
                            During 17 years of business operation with various mechanical and construction projects, HG E & C has accumulated significant experiences and expertise.Taking full advantage of it, we provide excellent quality engineering and construction services in various plant projects such as steel mill plant, power plant, chemical plant and other manufacturing plants.HG E & C will
                            continue to move forward to become a leading plant company in Vietnam with consistent passion and a pioneering spirit. < br / >
                            Thank you 
                        </div> 
                    <div>
            <img width = "100%" height = {"100%"} src = {Master} alt = "hgenc ceo" />
                </div> 
            </div> 
        </div> 
    </div>
        );
    }
}

export default Greeting;
