import React from 'react'

import HamburgerMenuIcon from './hamburger-menu-icon'

import styles from '../../../styles/nav-bar.module.scss'
import { useSelector } from 'react-redux'
import contextReducerSelector from '../../../store/reducers/context-reducer/constext-reducer-selector'

const NavBarRight = () => {
  const isMobile = useSelector(contextReducerSelector.getIsMobile)

  return <div className={styles.right}>{isMobile && <HamburgerMenuIcon />}</div>
}

export default NavBarRight
