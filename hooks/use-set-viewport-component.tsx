import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setViewportComponent, ViewportComponents } from '../store/reducers/ui-reducer/ui-slice'

const useSetViewportComponent = (elements: any[], rootMargin: string) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setViewportComponent(entry.target.id.toUpperCase() as ViewportComponents))
        }
      },
      { rootMargin }
    )

    elements.forEach((element) => {
      element.current && observer.observe(element.current)
    })

    // Cleanup
    elements.forEach((element) => {
      return () => observer.unobserve(element.current)
    })
  }, [elements, rootMargin, dispatch])
}
export default useSetViewportComponent
