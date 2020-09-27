/*
Write a function that takes in 3 numbers and return the largest out of them.

Here's how another developer might use your function:

solution(5,9,14) // Should return 14
solution(4,5,1) // Should return 5
*/

const solution = (num1, num2, num3) => Math.max(num1, num2, num3)

console.log(solution(1, 2, 3)) // 3
console.log(solution(1, 1, 1)) // 1