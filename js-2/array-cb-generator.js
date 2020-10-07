/*
Write a function called solution that takes in a function and returns an array.

As long as the input function returns false, array keeps growing with the index.

solution((e) => {
  return e > 10
})
// returns [0,1,2,3,4,5,6,7,8,9,10]

solution((e) => {
  return true
})
// returns []

solution((e) => {
  return e % 7 === 0 && e !== 0
})
// returns [0,1,2,3,4,5,6]
*/

const solution = (cb, i=0, res=[]) => {
  if (cb(i)) return res
  res.push(i)
  return solution(cb, i+1, res)
}

console.log(solution((e) => { return e > 10 })) // returns [0,1,2,3,4,5,6,7,8,9,10]

console.log(solution((e) => { return true })) // returns []

console.log(solution((e) => { return e % 7 === 0 && e !== 0 })) // returns [0,1,2,3,4,5,6]