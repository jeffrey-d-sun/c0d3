/*
  Write a function that takes in an array of numbers, and returns a new array of all duplicate numbers.

  solution([1, 2, 2, 3, 1])  // should return [1, 2]
  solution([1, 1, 1, 1, 2, 3, 3])  // should return [1, 3]
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr, i = 0, hash = {}, res = []) => {
  if (i === arr.length) return res
  hash[arr[i]] = (hash[arr[i]] || 0) + 1
  if (hash[arr[i]] === 2) res.push(arr[i])
  return solution(arr, i + 1, hash, res)
}


console.log(solution([1, 2, 2, 3, 1]))  // should return [1, 2]
console.log(solution([1, 1, 1, 1, 2, 3, 3]))  // should return [1, 3]