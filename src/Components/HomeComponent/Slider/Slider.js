import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      autoplay: false,   
      dots: false,
      infinite: true, 
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
    };

    return (
      <div className="mainSlider">
        <Carousel ref={node => this.carousel = node } {...props}>
            <div className="mainSlider1">
              <h3 className="mainSliderExplain">Architecture is inhabited sculpture</h3>
            </div>
            <div className="mainSlider2">
              <h3 className="mainSliderExplain">Life is architecture and architecture is the mirror of life</h3>
            </div>
            <div className="mainSlider3">
              <h3 className="mainSliderExplain">Each new situation requires a new architecture</h3>
            </div>
            <div className="mainSlider4">
              <h3 className="mainSliderExplain">Whatever good things we build end up building us.</h3>
            </div>
        </Carousel>

        <div className="sliderButton">
          <div className="buttonLeft" onClick={this.previous}>
            <Icon style={{ fontSize:"2.5rem", color: "#ffffff" }} className="leftIcon" type="left" />
          </div>
          <div className="buttonRight" onClick={this.next}>
            <Icon style={{ fontSize:"2.5rem", color: "#ffffff" }} className="rightIcon" type="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;