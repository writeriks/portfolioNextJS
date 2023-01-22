import { MutableRefObject } from 'react'

import ContactForm from './contact-form'
import ContactItems from '../contact-items/contact-items'

import styles from '../../styles/contact.module.scss'

interface ContactProps {
  contactRef: MutableRefObject<any>
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  return (
    <div className={styles.contact} id="contact" ref={contactRef}>
      <div className={styles.contactTitle}>
        <span>Contact Me</span>
      </div>
      <ContactForm />

      <ContactItems
        mainContainerClass={styles.contactLinks}
        itemContainerClass={styles.linkContainer}
        iconContainerClass={styles.linkItem}
      />
    </div>
  )
}

export default Contact
