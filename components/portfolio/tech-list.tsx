import React from 'react'

import Star from './star'

import styles from '../../styles/portfolio.module.scss'

const TechList = () => {
  const starsComponent = (count: number) => {
    const starArray = Array.from({ length: 5 }, (e, i) => i + 1)

    return starArray.map((number) => {
      if (number <= count) {
        return <Star key={number} isFilled={true} />
      } else {
        return <Star key={number} isFilled={false} />
      }
    })
  }

  return (
    <ul>
      <li>
        <span className={styles.tech}>Javascript</span>
        <span className={styles.stars}>{starsComponent(4)}</span>
      </li>
      <li>
        <span className={styles.tech}>React</span>
        <span className={styles.stars}>{starsComponent(3)}</span>
      </li>
      <li>
        <span className={styles.tech}>Redux</span>
        <span className={styles.stars}>{starsComponent(3)}</span>
      </li>
      <li>
        <span className={styles.tech}>CSS</span>
        <span className={styles.stars}>{starsComponent(3)}</span>
      </li>
    </ul>
  )
}

export default TechList
