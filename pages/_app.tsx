import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { MicroStacksProvider } from 'micro-stacks/react';

import { Provider } from 'jotai';

const authOptions = {
  appDetails: {
    name: 'Guinea Pigs',
    icon: '/some-logo.png'
  }
}

const network = 'testnet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MicroStacksProvider authOptions={authOptions} network={network}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MicroStacksProvider>
  )
}
export default MyApp
