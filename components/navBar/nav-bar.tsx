import type { NextComponentType } from 'next'

import NavBarLeft from './nav-bar-left/nav-bar-left'
import NavBarRight from './nav-bar-right/nav-bar-right'

import styles from '../../styles/nav-bar.module.scss'

const NavBar: NextComponentType = () => {
  /* const componentInViewPort = useSelector(displayReducerSelector.getComponentInViewport) */
  /* const viewPortComponent = componentInViewPort.toLowerCase() */
  /* const color = classnames(viewPortComponent) */

  return (
    <div className={styles.navBar} id="nav-bar">
      <div className={styles.wrapper}>
        <NavBarLeft />
        <NavBarRight />
      </div>
    </div>
  )
}

export default NavBar
