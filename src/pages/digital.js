import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import DigitalMarket from '../components/DigittalMarket/DigitalMarket'
const Digital = () => {
    return (
        <Layout>
            <Navbar />
            <DigitalMarket />
            <Footer />
        </Layout>
    );
}

export default Digital