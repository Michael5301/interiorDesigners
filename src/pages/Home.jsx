import Hero from '../components/Hero'
import Services from '../components/Services'
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