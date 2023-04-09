import React from 'react'
import navBarHelper from '../navBar/nav-bar-helper'

import { SideBarMenuType } from './side-bar-menu-constants'

interface SideBarElementProp {
  sideBarComponent: SideBarMenuType
}
// test
const SideBarElement = ({ sideBarComponent }: SideBarElementProp) => {
  const isBlog = sideBarComponent === SideBarMenuType.Blog
  const target = isBlog ? '_blank' : '_self'
  const hrefLink = isBlog ? 'https://myadventureofprogramming.com' : `#${sideBarComponent.toLowerCase()}`
  return (
    <li onClick={() => navBarHelper.handleToggleHamburgerMenu()}>
      <a href={hrefLink} target={target} rel="noreferrer">
        {sideBarComponent}
      </a>
    </li>
  )
}

export default SideBarElement
