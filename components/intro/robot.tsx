import React from 'react'

import styles from '../../styles/robot.module.scss'

const Robot = () => {
  return (
    <div className={styles.container}>
      <div className={styles.robot}>
        <div className={styles.antenna}>
          <div className={styles.whitePoint}></div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.headSquare}>
          <div className={styles.faceSquare}>
            <div className={styles.faceContainer}>
              <div className={styles.top}>
                <span id="eye" className={styles.eye} />
                <span id="eye" className={styles.eye} />
              </div>
              <div className={styles.bottom}>
                <div className={styles.mouth}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.bodyRect}>
          <div className={styles.innerBodyRect}>
            <div className={styles.innerBodyContainer}>
              <div className={styles.leftArm}>
                <div className={styles.leftHand}>
                  <div className={styles.leftHandSpace}></div>
                </div>
              </div>
              <div className={styles.rightArm}>
                <div className={styles.rightHand}>
                  <div className={styles.rightHandSpace}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.legs}>
          <div className={styles.left}>
            <div className={styles.foot}></div>
          </div>
          <div className={styles.right}>
            <div className={styles.foot}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Robot
