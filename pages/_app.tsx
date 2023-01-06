import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '../store/redux-store'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
