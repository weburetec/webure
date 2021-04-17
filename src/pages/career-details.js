import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CareerDetailsContent from '../components/Career/CareerDetailsContent'

const CareerDetails = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Event Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Event Details" 
            />
            <CareerDetailsContent />
            <Footer />
        </Layout>
    );
}

export default CareerDetails;