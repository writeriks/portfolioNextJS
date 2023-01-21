import React from 'react'

interface ContactFormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClass: string
  textAreaClass: string
  textAreaLabel: string
  onChange: (target: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ContactFormTextArea: React.FC<ContactFormTextAreaProps> = ({
  containerClass,
  textAreaClass,
  textAreaLabel,
  onChange,
  ...props
}) => {
  return (
    <span className={containerClass}>
      <a>{textAreaLabel}: </a>
      <textarea className={textAreaClass} onChange={onChange} {...props} />
    </span>
  )
}

export default ContactFormTextArea
