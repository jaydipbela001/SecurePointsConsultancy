import React, { useState } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Products from '../components/Products';
import './Home.css';
import WhyChoose from '../components/WhyChoose';
import Footer from '../components/Footer';
import GetTouch from '../components/gettouch';

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Products />
      <WhyChoose />
      <Footer />
      <GetTouch />
    </>
  );
}
