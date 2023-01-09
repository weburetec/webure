import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Webure Technologies - Consult | Create | Collaborate</title>
				<meta name="facebook-domain-verification" content="stflgslbw5kbpkr6rcr8fp8juxmmi8" />
                <meta name="description" content="Webure Technologies - Consult | Create | Collaborate" />
                <meta name="og:title" property="og:title" content="Webure Technologies - Consult | Create | Collaborate"></meta>
                <meta name="twitter:card" content="Webure Technologies - Consult | Create | Collaborate"></meta>
                <link rel="canonical" href="https://webure.in/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
	    	<script src='//in.fw-cdn.com/30673666/364679.js' chat='false'></script>
            </Helmet>
        </div>
    )
}

export default SEO
