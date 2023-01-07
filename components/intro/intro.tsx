import React from 'react'
import Robot from './robot'
import IntroName from './intro-name'
import styles from '../../styles/intro.module.scss'

const Intro = (/* props: any */) => {
  /*   const myRef: any = useRef()
  const {
    inViewport
  } = useInViewport(
    myRef,
    { rootMargin: '-100.0px' },
    { disconnectOnLeave: false },
    props
  ) */

  /*   useEffect(() => {
    if (inViewport) {
      store.dispatch(displayReducerActionCreator.setComponentInViewPort(ComponentsInViewport.INTRO))
    }
  }, [inViewport]) */

  return (
    <div className={styles.intro} id="intro" /* ref={myRef} */>
      <IntroName />
      <Robot />
    </div>
  )
}

export default Intro
