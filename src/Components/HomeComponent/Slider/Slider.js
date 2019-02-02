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
            <div className="mainSlider1">dfsfasdf</div>
            <div className="mainSlider2">sdfsafd</div>
            <div className="mainSlider3">sadfasf</div>
            <div className="mainSlider4">asdfsaf</div>
        </Carousel>

        <div className="properButton">
          <div onClick={this.previous}>
            <Icon className="properLeft" type="left" />
          </div>
          <div onClick={this.next}>
            <Icon className="properRight" type="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;