/*
Write a function called solution that takes in 2 numbers and returns an array with the length equal to the first input number.

Every element in the array is an array that is equal to the length of the second input number. All values in the array is 0.

solution(5,2) // returns [[0,0], [0,0], [0,0], [0,0], [0,0]]
solution(3, 3) // returns: [ [0,0,0], [0,0,0], [0,0,0] ]
*/

const solution = (num1, num2, i = 0, res = []) => {
  if (num1 === i) return res
  res.push(Array(num2).fill(0))
  return solution(num1, num2, i + 1, res)
}

console.log(solution(5, 2)) // [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0] ]
console.log(solution(3, 3)) // returns: [ [0,0,0], [0,0,0], [0,0,0] ]
