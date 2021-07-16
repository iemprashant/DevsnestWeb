function MostFrequent(array) {
  const length = array.length
  const myobject = {}
  let maxValue = 0
  let maxIndex
  for (let i = 0; i < length; i++) {
    if (myobject[array[i]]) {
      myobject[array[i]] = myobject[array[i]] + 1
      if (maxValue < myobject[array[i]]) {
        maxValue = myobject[array[i]]
        maxIndex = i
      }
    } else {
      myobject[array[i]] = 1
    }
  }
  console.log(myobject)
  console.log(maxValue, array[maxIndex])
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
console.log(MostFrequent(arr1))
