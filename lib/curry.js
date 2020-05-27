function curry(fn) {
  var length = fn.length;
  var params = [];
  return function _curry() {
    params = params.concat([].slice.call(arguments));
    if (length <= params.length) {
      return fn.apply(this, params);
    } else {
      return _curry;
    }
  };
}
module.exports = curry;