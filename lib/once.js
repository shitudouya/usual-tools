function once(fn) {
  var result;
  return function () {
    if (fn) {
      result = fn.apply(this, arguments);
      fn = null;
    }
    return result;
  };
}
module.exports = once;
