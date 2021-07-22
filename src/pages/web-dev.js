import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import WebDevelopment from '../components/WebDevelopment'
const WebDev = () => {
    return (
        <Layout>
            <Navbar />
            <WebDevelopment/>
            <Footer />
        </Layout>
    );
}

export default WebDev