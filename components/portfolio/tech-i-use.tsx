import React from 'react'

import TechList from './tech-list'

import styles from '../../styles/portfolio.module.scss'
import HelperTechs from './helper-techs'

const TechIUse = () => (
  <div className={styles.techIUse}>
    <TechList />
    <HelperTechs />
  </div>
)

export default TechIUse
