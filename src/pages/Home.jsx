import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/services'
import Media from '../components/Media'
import Team from '../components/Team'



function Home() {
  return (
      <div className='min-h-[calc(100vh-120px)]'>
          <Hero />
          <Team />
          <Services />
    </div>
  )
}

export default Home