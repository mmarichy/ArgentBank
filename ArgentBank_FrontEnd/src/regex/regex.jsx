export const isValidEmail = (email) => {
  const regex = /^\S+@\S+\.\S+$/
  return regex.test(email)
}

export const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/
  return regex.test(password)
}

export const isValideName = (name) => {
  if (name.length === 0) {
    return false
  }
  const regex = /^[a-zA-Z0-6]*$/
  return regex.test(name)
}
