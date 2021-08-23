import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import Layout from '../components/layout'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <HubspotProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HubspotProvider>
  )
}
export default App
