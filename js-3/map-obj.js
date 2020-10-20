/*
  * @param {callback} cb
  * @returns {number}
  * Write a map function for objects

  const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong',
  }

  const result = info.map( (key, value, i) => {
    return key + i + value
  })

  console.log(result) // ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']
*/

const solution = () => {
  Object.prototype.map = function(cb) {
    return Object.entries(this).map(([key, val], index) => {
      return cb(key, val, index)
    })
  }
}

solution()

const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
}

const result = info.map( (key, value, i) => {
  return key + i + value
})

console.log(result) // ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']