import React from 'react'
import Hero from '@/src/components/homeSection/Hero'
import ShortAbout from '@/src/components/homeSection/ShortAbout'
import DestinationCard from '@/src/components/homeSection/DestinationCard'
import WhyChooseUs from '@/src/components/homeSection/WhyChooseUs'
const page = () => {
  return (
    <>
      <Hero />
      <DestinationCard/>
      <ShortAbout />
      <WhyChooseUs />
    </>
  )
}

export default page