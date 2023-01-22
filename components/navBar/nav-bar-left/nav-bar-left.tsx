import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ContactItems from '../../contact-items/contact-items'

import styles from '../../../styles/nav-bar.module.scss'

const NavBarLeft = () => {
  return (
    <div className={styles.left}>
      <a href="#intro" className={styles.logo}>
        <ArrowBackIosIcon />
        <span>E m i r</span>
        <ArrowForwardIosIcon />
      </a>
      <ContactItems
        mainContainerClass={styles.iconMaincontainer}
        itemContainerClass={styles.itemContainer}
        iconContainerClass={styles.navigationBarLeftIcon}
      />
    </div>
  )
}

export default NavBarLeft
