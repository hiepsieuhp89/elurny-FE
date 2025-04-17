export const convertPathToTitle = (value: string) => {
  let result = value.replace(/-/g, ' ')

  const idPattern = /^[a-fA-F0-9]{24}$/
  if (idPattern.test(result)) {
    result = ''
  } else result = result.charAt(0).toUpperCase() + result.slice(1)

  return result
}
