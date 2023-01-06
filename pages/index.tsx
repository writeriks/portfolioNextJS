import Head from 'next/head'
import PortfolioMain from '../components/portfolio-main/portfolio-main'

import { parse } from 'next-useragent'

const Home: React.FC<any> = ({ userAgentString }): React.ReactElement => {
  if (userAgentString) {
    // Dispatch for mobile
    console.log('Is Mobile', parse(userAgentString).isMobile)
  } else {
    // Dispatch for mobile
    console.log('Is Mobile', parse(userAgentString).isMobile)
  }

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

export async function getServerSideProps(context: any) {
  return {
    props: {
      userAgentString: context.req.headers['user-agent'],
    },
  }
}

export default Home
