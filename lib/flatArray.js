function flatArray(arr) {
  var result = [];
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      result = result.concat(flatArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
module.exports = flatArray;
