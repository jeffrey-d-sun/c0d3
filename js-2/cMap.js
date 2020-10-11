/*
Write a function called solution that replicates Array.prototype.map function and call it cMap

Callback takes 3 input parameters, element, index and original array. documentation

result = [5,8,7].cMap( (e, i, arr) => {
  console.log(e, i, arr)
  return e + i
})
// console.log will be called 3 times:
//    5, 0, original array
//    8, 1, original array
//    7, 2, original array
// result will be [5, 9, 9]
*/

const solution = () => {
  Array.prototype.cMap = function(cb, array = [], i = 0) {
    if (i === this.length) return array
    array.push(cb(this[i], i, this))
    return this.cMap(cb, array, i+1)
  }
}

solution();
[1, 2, 3].cMap((num) => console.log(num + 1))