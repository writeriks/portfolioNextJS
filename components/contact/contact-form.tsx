import React from 'react'

import styles from '../../styles/contact.module.scss'

const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e)
      }}
    >
      <span className={styles.inputContainer}>
        <a>Email: </a>
        <input
          className={styles.emailInput}
          type="email"
          placeholder="email"
          onChange={(e) => console.log(e.target.value)}
        />
      </span>
      <span className={styles.inputContainer}>
        <a>Subject: </a> <input className={styles.subjectInput} placeholder="subject" />
      </span>
      <span className={styles.messageContainer}>
        <a>Message: </a> <textarea className={styles.messageTextArea} placeholder="message" />
      </span>

      <button className={styles.submitButton}> Send </button>
    </form>
  )
}

export default ContactForm
