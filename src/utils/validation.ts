const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const isValidEmail = (email: string) => {
  const _email = String(email).toLowerCase()
  if (_email.length < 3)
    return new Error('Email must be at least 3 characters')
  else if (_email.match(EMAIL_REGEX))
    return new Error('UserName must not contain space or @')
  return true
}
