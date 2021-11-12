import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navBar/nav-bar'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Emir Haktan Öztürk</title>
        <meta name="description" content="Portfolio Emir Haktan Öztürk" />
      </Head>

      <main >
        <NavBar />
      </main>
    </div>
  )
}

export default Home
