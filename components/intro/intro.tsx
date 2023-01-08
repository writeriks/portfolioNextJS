import React, { MutableRefObject } from 'react'
import Robot from './robot'
import IntroName from './intro-name'
import styles from '../../styles/intro.module.scss'

interface IntroProps {
  introRef: MutableRefObject<any>
}

const Intro: React.FC<IntroProps> = ({ introRef }) => {
  return (
    <div className={styles.intro} id="intro" ref={introRef}>
      <IntroName />
      <Robot />
    </div>
  )
}

export default Intro
