import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import InvestMain from '../Components/InvestComponent/investMain';
import Investment from '../Components/InvestComponent/investment';
import Family from '../Components/InvestComponent/Family';
import Footer from '../Components/Footer';

class Invest extends Component {
    render(){
        return (
            <div>
            <Helmet>
                <title>H&G | Invest</title>
            </Helmet>
            <Header />
                <InvestMain />
                <Investment />
                <Family />
            <Footer />
            </div>
        )
    }
}

export default Invest;