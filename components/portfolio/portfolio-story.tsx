import React from 'react'

import TechIUse from './tech-i-use'

import styles from '../../styles/portfolio.module.scss'

const PortfolioStory = () => (
  <>
    <span className={styles.selfDescription}>
      <span>
        <p>
          Hi, my name is Emir. I am from Istanbul/Turkiye. I am a frontend developer. Currently i live in Warsaw/Poland
          and work for Box Poland. I love programming, travelling, doing sport and playing computer games...
        </p>
      </span>
    </span>
    <TechIUse />
  </>
)

export default PortfolioStory
