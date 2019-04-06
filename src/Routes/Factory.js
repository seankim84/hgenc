import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import FactoryMain from '../Components/FactoryComponent/FactoryMain';
import Construct from '../Components/FactoryComponent/Construct';
import FactoryMap from '../Components/FactoryComponent/FactoryMap';
import AutomaticLine from '../Components/FactoryComponent/AutomaticLine';
import Quality from '../Components/FactoryComponent/Quality';
import FactoryOrganize from '../Components/FactoryComponent/FactoryOrganize';
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
                <Construct />
                <FactoryMap />
                <AutomaticLine />
                <Quality />
                <FactoryOrganize />
                <Footer />
            </div>
        )
    }
}

export default Factory;