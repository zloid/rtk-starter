export const selectFirstList = (
  firstArray = [],
  [...secondArray],
  filter = false
) => {
  if (filter) {
    return ''
  }
  let outputArray = firstArray.map(e => {
    if (secondArray.indexOf(e) !== -1) {
      secondArray.splice(secondArray.indexOf(e), 1)
      return (e = null)
    }
    return e
  })
  outputArray = outputArray.filter(e => e !== null)
  return outputArray.join('\n')
}

export const selectLenOfInputs = stringN =>
  stringN.split('\n').filter(e => e.trim() !== '').length

export const doGoodArray = stringFromTextarea => {
  let mid = stringFromTextarea.split('\n').filter(e => /\w/.test(e) === true)
  return mid.map(e => e.trim().replace(/,/g, '.'))
}
 