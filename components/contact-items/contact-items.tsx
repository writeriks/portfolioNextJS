import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

interface ContactItemsProps {
  mainContainerClass?: string
  itemContainerClass?: string
  iconContainerClass?: string
}

const ContactItems: React.FC<ContactItemsProps> = ({ mainContainerClass, itemContainerClass, iconContainerClass }) => {
  return (
    <div className={mainContainerClass}>
      <div className={itemContainerClass}>
        <a href="https://github.com/writeriks" target="_blank" rel="noreferrer">
          <GitHubIcon className={iconContainerClass} />
        </a>
      </div>
      <div className={itemContainerClass}>
        <a href="https://www.linkedin.com/in/emir-haktan-%C3%B6zt%C3%BCrk-b80685a6/" target="_blank" rel="noreferrer">
          <LinkedInIcon className={iconContainerClass} />
        </a>
      </div>
      <div className={itemContainerClass}>
        <a href="https://medium.com/@emirhaktanztrk" target="_blank" rel="noreferrer">
          <span className={iconContainerClass}>Medium</span>
        </a>
      </div>
      <div className={itemContainerClass}>
        <a
          href="https://docs.google.com/document/d/1bIaGoubsxy8f6Gwe7gglWNzbuAojMmSsuCUmVbmHpFw/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span className={iconContainerClass}>CV</span>
        </a>
      </div>
    </div>
  )
}

export default ContactItems
