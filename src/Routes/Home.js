import React, {  Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Slider from '../Components/HomeComponent/Slider';

class Home extends Component {
    render(){
        return (
            <div>
                <Header />
                <Slider />
                <Footer />
            </div>
        )
    }
}

export default Home;