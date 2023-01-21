import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

class ContactHelper {
  handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>, currentFormRef: HTMLFormElement) => {
    e.preventDefault()
    try {
      const result = await emailjs.sendForm(
        //@ts-expect-error environment variables gives error
        SERVICE_ID, // Service ID
        TEMPLATE_ID, // Template ID
        currentFormRef,
        PUBLIC_KEY // Public Key
      )
      console.log('result.text', result.text)
    } catch (error: any) {
      console.log('error', error)
    }
  }
}

const contactHelper = new ContactHelper()
export default contactHelper
