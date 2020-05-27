function getUrlQueryObj(url) {
  if (!url) return;
  var obj = {};
  var queryArray = url.substring(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < queryArray.length; i++) {
    var keyValue = queryArray[i].split("=");
    var key = keyValue[0];
    var value = keyValue[1];
    obj[key] = value;
  }
  return obj;
}
module.exports = getUrlQueryObj;
