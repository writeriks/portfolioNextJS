import React from 'react'

import styles from '../../styles/contact.module.scss'

interface MailResultMessageProps {
  isMailSent: boolean
}
const MailResultMessage: React.FC<MailResultMessageProps> = ({ isMailSent }) => {
  return <>{isMailSent ? <a className={styles.mailSuccess}>Sent</a> : <a className={styles.mailFailed}>Error</a>}</>
}

export default MailResultMessage
