import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import SideBarElement from './side-bar-element'

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
      </ul>
    </div>
  )
}

export default SideBarMenu
