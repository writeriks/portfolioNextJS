import type { NextComponentType } from 'next'
import { MutableRefObject, useRef } from 'react'

import NavBar from '../navBar/nav-bar'
import Portfolio from '../portfolio/portfolio'
import Intro from '../intro/intro'

import useSetViewportComponent from '../../hooks/use-set-viewport-component'

import styles from '../../styles/portfolio-main.module.scss'
import SideBarMenu from '../side-bar-menu/side-bar-menu'
import Contact from '../contact/contact'

const NAV_BAR_HEIGHT = '-101px'
const PortfolioMain: NextComponentType = () => {
  const introRef = useRef<MutableRefObject<HTMLDivElement>>()
  const portfolioRef = useRef<MutableRefObject<HTMLDivElement>>()
  const contactRef = useRef<MutableRefObject<HTMLDivElement>>()

  useSetViewportComponent([introRef, portfolioRef, contactRef], NAV_BAR_HEIGHT)

  return (
    <div className={styles.container}>
      <NavBar />
      <SideBarMenu />
      <div className={styles.sections}>
        <Intro introRef={introRef} />
        <Portfolio portfolioRef={portfolioRef} />
        <Contact contactRef={contactRef} />
        {/*   <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  )
}

export default PortfolioMain
