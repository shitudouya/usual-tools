function flatArray(arr) {
  return arr.reduce(function (pre, cur) {
    return pre.concat(Array.isArray(cur) ? flatArray(cur) : cur);
  }, []);
}
module.exports = flatArray;
