import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { appProviderAtomBuilder, MicroStacksProvider } from 'micro-stacks/react';

import { Provider } from 'jotai';
import { GetQueries, withInitialQueries } from 'jotai-query-toolkit/nextjs';

const authOptions = {
  appDetails: {
    name: 'Guinea Pigs',
    icon: 'https://ipfs.io/ipfs/QmQtXhwPeqG2TKs6BifRM7yxHqgG4FykH3TPNHLFk6Qq5Q/guinea_0.png'
  }
}

const network = 'testnet';
// const network = 'mainnet';

const atomBuilder = appProviderAtomBuilder({
  network,
  authOptions
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <MicroStacksProvider authOptions={authOptions} network={network}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </MicroStacksProvider>
  )
}


const queries: GetQueries<any> = () => [["some-key", () => "hello"]];

export default withInitialQueries(MyApp, atomBuilder)(queries);
