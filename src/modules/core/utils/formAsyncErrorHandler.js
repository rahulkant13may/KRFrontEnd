export const errorHandler = (fieldErrors, fieldsKeys, setError) => {
  if (fieldErrors) {
    const keys = Object.keys(fieldErrors)

    keys.forEach((key) => {
      if (fieldsKeys.includes(key)) {
        setError(key, { message: fieldErrors[key][0] })
      }
    })
  }
}
