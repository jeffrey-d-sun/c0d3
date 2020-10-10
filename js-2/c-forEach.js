/*
Write a function called solution that replicates Array.prototype.forEach and call it cForEach

Callback takes 3 input parameters, element, index and original array. 

[5,8,7].cForEach( (e, i, arr) => {
  console.log(e, i, arr)
})

// console.log will be called 3 times:
//    5, 0, original array
//    8, 1, original array
//    7, 2, original array
*/

const solution = () => {
  Array.prototype.cForEach = function (cb, i = 0) {
    if (i === this.length) return;
    cb(this[i], i, this);
    return this.cForEach(cb, i+1);
  }
}


solution()
const a = [5, 8, 7]

a.cForEach((e, i, arr) => {
  console.log(e, i, arr)
})
