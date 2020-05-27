function shuffle(arr) {
  var _arr = arr.slice();
  for (var i = 0; i < _arr.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var k = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = k;
  }
  return _arr;
}

module.exports = shuffle;
