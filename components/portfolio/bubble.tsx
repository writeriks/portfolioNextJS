import React from 'react'

import styles from '../../styles/portfolio-bubble.module.scss'

const Bubble = (props: any) => (
  <div className={styles.bubble}>
    <div className={styles.inner}>{props.children}</div>
  </div>
)

export default Bubble
