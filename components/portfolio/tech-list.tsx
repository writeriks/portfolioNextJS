import React from 'react'

import styles from '../../styles/portfolio.module.scss'

const TechList = () => {
  return (
    <div className={styles.mainTechnologies}>
      <a>Technologies:</a>
      <ul>
        <li>
          <span className={styles.tech}>J a v a s c r i p t </span>
        </li>
        <li>
          <span className={styles.tech}>R e a c t</span>
        </li>
        <li>
          <span className={styles.tech}>R e d u x</span>
        </li>
        <li>
          <span className={styles.tech}>N e x t J S</span>
        </li>
      </ul>
    </div>
  )
}

export default TechList
