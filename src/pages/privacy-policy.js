import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import { Link } from 'gatsby'
import privacyPolicy from '../assets/images/privacy-policy.webp'

const PrivacyPolicy = () => {
    return (
        <Layout>
            <Navbar />
			<br />
			<br />
			<br />
			<br />
			<br />
            <section className="privacy-policy-area ptb-100">

            </section>
            <Footer />
        </Layout>
    )
}

export default PrivacyPolicy;