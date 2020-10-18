/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 * 
 * Given an array of strings (keys) and object, return a new array of values using the given array elements as keys to access the given object.

 * solution(['123', 'abc'], {123: 'hi', 345: 'world', abc: 'world'}); // ['hi', 'world']
 */

const solution = (arr, obj, i=0, res=[]) => {
  if (i === arr.length) return res;
  if (obj.hasOwnProperty(arr[i])) res.push(obj[arr[i]]);
  return solution(arr, obj, i+1, res);
}

console.log(solution(['123', 'abc'], {123: 'hi', 345: 'world', 'abc': 'world'})) // ['hi', 'world']