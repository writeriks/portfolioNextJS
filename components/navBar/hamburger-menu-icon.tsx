import React from 'react'
import styles from '../../styles/nav-bar.module.scss'

const HamburgerMenuIcon = () => {
  /* const isHamburgerMenuOpen = useSelector(displayReducerSelector.getIsHamburgerMenuOpen) */
  /* const { toggleHamburgerMenu } = navBarHelper */
  /* const active = classnames({ active: isHamburgerMenuOpen }) */
  return (
    <div className={styles.hamburgerMenu} /* onClick={() => toggleHamburgerMenu()} */>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>
  )
}

export default HamburgerMenuIcon
