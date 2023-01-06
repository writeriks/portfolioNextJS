import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import styles from '../../../styles/nav-bar.module.scss'

const NavBarLeft = () => {
  return (
    <div className={styles.left}>
      <a href="#intro" className={styles.logo}>
        <ArrowBackIosIcon />
        <span>Emir</span>
        <ArrowForwardIosIcon />
      </a>
      <div className={styles.itemContainer}>
        <a href="https://github.com/writeriks" target="_blank" rel="noreferrer">
          <GitHubIcon className={styles.navigationBarLeftIcon} />
        </a>
      </div>
      <div className={styles.itemContainer}>
        <a href="https://www.linkedin.com/in/emir-haktan-%C3%B6zt%C3%BCrk-b80685a6/" target="_blank" rel="noreferrer">
          <LinkedInIcon className={styles.navigationBarLeftIcon} />
        </a>
      </div>
    </div>
  )
}

export default NavBarLeft
