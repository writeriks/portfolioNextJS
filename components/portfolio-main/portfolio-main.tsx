import type { NextComponentType } from 'next'
import NavBar from '../navBar/nav-bar'
import styles from '../../styles/portfolio-main.module.scss'
import { MutableRefObject, useRef } from 'react'
import Intro from '../intro/intro'
import useSetViewportComponent from '../../hooks/use-set-viewport-component'

const PortfolioMain: NextComponentType = () => {
  const introRef = useRef<MutableRefObject<HTMLDivElement>>()

  useSetViewportComponent([introRef], '-100px')

  return (
    <div className={styles.container}>
      <NavBar />
      {/* <SideBarMenu /> */}
      <div className={styles.sections}>
        <Intro introRef={introRef} />

        {/*   <Portfolio /> */}
        {/*   <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  )
}

export default PortfolioMain
