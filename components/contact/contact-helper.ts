import emailjs from '@emailjs/browser'
import { setIsMailSent } from '../../store/reducers/context-reducer/context-slice'
import store from '../../store/redux-store'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

class ContactHelper {
  handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>, currentFormRef: HTMLFormElement) => {
    e.preventDefault()
    try {
      const result = await emailjs.sendForm(
        //@ts-expect-error environment variables gives error
        SERVICE_ID,
        TEMPLATE_ID,
        currentFormRef,
        PUBLIC_KEY
      )

      if (result.text === 'OK') {
        store.dispatch(setIsMailSent(true))
      } else {
        store.dispatch(setIsMailSent(false))
      }
    } catch (error: any) {
      store.dispatch(setIsMailSent(false))
    }
  }
}

const contactHelper = new ContactHelper()
export default contactHelper
