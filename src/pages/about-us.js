import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
import Testimonials from '../components/AboutUs/Testimonials'
import Partner from '../components/AboutUs/Partner'
 
const AboutUs = () => {
    return (
        <Layout>
            <Navbar />
            <AboutUsContent />
            <WhyChooseUs />
            <Testimonials />
            <Partner />
            <Footer />
        </Layout>
    );
}

export default AboutUs;