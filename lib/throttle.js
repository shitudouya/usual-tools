function throttle(fn, delay) {
  var timer = null;
  return function () {
    if (!timer) {
      var context = this;
      var args = arguments;
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

module.exports = throttle;