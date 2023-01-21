import React from 'react'

interface ContactFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string
  inputContainerClass: string
  inputClass: string
}

const ContactFormInput: React.FC<ContactFormInputProps> = ({
  inputLabel,
  inputContainerClass,
  inputClass,
  ...props
}) => {
  return (
    <span className={inputContainerClass}>
      <a>{inputLabel}: </a>
      <input className={inputClass} {...props} />
    </span>
  )
}

export default ContactFormInput
