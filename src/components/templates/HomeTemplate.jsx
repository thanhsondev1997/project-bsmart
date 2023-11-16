import React from 'react'
import HomeCarousel from '../ui/HomeCarousel'
import HomeAdboutUs from '../ui/HomeAboutUs'
import HomeAvantage from '../ui/HomeAdvantage'
import HomeCourse from '../ui/HomeCourse'
import HomePartners from '../ui/HomePartners'



const HomeTemplate = () => {
  return (
    <div >
      <HomeCarousel/>
      <HomeAdboutUs/>
      <HomeAvantage/>
      <HomeCourse/>
      <HomePartners/>
    </div>
  )
}

export default HomeTemplate
