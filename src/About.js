import React from 'react'
import HeroSection from './Components/HeroSection'
import { useProductContext } from './context/productcontex'

const About = () => {

  const {myName} = useProductContext

  const data = {
    name: 'Fake Ecommerce'
  }
  return (<>
      {myName}
      <HeroSection myData={data} />
    </>)
}

export default About