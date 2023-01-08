import React from 'react'

import TechIUse from './tech-i-use'

import styles from '../../styles/portfolio.module.scss'

const PortfolioStory = () => (
  <>
    <span className={styles.selfDescription}>
      <span>
        <p>I am a software engineer living in Warsaw, Poland. Currently i work for Microstrategy Poland.</p>
        <p>I love programming, travelling, doing sport and playing computer games...</p>
      </span>
    </span>
    <TechIUse />
  </>
)

export default PortfolioStory
