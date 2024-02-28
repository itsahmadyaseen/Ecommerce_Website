import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import FeaturedProducts from './Components/FeaturedProducts';

const Home = () => {
  const data = {
    name: 'Fake Store'
  }
  return <>

    <HeroSection myData={data} />
    <FeaturedProducts/>
    <Services />
    <Trusted />
  </>
};

export default Home