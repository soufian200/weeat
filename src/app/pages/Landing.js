import React from 'react';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Popular from '../components/Popular';


export default function Landing() {
    return <>
        <Header />
        <AboutUs />
        <Popular />
        <Menu />
    </>
}