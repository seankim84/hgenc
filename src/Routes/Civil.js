import React, {  Component } from 'react';
import Helmet from 'react-helmet'
import Header from '../Components/Header';
import CivilMain from '../Components/Civil/CivilMain';
import Project from '../Components/Civil/Project';
import Footer from '../Components/Footer';


class Civil extends Component {
    render(){
        return (
            <div>
                <Helmet>
                    <title>H&G | Civil</title>
                </Helmet>
                <Header />
                <CivilMain />
                <Project />
                <Footer />
            </div>
        )
    }
}

export default Civil;