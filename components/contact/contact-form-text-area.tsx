import React from 'react'

interface ContactFormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClass: string
  textAreaClass: string
  textAreaLabel: string
}

const ContactFormTextArea: React.FC<ContactFormTextAreaProps> = ({
  containerClass,
  textAreaClass,
  textAreaLabel,
  ...props
}) => {
  return (
    <span className={containerClass}>
      <a>{textAreaLabel}: </a>
      <textarea className={textAreaClass} {...props} />
    </span>
  )
}

export default ContactFormTextArea
