import React, { useState, useCallback, useRef } from 'react'

import { ContactFormProps, defaultContactForm } from './contact-types'

import styles from '../../styles/contact.module.scss'
import ContactFormInput from './contact-form-input'
import ContactFormTextArea from './contact-form-text-area'
import contactHelper from './contact-helper'

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormProps>(defaultContactForm)
  const formRef = useRef<HTMLFormElement>(null)

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
      const formValue = { [target.name]: target.value }
      setFormData((prevFormData) => ({ ...prevFormData, ...formValue }))
    },
    []
  )

  return (
    <form
      ref={formRef}
      className={styles.contactForm}
      onSubmit={(e) => contactHelper.handleSubmitEmail(e, formRef.current as HTMLFormElement)}
    >
      <ContactFormInput
        inputContainerClass={styles.inputContainer}
        inputClass={styles.emailInput}
        placeholder="email is required"
        type="email"
        inputLabel="email"
        name="email"
        required
        //value={formData.email}
        //onChange={onChange}
      />

      <ContactFormInput
        inputContainerClass={styles.inputContainer}
        inputClass={styles.emailInput}
        placeholder="subject is required"
        inputLabel="subject"
        name="subject"
        required
        //value={formData.subject}
        //onChange={onChange}
      />

      <ContactFormTextArea
        containerClass={styles.messageContainer}
        textAreaClass={styles.messageTextArea}
        placeholder="Please type your Message"
        textAreaLabel="message"
        name="message"
        value={formData.message}
        required
        onChange={onChange}
      />

      <button className={styles.submitButton}> Send </button>
    </form>
  )
}

export default ContactForm
