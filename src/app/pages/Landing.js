import React from 'react';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Popular from '../components/Popular';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';


export default function Landing() {
    return <>
        <Header id="home" />
        <AboutUs id="about-us" />
        <Popular id="popular" />
        <Menu id="menu" />
        <WhyUs id="why-us" />
        <Testimonials id="testimonials" />
        <ContactUs id="contact-us" />
        <Footer />
    </>
}