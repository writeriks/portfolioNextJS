import type { NextComponentType } from 'next'
import { useSelector } from 'react-redux'

import NavBarLeft from './nav-bar-left/nav-bar-left'
import NavBarRight from './nav-bar-right/nav-bar-right'

import classnames from 'classnames'

import uiReducerSelector from '../../store/reducers/ui-reducer/ui-reducer-selector'

import styles from '../../styles/nav-bar.module.scss'
import classNames from 'classnames'

const NavBar: NextComponentType = () => {
  const isHamburgerMenuOpen = useSelector(uiReducerSelector.getIsHamburgerMenuOpen)
  const active = classNames({ active: isHamburgerMenuOpen })
  const viewPortComponent = useSelector(uiReducerSelector.getViewportComponent)
  const color = classnames(viewPortComponent.toLowerCase())

  return (
    <div className={`${styles.navBar} ${styles[active]} ${styles[color]}`} id="nav-bar">
      <div className={styles.wrapper}>
        <NavBarLeft />
        <NavBarRight />
      </div>
    </div>
  )
}

export default NavBar
