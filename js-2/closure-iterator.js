/*
Write a function called solution that does the following:

resf = solution([5,2,1,3], (e) => {
  return e+1
})
resf() // returns 6
resf() // returns 3
resf() // returns 2
resf() // returns 4
resf() // returns 6

resf = solution(["hello", "what", "a", "day"], (e) => {
  if (e.length < 2) return ""
  return e
})
resf() // returns "hello"
resf() // returns "what"
resf() // returns ""
resf() // returns "day"
resf() // returns "hello"
resf() // returns "what"
...
*/

const solution = (arr, cb) => {
  let i = 0
  return () => {
    if (i >= arr.length) i = 0
    console.log(cb(arr[i++]))
  }
}

const cb1 = (e) => {
  return e + 1
}

const cb2 = (e) => {
  if (e.length < 2) return ''
  return e
}

// res = solution([5, 2, 1, 3], cb1)
res = solution(['hello', 'what', 'a', 'day'], cb2)
res()
res()
res()
res()
res()