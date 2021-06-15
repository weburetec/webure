import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import OurHistory from '../components/AboutUs/OurHistory'
import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
import HowItWork from '../components/AboutUs/HowItWork'
import TeamMembers from '../components/AboutUs/TeamMembers'
import Testimonials from '../components/AboutUs/Testimonials'
import Partner from '../components/AboutUs/Partner'
 
const AboutUs = () => {
    return (
        <Layout>
            <Navbar />
            <AboutUsContent />
            <WhyChooseUs />
            <HowItWork />
            <TeamMembers />
            <Testimonials />
            <Partner />
            <Footer />
        </Layout>
    );
}

export default AboutUs;