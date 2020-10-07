/*
Write a function called solution that takes in a number and returns an array with the length equal to the input number.

Every element in the array must numbered with the correct index: 0,1,2,3,4...

solution(5) // returns [0,1,2,3,4]
solution(3) // returns [0,1,2]
*/

const solution = (num) => {
  let i = 0
  const arr = []
  while(i < num) {
    arr.push(i)
    i++
  }
  return arr
}

console.log(solution(5)) // returns [0,1,2,3,4]
console.log(solution(3)) // returns [0,1,2]