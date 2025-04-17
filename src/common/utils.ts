
export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validatePassword = (password: string) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,16}$/
  return re.test(String(password))
}

export const getPasswordStrength = (password: string) => {
  if (!password) {
    return 'empty'
  } if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])/.test(String(password)) && password.length >= 8) {
    return 'strong'
  } if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(String(password)) && password.length >= 8) {
    return 'medium'
  } if (/^(?=.*[a-zA-Z])(?=.*\d)/.test(String(password)) && password.length >= 8) {
    return 'weak'
  } 
    return 'too weak'
  
}

export const emojiRegex = (text: string) => {
  const emojiRegex =
    /[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{2000}-\u{2B50}]/u
  return emojiRegex.test(text)
}

export const filterObject = (obj: any) => {
  const filteredObject = {} as any

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      filteredObject[key] = obj[key]
    }
  }
  return filteredObject
}

export const dateReg = (text: string) => {
  const dateReg = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
  return dateReg.test(text)
}

type DebounceFunction = <T extends unknown[]>(func: (...args: T) => void, delay: number) => (...args: T) => void

export const debounce: DebounceFunction = (func, delay) => {
  let timer: any // Biến lưu trữ id của timer
  return (...args) => {
    if (timer) clearTimeout(timer) // Nếu timer đã được thiết lập, hủy nó
    timer = setTimeout(() => {
      func(...args) // Sau khi delay, gọi hàm func với các tham số args
    }, delay)
  }
}

export const getColor = (confidence: number) => {
  if (confidence > 0.9) {
    return '#05ab1d'
  } if (confidence > 0.8 && confidence <= 0.9) {
    return '#a8a805'
  } if (confidence > 0.6 && confidence <= 0.8) {
    return '#FFA500'
  } if (confidence > 0.4 && confidence <= 0.6) {
    return '#FF7F7F'
  } 
    return '#FF0000'
  
}




