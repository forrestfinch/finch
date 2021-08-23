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
        title="Forrest &amp; Finch"
        // keywords="Diversity hiring, Recruiting Automation, DEI hiring, Candidate sourcing"
        // description="Divercity’s recruitment tools help you directly source, connect with, and recruit diverse underrepresented candidates in the tech industry."
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
