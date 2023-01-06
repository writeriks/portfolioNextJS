import type { NextComponentType } from 'next'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
/* import { useSelector } from 'react-redux'
import classnames from 'classnames'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector' */
import styles from '../../styles/nav-bar.module.scss'
import { useSelector } from 'react-redux'
import contextReducerSelector from '../../store/reducers/context-reducer/constext-reducer-selector'
import HamburgerMenuIcon from './hamburger-menu-icon'

const NavBar: NextComponentType = () => {
  const isMobile = useSelector(contextReducerSelector.getIsMobile)

  /* const componentInViewPort = useSelector(displayReducerSelector.getComponentInViewport) */
  /* const viewPortComponent = componentInViewPort.toLowerCase() */
  /* const color = classnames(viewPortComponent) */

  return (
    <div className={styles.navBar} id="nav-bar">
      <div className={styles.wrapper}>
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
            <a
              href="https://www.linkedin.com/in/emir-haktan-%C3%B6zt%C3%BCrk-b80685a6/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.right}>{isMobile && <HamburgerMenuIcon />}</div>
      </div>
    </div>
  )
}

export default NavBar
