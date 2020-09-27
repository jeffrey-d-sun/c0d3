/*
Write a function that takes in 2 numbers and return the largest out of them.

Here's how another developer might use your function:

solution(5,9) // Should return 9
solution(4,1) // Should return 4
*/

const solution = (num1, num2) => {
  return num1 > num2 ? num1 : num2
}

console.log(solution(2, 3)) // 3
console.log(solution(1, 1)) // 1
console.log(solution(5, 9)) // 9