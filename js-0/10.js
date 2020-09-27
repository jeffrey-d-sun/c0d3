/*
Write a function that takes in 2 functions and returns the sum of the result of the 2 functions Example:

const a = () => {  return 5; }
const b = () => {  return 6; }
const c = solution(a, b) // c should be 11 because a() + b()
*/

const solution = (fn1, fn2) => {
  return fn1() + fn2()
}

const fn1 = () => 1
const fn2 = () => 2

console.log(solution(fn1, fn2)) // 3