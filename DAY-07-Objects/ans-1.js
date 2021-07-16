var student = {
  name: 'Prashant Gupta',
  sclass: 'VI',
  rollno: 11,
}
var ans = Object.keys(student)
console.log(ans.join(','))

console.log(student)

delete student.rollno

console.log(student)
