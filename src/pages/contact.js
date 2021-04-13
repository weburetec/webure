import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfooffice from '../components/Contact/ContactInfooffice'
const Contact = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Contact" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact" 
            />
            <ContactInfo />
            <ContactForm />
            <ContactInfooffice />
            <Footer />
        </Layout>
    );
}

export default Contact