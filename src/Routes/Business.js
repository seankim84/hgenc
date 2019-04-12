import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import PlantMain from '../Components/BusinessComponent/PlantMain';
import Project from '../Components/BusinessComponent/Project';
import Footer from '../Components/Footer';

class Business extends Component {
    render(){
        return (
            <div>
             <Helmet>
                <title>H&G | Mechanical</title>
                <meta name="description" content="HGENC Business part civil architecture plant Mechanical contruction" />
                <link rel="canonical" href="https://hgenc.net/business" />
            </Helmet>
            <Header />
            <PlantMain />
            <Project />
            <Footer />
            </div>
        )
    }
}

export default Business;