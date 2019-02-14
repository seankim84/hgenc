import React, { Component } from 'react';
import './Greeting.css'

class Greeting extends Component  {
    render (){
        return (
            <div className="Greeting">
                <div className="GreetingPicture">
                    <p>1</p>
                </div>
                <div className="GreetingExplain">
                    HG ENC Engineering and Construction Company was established in 2002 under the business philosophy creating value
                    for the customer through“ the Best Service, Best Quality, and Competitive Price.
                    During 15 years of business operation with various mechanical and construction projects, HG E & C has accumulated significant experiences and expertise.
                    Taking full advantage of it, we provide excellent quality engineering and construction services such as build a factories, fabrication of various steel products and machinery install.
                    Even in the future, using our accumulate experience, technology and confidence as the foundation,
                    HG ENC hopes to provide our customers with high - quality service and contribute to this society as a true leader
                    for the next generation.
                </div>
            </div>
        )
    }
}

export default Greeting;