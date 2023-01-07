import React from 'react'

import navBarHelper from '../nav-bar-helper'

import styles from '../../../styles/nav-bar.module.scss'

const HamburgerMenuIcon = () => {
  return (
    <div className={styles.hamburgerMenu} onClick={() => navBarHelper.handleToggleHamburgerMenu()}>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>
  )
}

export default HamburgerMenuIcon
