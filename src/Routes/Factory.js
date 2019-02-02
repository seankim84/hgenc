import React, {  Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Factory extends Component {
    render(){
        return (
            <div>
            <Header />
                This is Business
            <Footer />
            </div>
        )
    }
}

export default Factory;