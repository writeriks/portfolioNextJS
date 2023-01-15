import React from 'react'
import { useSelector } from 'react-redux'

import HamburgerMenuIcon from './hamburger-menu-icon'

import contextReducerSelector from '../../../store/reducers/context-reducer/constext-reducer-selector'

import styles from '../../../styles/nav-bar.module.scss'

const NavBarRight = () => {
  const isMobile = useSelector(contextReducerSelector.getIsMobile)

  return (
    <div className={styles.right}>
      {isMobile ? (
        <HamburgerMenuIcon />
      ) : (
        <a className={styles.blogTitle} href="https://myadventureofprogramming.com" target="_blank" rel="noreferrer">
          Blog
        </a>
      )}
    </div>
  )
}

export default NavBarRight
