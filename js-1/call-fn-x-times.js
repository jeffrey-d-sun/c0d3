/*
Write a function called solution that takes in 2 parameters,
a number N and a function, and calls the function X number of times and then returns null.
*/

const solution = (n, fn, i=0) => {
  if (n === i) return null
  fn()
  return solution(n, fn, i+1)
}

const sayHi = () => {
  console.log('hi')
}

console.log(solution(3, sayHi))
// hi
// hi
// hi
// null