import React from 'react'

import styles from '../../styles/skill-star.module.scss'

interface starProps {
  isFilled: boolean
}

const Star: React.FC<starProps> = ({ isFilled }: starProps) => {
  const startClass = isFilled ? 'starFilled' : 'starEmpty'

  return <div className={styles[startClass]}></div>
}

export default Star
