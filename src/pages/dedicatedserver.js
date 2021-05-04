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
			
			<section class="os bg-blue super-p"><div class="wrap tac"><h2 class="white with-sub">AN OPERATING SYSTEM FOR EVERY PROJECT</h2> <p class="white">
        Webure Technologies offers dozens of Operating Systems to choose from to
        ensure you have the right software available. You can find a variety
        of free linux options as well as Windows Server. Each OS will be
        immediately installed after checkout, or choose to install a custom OS
        using our Surge control panel.
      </p> <div class="grid"><div class="sprite windows"></div> <div class="sprite debian"></div> <div class="sprite ubuntu"></div> <div class="sprite centos"></div> <div class="sprite freebsd"></div> <div class="sprite fedora"></div></div> <a href="/dedicated-servers-hosting/distributions.htm" class="btn1 btn-white">Learn More</a></div></section>
			
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details