/*
Write a function called solution that takes in a number and returns a function.

whenever the returned function is called, the next incremental number will be returned

Example:

let resf = solution(5)
result = resf() // 6
result = resf() // 7

resf = solution(-5)
result = resf() // -4
result = resf() // -3
*/

const solution = num => {
  let result = num
  return () => ++result
}

const incrementor = solution(5)
console.log(incrementor()) // 6
console.log(incrementor()) // 7

const incrementor2 = solution(-2)
console.log(incrementor2()) // -1 
console.log(incrementor2()) // 0