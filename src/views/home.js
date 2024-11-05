import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero action2="Tools we used \n"></Hero>
      <CTA></CTA>
      <Features2
        feature3Title="Detailed Reporting"
        feature2Description="Initiate scans on websites to detect vulnerabilities with various open-source tools."
        feature3Description="Receive detailed reports on subdomains and vulnerabilities in web interface or on your email."
      ></Features2>
      <Pricing
        content1="Have a question or need support? Reach out to us!"
        content2="This is bullshit , we know you don't like monthly billing. pay as you go"
        plan1Feature1="Subdomain Enumeration"
      ></Pricing>
      <Steps step1Description="Sign up for a new account on our automated scanning platform to access all features and services."></Steps>
      <Testimonial
        heading1="Testimonials"
        rootClassName="testimonialroot-class-name"
      ></Testimonial>
      <Contact
        content2="Our team is here to assist you with any inquiries."
        heading1="Contact Us"
      ></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
