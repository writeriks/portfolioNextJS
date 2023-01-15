import Head from 'next/head'
import { parse } from 'next-useragent'

import PortfolioMain from '../components/portfolio-main/portfolio-main'

import { useDispatch } from 'react-redux'
import { setIsMobile } from '../store/reducers/context-reducer/context-slice'

const Home: React.FC<any> = ({ userAgentString }): React.ReactElement => {
  const dispatch = useDispatch()
  if (userAgentString) {
    dispatch(setIsMobile(parse(userAgentString).isMobile))
  } else {
    dispatch(setIsMobile(parse(window.navigator.userAgent).isMobile))
  }

  return (
    <div>
      <Head>
        <title>Emir Haktan Öztürk</title>
        <meta name="description" content="Portfolio Emir Haktan Öztürk" />
        <link href="/fonts/retganon/retganon.ttf" rel="preload" as="font" crossOrigin="" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=0;"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
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
