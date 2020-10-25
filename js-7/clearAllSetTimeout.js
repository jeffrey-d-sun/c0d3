const solution = () => {
  const originalST = window.setTimeout
  var id = null
  cat = () => {
    window.setTimeout = (cb, time) => {
      id = originalST(cb, time)
      clearTimeout(id)
    }
  }

  window.setTimeout = originalST
};