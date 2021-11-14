import type { NextComponentType } from 'next'
import NavBar from '../navBar/nav-bar'
import styles from '../../styles/portfolio-main.module.scss'

const PortfolioMain: NextComponentType = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      {/* <SideBarMenu /> */}
      <div className={styles.sections}>

        {/*   <Intro /> */}
        {/*   <Portfolio /> */}
        {/*   <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div >
  )
}

export default PortfolioMain
