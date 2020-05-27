function repeat(target, n) {
  target = target + "";
  if (n == 1) {
    return target;
  }
  var s = repeat(target, Math.floor(n / 2));
  s += s;
  if (n % 2) {
    s += target;
  }
  return s;
}
module.exports = repeat;
