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
                <title>H&G | Bussiness</title>
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