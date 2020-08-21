export const localStorageKeys = {
  AUTH_TOKEN: 'AT_',
  SUBDOMAIN: 'SD_',
}

export const setInLocalStorage = (key, value) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.removeItem(key)
  }
}

export const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key)

  if (value) {
    try {
      return JSON.parse(value)
    } catch (err) {
      return value
    }
  }

  return null
}
