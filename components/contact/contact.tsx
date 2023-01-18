import { MutableRefObject } from 'react'

import styles from '../../styles/contact.module.scss'

interface ContactProps {
  contactRef: MutableRefObject<any>
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  return <div className={styles.contact} id="contact" ref={contactRef}></div>
}

export default Contact
