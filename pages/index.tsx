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
        description="Forrest &amp; Finch is an award - winning mobile, web application &amp; software development company with a pool of 33 seasoned developers. We focus on strategy, UX design &amp; development for respected brands. Get the solution that meets your expectations."
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
