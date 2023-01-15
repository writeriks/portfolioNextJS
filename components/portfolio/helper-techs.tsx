import React from 'react'

import styles from '../../styles/portfolio.module.scss'

const HelperTechs = () => {
  return (
    <div className={styles.helperTechs}>
      <a>Helper Technologies:</a>
      <ul>
        <li>
          <span className={styles.tech}>H T M L 5</span>
        </li>
        <li>
          <span className={styles.tech}>C S S 3 ( S C S S )</span>
        </li>
        <li>
          <span className={styles.tech}>T y p e S c r i p t</span>
        </li>
      </ul>
    </div>
  )
}

export default HelperTechs
