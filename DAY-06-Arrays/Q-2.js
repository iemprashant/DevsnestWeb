function array_Clone(array) {
  return [...array]
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))
