import React, {useEffect} from 'react';
//import aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS

//import components
import { Hero } from './components/Hero';
import { Cards } from './components/Cards';
import { Facts } from './components/Facts';
import { Features } from './components/Features';
import { Courses} from './components/Courses';
import { Pricing } from './components/Pricing';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {

  AOS.init();

  return (
    <div>
      <Hero/>
      <Cards/>
      <Facts />
      <Features/>
      <Courses />
      <Pricing />
      <Newsletter/>
      <Contact />
      <Footer />
    </div>
  )
}