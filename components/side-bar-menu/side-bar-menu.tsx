import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import SideBarElement from './side-bar-element'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import uiReducerSelector from '../../store/reducers/ui-reducer/ui-reducer-selector'

import { sideBarMenuConstants } from './side-bar-menu-constants'

import styles from '../../styles/side-bar-menu.module.scss'

const SideBarMenu = () => {
  const isHamburgerMenuOpen = useSelector(uiReducerSelector.getIsHamburgerMenuOpen)
  const active = classNames({ active: isHamburgerMenuOpen })
  const viewPortComponent = useSelector(uiReducerSelector.getViewportComponent)
  const color = classNames(viewPortComponent.toLowerCase())

  return (
    <div className={`${styles.sideBarMenu} ${styles[active]} ${styles[color]}`}>
      <ul>
        {sideBarMenuConstants.map((sideBarComponent, index) => (
          <SideBarElement key={index} sideBarComponent={sideBarComponent} />
        ))}

        <div className={styles.contactIcons}>
          <div className={styles.itemContainer}>
            <a href="https://github.com/writeriks" target="_blank" rel="noreferrer">
              <GitHubIcon className={styles.navigationBarLeftIcon} />
            </a>
          </div>
          <div className={styles.itemContainer}>
            <a
              href="https://www.linkedin.com/in/emir-haktan-%C3%B6zt%C3%BCrk-b80685a6/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={styles.navigationBarLeftIcon} />
            </a>
          </div>
          <div className={styles.itemContainer}>
            <a href="https://medium.com/@emirhaktanztrk" target="_blank" rel="noreferrer">
              <span className={styles.navigationBarLeftIcon}>Medium</span>
            </a>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default SideBarMenu
