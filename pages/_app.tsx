import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { MicroStacksProvider } from 'micro-stacks/react';

import { Provider } from 'jotai';

const authOptions = {
  appDetails: {
    name: 'Guinea Pigs',
    icon: 'https://ipfs.io/ipfs/QmQtXhwPeqG2TKs6BifRM7yxHqgG4FykH3TPNHLFk6Qq5Q/guinea_0.png'
  }
}

// const network = 'testnet';
const network = 'mainnet';

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
