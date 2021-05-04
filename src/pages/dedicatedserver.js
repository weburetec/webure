import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import DedicatedServerContent from '../components/ServiceDetails/DedicatedServerContent'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
			<br/><br/><br/><br/>
            <DedicatedServerContent />
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details