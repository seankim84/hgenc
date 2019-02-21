import { Modal } from 'antd';
import React, { Component } from 'react';
import factoryMap from '../../../static/images/factoryMap.png';
import area1 from '../../../static/images/area1.png';
import area2 from '../../../static/images/area2.png';
import area3 from '../../../static/images/area3.png';
import area4 from '../../../static/images/area4.png';
import area5 from '../../../static/images/area5.png';
import area6 from '../../../static/images/area6.png';
import './FactoryMap.css';


function info1() {
  Modal.info({
    title: 'Built-up & CNC Line',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src={area1} alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info2() {
  Modal.info({
    title: 'Welding Line',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src={area2} alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info3() {
  Modal.info({
    title: 'Painting Area',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src={area3} alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info4() {
  Modal.info({
    title: 'Packing Area',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src={area4} alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info5() {
  Modal.info({
    title: 'Outside Shop(Vessel)',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src={area5} alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

function info6() {
  Modal.info({
    title: 'Raw Material Stock',
    content: (
      <div className="factoryModal">
        <div><img width="100%" src={area6} alt="builtUp"/></div>
      </div>
    ),
    onOk() {},
  });
}

class FactoryMap extends Component {
    render() {
        return (
            <div className="FactoryMap">
                <div className="mapTitle">
                    <h1>FATORY LAYOUT</h1>
                </div>
                <div className="mapBox">
                    <div className="mapExplain">
                        <strong className="layOutTitle1">WORKING </strong>
                        <strong className="layOutTitle2">AREA </strong>
                        <div className="mapList">
                            <div onClick={info1} className="ListMap">1. Built-up & CNC Line</div><br />
                            <div onClick={info2} className="ListMap">2. Welding Line</div><br />
                            <div onClick={info3} className="ListMap">3. Painting Area</div><br />
                            <div onClick={info4} className="ListMap">4. Packing Area</div><br />
                            <div onClick={info5} className="ListMap">5. Outside Shop(Vessel)</div><br />
                            <div onClick={info6} className="ListMap">6. Raw Material Stock</div>
                        </div>
                        
                    </div>
                    <div className="Layout"><img width="100%" height="100%" src={factoryMap} alt="hgenc factory"/></div>
                </div>
            </div>
        ) 
    }
}

export default FactoryMap;