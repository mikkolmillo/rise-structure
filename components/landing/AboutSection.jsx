import React from 'react'
import Heading from '../ui/Heading'

const AboutSection = () => {
  return (
    <div className="bg-white pt-24">
      <Heading
        title={'Welcome To AADI Construction'}
        subtext={'We at AADI construction deliver projects that sets benchmark across multidisciplinary segments. We span across 4 continent and have a base of 34343 satisfied customers since 1996. From construction to architecture, we understand the art and science behind the building. At AADI construction we deliver efficient green housing and electrical fitting using cutting edge methods to precision.We have a team of dedicated professional that provide integrated solution to ensure safety and on time completion of projects. We are expanding our presence by providing world class infrastructure.'}
      />

      <img src="/img/about-us-img.png" alt="About Us" className='mx-auto' />
    </div>
  )
}

export default AboutSection