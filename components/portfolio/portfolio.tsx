import React, { MutableRefObject } from 'react'
import { useSelector } from 'react-redux'

import PortfolioStory from './portfolio-story'
import Bubble from './bubble'

import uiReducerSelector from '../../store/reducers/ui-reducer/ui-reducer-selector'

import { ViewportComponents } from '../../store/reducers/ui-reducer/ui-slice'

import styles from '../../styles/portfolio.module.scss'

interface PortfolioProps {
  portfolioRef: MutableRefObject<any>
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioRef }) => {
  const viewportComponent = useSelector(uiReducerSelector.getViewportComponent)
  const isViewport = viewportComponent === ViewportComponents.ABOUT

  return (
    <div className={styles.portfolio} id="about" ref={portfolioRef}>
      <Bubble>{isViewport && <PortfolioStory />}</Bubble>
    </div>
  )
}

export default Portfolio
