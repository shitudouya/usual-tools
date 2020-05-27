function eqNaN(source, target) {
  if (source !== source) {
    return target !== target;
  }
}
module.exports = eqNaN;
