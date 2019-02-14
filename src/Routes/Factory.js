import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import FactoryMain from '../Components/FactoryComponent/FactoryMain';
import Footer from '../Components/Footer';


class Factory extends Component {
    render(){
        return (
            <div>
            <Helmet>
                <title>H&G | Factory</title>
            </Helmet>
            <Header />
                <FactoryMain />
            <Footer />
            </div>
        )
    }
}

export default Factory;