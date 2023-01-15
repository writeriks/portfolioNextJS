import React, { MutableRefObject } from 'react'

import Robot from './robot'
import IntroName from './intro-name'

import introHelper from './intro-helper'

import styles from '../../styles/intro.module.scss'
import robotStyles from '../../styles/robot.module.scss'

interface IntroProps {
  introRef: MutableRefObject<any>
}

const Intro: React.FC<IntroProps> = ({ introRef }) => {
  return (
    <div
      className={styles.intro}
      id="intro"
      ref={introRef}
      onMouseMove={(e) => introHelper.onRobotEyesMove(e, robotStyles)}
    >
      <IntroName />
      <Robot />
    </div>
  )
}

export default Intro
