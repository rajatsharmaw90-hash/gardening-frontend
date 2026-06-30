import { useState } from 'react'
import Navbar from './components/navbar'
import AboutUs from './components/about'
import Services from './components/services'
import OurApproach from './components/OurApproach'
import WhyChooseUs from './components/whyChoose'
import Contact from './components/contact'
import NewHero from './components/newhero'

import Faq from './components/faq'
import Footer from './components/fotter'
function App() {


  return (
    <>
    <Navbar />
    <NewHero />
    <AboutUs />
    <Services />
    <WhyChooseUs />
    <Faq />
    <Contact />
    <Footer />
    </>
  )
}

export default App
