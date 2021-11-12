import type { NextComponentType } from 'next'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
/* import { useSelector } from 'react-redux'
import navBarHelper from './nav-bar-helper'
import classnames from 'classnames'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector' */
import styles from '../../styles/nav-bar.module.scss'

const NavBar: NextComponentType = () => {
  /* const isHamburgerMenuOpen = useSelector(displayReducerSelector.getIsHamburgerMenuOpen) */
  /* const componentInViewPort = useSelector(displayReducerSelector.getComponentInViewport) */

  /* const { toggleHamburgerMenu } = navBarHelper */
  /* const active = classnames({ active: isHamburgerMenuOpen }) */
  /* const viewPortComponent = componentInViewPort.toLowerCase() */
  /* const color = classnames(viewPortComponent) */

  return (
    <div className={styles.navBar} id="nav-bar">
      < div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro" className={styles.logo}>
            <ArrowBackIosIcon />
            <span>Emir</span>
            <ArrowForwardIosIcon />
          </a>
          <div className={styles.itemContainer}>
            <a href="https://github.com/writeriks" target="_blank" rel="noreferrer">
              <GitHubIcon className={styles.icon} />
            </a>
          </div>
          <div className={styles.itemContainer}>
            <a href="https://www.linkedin.com/in/emir-haktan-%C3%B6zt%C3%BCrk-b80685a6/" target="_blank" rel="noreferrer">
              <LinkedInIcon className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.hamburgerMenu} /* onClick={() => toggleHamburgerMenu()} */>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar
