interface robotStylesType {
  [key: string]: string
}

class IntroHelper {
  onRobotEyesMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, robotStyles: robotStylesType) => {
    const eyes: NodeListOf<HTMLElement> = document.querySelectorAll(`.${robotStyles.eye}`)

    eyes.forEach((eye) => {
      const x = eye.getBoundingClientRect().left + eye.getBoundingClientRect().width / 2
      const y = eye.getBoundingClientRect().top + eye.getBoundingClientRect().height / 2
      const rad = Math.atan2(event.pageX - x, event.pageY - y)
      const rot = rad * (180 / Math.PI) * -1 + 180
      eye.style.webkitTransform = 'rotate(' + rot + 'deg)'
      eye.style.transform = 'rotate(' + rot + 'deg)'
    })
  }
}

const introHelper = new IntroHelper()
export default introHelper
