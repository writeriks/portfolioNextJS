import React from 'react'
import navBarHelper from '../navBar/nav-bar-helper'

import { SideBarMenuType } from './side-bar-menu-constants'

import styles from '../../styles/side-bar-element.module.scss'

interface SideBarElementProp {
  sideBarComponent: SideBarMenuType
}

const SideBarElement = ({ sideBarComponent }: SideBarElementProp) => {
  return (
    <li onClick={() => navBarHelper.handleToggleHamburgerMenu()}>
      <a href={`#${sideBarComponent.toLowerCase()}`}>{sideBarComponent}</a>
    </li>
  )
}

export default SideBarElement
