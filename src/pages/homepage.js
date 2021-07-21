import React from "react"
import Layout from "../components/App/Layout"
import Mainpage from "../components/Home/Home"
import Navbar from "../components/Header&Footer/Navbar"
import Footer from "../components/Header&Footer/Footer"


const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Mainpage/>
      <Footer />
    </Layout>
  )
}

export default HomePage