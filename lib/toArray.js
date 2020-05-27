function isFunction(obj) {
  return type(obj) === "function";
}

function toArray(arr) {
  var result = [];
  if (arr !== null) {
    var i = arr.length;
    if (i == null || typeof arr === "string" || isFunction(arr) || arr.setInterval) {
      result[0] = arr;
    } else {
      while (i) {
        result[--i] = arr[i];
      }
    }
  }
  return result;
}

module.exports = toArray;
