/*
Takes in 2 numbers, return a function that returns the sum when the function is called

Example:

const a = solution(5,6) // a is a function, and a() will return 11
*/

const solution = (num1, num2) => {
  return () => {
    return num1 + num2
  }
}

const cb = solution(1, 2)
console.log(cb()) // 3