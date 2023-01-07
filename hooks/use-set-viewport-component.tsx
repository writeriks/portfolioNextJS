import { useEffect } from 'react'

const useSetViewportComponent = (elements: any[], rootMargin: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // TODO: Get viewport component and dispatch it
          console.log('🚀 ~ file: use-intersection.tsx:22 ~ useEffect ~ entry', entry.target.id)
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
  }, [elements, rootMargin])
}
export default useSetViewportComponent
