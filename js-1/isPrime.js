/*
Write a function called solution that takes in a number and returns true if it's prime, false otherwise.

A prime number is a number that is greater than 1, and not divisible by any number other than itself.

There are a number of approaches to do this, but the simplest is to start a number i at 2, and keep using % to check if the input number is divisible by i.

result = solution(2) // true
result = solution(1) // false
result = solution(8) // false
result = solution(13) // true
*/

const solution = (num, i=2) => {
  if (num % i > 0 && num >= 2) return solution(num, i + 1)
  return num === i
}

console.log(solution(3)) // true
console.log(solution(5)) // true
console.log(solution(7)) // true
console.log(solution(17)) // true

console.log(solution(1)) // false
console.log(solution(2)) // true
console.log(solution(4)) // false
console.log(solution(6)) // false