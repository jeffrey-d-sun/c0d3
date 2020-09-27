/*
Write a function that takes in 2 numbers and returns true if their sum is greater than 10.

Here's how another developer might use your function:

solution(5,9) // Should return true
solution(4,1) // Should return false
*/

const solution = (num1, num2) => num1 + num2 > 10

console.log(solution(1, 2)) // false
console.log(solution(5, 5)) // false
console.log(solution(10, 1)) // true