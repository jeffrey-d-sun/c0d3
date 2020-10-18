/**
Given 2 integers, create 2d arrays of objects. First integer represents the amount of nested arrays, 2nd integer represents the amount of objects within each nested array.

solution(3,2)
// will return the following:
[
    [{x: 0, y:0}, {x:1, y: 0}],
    [{x: 0, y: 1}, {x:1, y: 1}],
    [{x: 0, y: 2}, {x:1, y: 2}],
]

solution(99,2)
// will return the following:
[
    [{x: 0, y:0}, {x:1, y: 0}],
    [{x: 0, y: 1}, {x:1, y: 1}],
    [{x: 0, y: 2}, {x:1, y: 2}],
    ...
    [{x: 0, y: 98}, {x:1, y: 98}],
]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const solution = (num1, num2, r=0, c=0, block=[], res = []) => {
  if (num1 === r && num2 === c) return res
  if (num2 === c) {
    res.push(block)
    return solution(num1, num2, r+1, 0, [], res)
  }
  block.push({ x: c, y: r })
  return solution(num1, num2, r, c+1, block, res)
}

console.log(solution(3,2))
/*
  will return the following:
  [
      [{x: 0, y:0}, {x:1, y: 0}],
      [{x: 0, y: 1}, {x:1, y: 1}],
      [{x: 0, y: 2}, {x:1, y: 2}],
  ]
*/