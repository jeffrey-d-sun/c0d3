/*
Write a function called solution that replicates Array.prototype.filter and call it cFilter.

Callback takes 3 input parameters, element, index and original array. documentation

result = [5,8,7,6,9].cFilter( (e, i, arr) => {
  console.log(e, i, arr)
  return e % 2 === 0
})
// console.log will be called 5 times:
//    5, 0, original array
//    8, 1, original array
//    7, 2, original array
//    6, 3, original array
//    9, 4, original array
// result will be [8,6]
*/

const solution = () => {
  Array.prototype.cFilter = function(cb, res = [], i = 0) {
    if (i === this.length) return res
    if (cb(this[i], i, this)) res.push(this[i])
    return this.cFilter(cb, res, i+1)
  }
}

solution();

const res = [1, 2, 3, 4, 5].cFilter((ele, idx, arr) => {
  return ele % 2 === 0
})

console.log(res) // [2, 4]