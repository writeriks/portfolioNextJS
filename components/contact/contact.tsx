import { MutableRefObject } from 'react'

import ContactForm from './contact-form'

import styles from '../../styles/contact.module.scss'

interface ContactProps {
  contactRef: MutableRefObject<any>
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  return (
    <div className={styles.contact} id="contact" ref={contactRef}>
      <ContactForm />
    </div>
  )
}

export default Contact
