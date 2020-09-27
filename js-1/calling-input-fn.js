/*
Write a function called solution that takes in a function.

The function will be called with increasing indexes (starting from 0) until the input function returns false

solution((e) => {
  // this function will be run 7 times with e: 0,1,2,3,4,5,6
  return e < 6
})

solution((e) => {
  // this function will be run 1 time with e: 0
  return false
})

solution((e) => {
  // this function will be run 4 times with e: 0,1,2,3
  return e < 3
})
Reminder for students with prior experience: you are not allowed to use for and while loops.
*/

const solution = (fn, i = 0) => {
  if (!fn(i)) return false
  console.log('called with ', i)
  return solution(fn, i+1)
}

const cb = (num) => {
  return num < 6
}

const cb2 = () => {
  return false
}

const cb3 = (num) => {
  return num < 3
}

console.log(solution(cb))
// 0
// 1
// 2
// 3
// 4
// 5
// false

console.log(solution(cb2))
// false

console.log(solution(cb3))
// 0
// 1
// 2
// false