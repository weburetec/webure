import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CareerCard from '../components/Career/CareerCard'

const Career = () => {
    return (
        <Layout>
            <Navbar />
			<br/><br/><br/><br/>
            <CareerCard />
            <Footer />
        </Layout>
    );
}

export default Career