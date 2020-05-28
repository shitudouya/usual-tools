function toArray(arr) {
  if (arr != null) {
    return [].slice.call(arr);
  }
}

module.exports = toArray;
