import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CareerDetailsContent from '../components/Career/CareerDetailsContent'
import upload from '../components/Career/upload'

const CareerDetails = () => {
    return (
        <Layout>
            <Navbar />
			<br/><br/><br/><br/>
            <CareerDetailsContent />
			<upload />
            <Footer />
        </Layout>
    );
}

export default CareerDetails;