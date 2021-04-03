import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiOurFeatures {
      simpleText
      header
      helpText
      features {
        id
        title
        desc
        icon {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const OurFeatures = () => {
    const data = useStaticQuery(query)
    const {strapiOurFeatures: {
        simpleText, header, helpText, features
    }} = data 

    // console.log(features)

    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="feature" /> 
                        {simpleText}
                    </span>

                    <h2>{header}</h2>
                    <p>{helpText}</p>
                </div>

                <div className="row">

                    {features.map(feature => (
                        <div className="col-lg-4 col-sm-6" key={feature.id}>
                            <div className="single-services-item-box">
                                <div className="icon">
                                    <img src={feature.icon.childImageSharp.fluid.src} alt="feature" />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default OurFeatures