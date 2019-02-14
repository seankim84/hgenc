import React, {  Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Components/Header';
import ContactMain from '../Components/ContactComponent/ContactMain';
import ContactInfo from '../Components/ContactComponent/ContactInfo';
import Footer from '../Components/Footer';

class Contact extends Component {
    render(){
        return (
            <div>
            <Helmet>
                <title>H&G | Contact</title>
            </Helmet>
            <Header />
            <ContactMain />
            <ContactInfo />
            <Footer />
            </div>
        )
    }
}

export default Contact;