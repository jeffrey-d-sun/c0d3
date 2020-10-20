/*
 * @param {object} obj
 * @param {number} num (millieseconds)
 * 
  Write a function that takes in an object and a number (milli-seconds).

  you must call each function value of the object:
  Given an object: {"nVal": (k) => {...}}
  {"nVal": (k) => {...When this function runs, k is "nVal"...}}
  const a = {
    "jayZ": (key) => console.log(key),
    "tupac": (key) => console.log(key + 2),
    "name3": (key) => console.log(key === "name3"),
    "level": (key) => console.log(key + key + key)
  }
  solution(a, 500)

  // should print out: 
  "jayZ"
  ... 500 millieseconds later...
  "tupac2"
  ...500 millieseconds later...
  "true"
  ...500 millieseconds later...
  levellevellevel
*/

const solution = (obj, num) => {
  const keyVal = Object.entries(obj)
  keyVal.forEach(([key, fn], i) => {
    setTimeout(() => {
      fn(key)
    }, num * i)
  })
}

const a = {
  "jayZ": (key) => console.log(key),
  "tupac": (key) => console.log(key + 2),
  "name3": (key) => console.log(key === "name3"),
  "level": (key) => console.log(key + key + key)
}

solution(a, 500)

/* should print out: 
"jayZ"
... 500 millieseconds later...
"tupac2"
...500 millieseconds later...
"true"
...500 millieseconds later...
levellevellevel
*/