import type { NextComponentType } from 'next'
import NavBar from '../navBar/nav-bar'
import styles from '../../styles/portfolio-main.module.scss'
import { useRef } from 'react'
import Intro from '../intro/intro'

const PortfolioMain: NextComponentType = () => {
  const introRef = useRef()
  return (
    <div className={styles.container}>
      <NavBar />
      {/* <SideBarMenu /> */}
      <div className={styles.sections}>
        <Intro />
        {/*   <Portfolio /> */}
        {/*   <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  )
}

export default PortfolioMain
