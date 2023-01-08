import React from 'react'

import TechList from './tech-list'

import styles from '../../styles/portfolio.module.scss'

const TechIUse = () => (
  <div className={styles.techIUse}>
    <a>Technologies i use :</a>
    <TechList />
  </div>
)

export default TechIUse
