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
			
			
			
			<section class="extra-p bg-grey t b"><div class="wrap"><h2 class="tac">Frequently Asked Questions</h2> <div class="faq"><div class="question active"><h3><span>+</span>Does a Legacy Server mean the hardware will be
            cheap?
          </h3> <p>
            Our legacy servers use the same enterprise-grade hardware as our
            latest generation of servers. These servers are discounted because
            they are not the latest generation of server processors, but they
            still use high quality server components.
          </p></div> <div class="question"><h3><span>+</span>Are Legacy Servers less reliable?</h3> <p>
            Legacy Servers utilize the same enterprise-grade components as all
            of our servers. We only sell servers on reliable and tested
            hardware. These servers are only discounted because they are not
            using the latest generation of processors and are less powerful,
            but they are just as reliable as a new server.
          </p></div> <div class="question"><h3><span>+</span>Why might I select a dedicated server over a hybrid
            or virtual server?
          </h3> <p>
            Dedicated servers are the ideal choice for resource-intensive
            applications that require the resources of an entire server. You
            will not need to worry about other users impacting the performance
            of your application as the entire server will be dedicated to you.
          </p></div> <div class="question"><h3><span>+</span>How quickly are dedicated servers provisioned?
          </h3> <p>
            Dedicated servers are typically provisioned within 2 to 24 hours.
          </p></div> <div class="question"><h3><span>+</span>What is the speed of the server’s network port?
          </h3> <p>Every server is equipped with a 1Gbps network port.</p></div> <div class="question"><h3><span>+</span>What operating systems are available?</h3> <p>
            We offer CentOS, Ubuntu, and Windows operating systems. You can
            also install your own OS using the included IPMI console.
          </p></div> <div class="question"><h3><span>+</span>Is a dedicated KVM and remote reboot available on my
            dedicated server?
          </h3> <p>
            Every server includes a dedicated KVM as well as a remote reboot
            console for free.
          </p></div> <div class="question"><h3><span>+</span>How quickly can I expect a response to any support
            questions?
          </h3> <p>
            We are proud to offer 15 minute response times for all technical
            support requests.
          </p></div> <div class="question"><h3><span>+</span>What happens if a component of the dedicated server
            fails?
          </h3> <p>
            ServerMania will quickly replace any failed server component as
            quickly as we can.
          </p></div></div> <br> <br> <div class="tac"><a href="https://www.servermania.com/kb" class="link">More useful information in our Knowledge Base
          <i class="icon icon-arrow-right-1"></i></a></div></div></section>
			
			
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details