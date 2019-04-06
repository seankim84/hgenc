import React from 'react';
import './AutomaticLine.css';
import line1 from '../../../static/images/line1.png'
import line2 from '../../../static/images/line2.png'
import line3 from '../../../static/images/line3.png'
import line4 from '../../../static/images/line4.png'
import line5 from '../../../static/images/line5.png'
import line6 from '../../../static/images/line6.png'

const AutomaticLine = () => (
    <div className="AutomaticLine">
        <div className="automaticTitle">
            <h1>AUTOMATIC | LINE</h1>
        </div>
        <div className="automaticBox">
            <div className="automatic1">
                <div className="automaticImages"><img width="100%" height="100%" src={line1} alt="automatic Line"/></div>
                <div className="automaticImages"><img width="100%" height="100%" src={line2} alt="automatic Line"/></div>
                <div className="automaticImages"><img width="100%" height="100%" src={line3} alt="automatic Line"/></div>
                <div className="automaticImages"><img width="100%" height="100%" src={line4} alt="automatic Line"/></div>
                <div className="automaticImages"><img width="100%" height="100%" src={line5} alt="automatic Line"/></div>
                <div className="automaticImages"><img width="100%" height="100%" src={line6} alt="automatic Line"/></div>
            </div>
            <div className="automatic2">
                <h4>Automatic Fabrication Line</h4>
                <div className="automaticExplain">
                    <div className="lineBorder">CNC multi cutting machine</div>
                    <div className="lineBorder">Assembling machine</div>
                    <div className="lineBorder">Gantry welding machine</div>
                    <div className="lineBorder">H-type machine</div>
                    <div className="lineBorder">Multi drilling machine</div>
                    <div className="lineBorder">Shot blasting machine</div>
                </div>
                
            </div>
        </div>
    </div>
)

export default AutomaticLine;