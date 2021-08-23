import type { NextPage } from 'next'
import Head from '../components/head'
import Hero from '../components/hero'
import LogoCloud from '../components/logo-cloud'
import Manifesto from '../components/manifesto'
import CTA from '../components/cta'
import Services from '../components/services'
import Contact from '../components/contact'

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="Forrest &amp; Finch: Software Development Company"
        // keywords="Diversity hiring, Recruiting Automation, DEI hiring, Candidate sourcing"
        description="Forrest &amp; Finch is a top-rated software development company with a pool of 33 seasoned developers. Get the solution that meets your expectations."
      />
      <Hero />
      <LogoCloud />
      <Manifesto />
      <CTA />
      <Services />
      <Contact />
    </>
  )
}

export default Home
