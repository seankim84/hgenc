import React from 'react';
import quality1 from '../../../static/images/quality1.png';
import quality2 from '../../../static/images/quality2.png';
import quality3 from '../../../static/images/quality3.png';
import quality4 from '../../../static/images/quality4.png';
import './Quality.css';

const Quality = () => (
    <div className="Quality">
        <div className="qualityTitle">
            <h1>QUALITY MANAGEMENT</h1>
        </div>
        <div className="qualityBox">
            <div className="qualityInner1">
                <table className="type08">
                                <thead>
                                <tr>
                                    <th scope="cols">Test</th>
                                    <th scope="cols">Executed by</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">RADIOGRAPHIC </th>
                                    <td>3rd Party</td>
                                </tr>
                                <tr>
                                    <th scope="row">ULTRASONIC </th>
                                    <td>3rd Party</td>
                                </tr>
                                <tr>
                                    <th scope="row">MAGNETIC PARTICLE </th>
                                    <td>In-house & 3rd Party</td>
                                </tr>
                                <tr>
                                    <th scope="row">LIQUID PENETRANT </th>
                                    <td>In-house & 3rd Party</td>
                                </tr>
                                </tbody>
                            </table>
            </div>
            <div className="qualityInner2">
                <div className="qualityPhoto"><img width="100%" height="100%" src={quality1} alt="QualityPhotos"/></div>
                <div className="qualityPhoto"><img width="100%" height="100%" src={quality2} alt="QualityPhotos"/></div>
                <div className="qualityPhoto"><img width="100%" height="100%" src={quality3} alt="QualityPhotos"/></div>
                <div className="qualityPhoto"><img width="100%" height="100%" src={quality4} alt="QualityPhotos"/></div>
            </div>
        </div>
    </div>
)

export default Quality;