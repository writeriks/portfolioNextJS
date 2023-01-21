export interface ContactFormProps {
  email: string
  subject: string
  message: string
}

export enum ContactFormTypes {
  email = 'email',
  subject = 'subject',
  message = 'message',
}

export const defaultContactForm = {
  email: '',
  subject: '',
  message: '',
}
