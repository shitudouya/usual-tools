var classString = "Boolean Number String Function Array Date RegExp Object Error Symbol";
var objectToString = Object.prototype.toString;
var class2type = {};
function type(target) {
  classString.split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (target == null) {
    return target + "";
  }
  return typeof target === "object" || typeof target === "function" ? class2type[objectToString.call(target)] || "object" : typeof target;
}

module.exports = type;
