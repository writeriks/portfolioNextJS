import type { NextPage } from 'next'
import Head from 'next/head'
import PortfolioMain from '../components/portfolio-main/portfolio-main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Emir Haktan Öztürk</title>
        <meta name="description" content="Portfolio Emir Haktan Öztürk" />
        <link href="/fonts/retganon/retganon.ttf" rel="preload" as="font" crossOrigin="" />
      </Head>

      <main>
        <PortfolioMain />
      </main>
    </div>
  )
}

export default Home
