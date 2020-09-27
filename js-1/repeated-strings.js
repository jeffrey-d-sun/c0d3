/*
Write a function called solution that takes in 2 parameters, a number and string and returns the string repeated input parameter number of times

result = solution(3, "abc") // "abcabcabc"
result = solution(0, "hello") // ""
Reminder for students with prior experience: you are not allowed to use for and while loops.
*/

const solution = (num, str, i = 0, res = '') => {
  if (num === i) return res
  return solution(num, str, i+1, res+str)
}

console.log(solution(3, 'abc')) // 'abcabcabc'
console.log(solution(0, 'hello')) // ''