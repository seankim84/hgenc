import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Greeting from '../Components/IntroComponent/Greeting';
import IntroMain from '../Components/IntroComponent/IntroMain';
import Certification from '../Components/IntroComponent/Certification';
import Registration from '../Components/IntroComponent/Registration';
import Organization from  '../Components/IntroComponent/Organization';

class Intro extends Component {
    render(){
        return (
            <div>
            <Helmet>
                <title>H&G | Intro</title>
            </Helmet>
            <Header />
            <IntroMain />
            <Greeting />
            <Certification />
            <Registration />
            <Organization />
            <Footer />
            </div>
        )
    }
}

export default Intro;