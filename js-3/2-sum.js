/*
  Write a function that takes in an array of numbers and a number,
  and returns true if any pairs add up to the number.
  (The numbers in the array is not unique, meaning there may be duplicate numbers)

  solution([1,2,22,333,23], 25)   // returns true
  solution([1,2,22,333,23], 24)   // returns true

 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num, hash = {}, i = 0) => {
  if (i === arr.length) return false
  if (hash[num - arr[i]]) return true
  hash[arr[i]] = hash[arr[i]] || true
  return solution(arr, num, hash, i+1)
}

console.log(solution([1,2,22,333,23], 25))   // returns true
console.log(solution([1,2,22,333,23], 24))   // returns true