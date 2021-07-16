function is_array(param) {
  const boolean = Array.isArray(param)
  return boolean
}
console.log(is_array('w3resource'))
console.log(is_array([1, 2, 3, 4]))
