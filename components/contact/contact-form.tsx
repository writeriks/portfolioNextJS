import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import ContactFormInput from './contact-form-input'
import ContactFormTextArea from './contact-form-text-area'

import contextReducerSelector from '../../store/reducers/context-reducer/constext-reducer-selector'
import contactHelper from './contact-helper'

import styles from '../../styles/contact.module.scss'
import MailResultMessage from './mail-result-message'

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const isMailSent = useSelector(contextReducerSelector.getIsMailSent)

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
      />

      <ContactFormInput
        inputContainerClass={styles.inputContainer}
        inputClass={styles.emailInput}
        placeholder="subject is required"
        inputLabel="subject"
        name="subject"
        required
      />

      <ContactFormTextArea
        containerClass={styles.messageContainer}
        textAreaClass={styles.messageTextArea}
        placeholder="Please type your Message"
        textAreaLabel="message"
        name="message"
        required
      />

      <span className={styles.formBottomContainer}>
        {isMailSent != null ? <MailResultMessage isMailSent={isMailSent} /> : <a></a>}
        <button className={styles.submitButton}> Send </button>
      </span>
    </form>
  )
}

export default ContactForm
