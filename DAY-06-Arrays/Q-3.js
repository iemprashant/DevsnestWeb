function first(array, n) {
  if (n < 0) {
    return []
  }
  if (n && n >= 0) {
    return array.slice(0, n)
  }
  return array[0]
}
console.log(first([7, 9, 0, -2]))
console.log(first([], 3))
console.log(first([7, 9, 0, -2], 3))
console.log(first([7, 9, 0, -2], 6))
console.log(first([7, 9, 0, -2], -3))
