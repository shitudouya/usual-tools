var hasOwnProperty = Object.prototype.hasOwnProperty;
function deepClone(obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
module.exports = deepClone;
