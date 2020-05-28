var repeat = require("./repeat");
function pad(source, length, chars) {
  if (source == null) {
    return;
  }
  source = source.toString();
  length = parseInt(length) || 0;
  chars = chars ? chars.toString() : " ";
  var padlength = Math.abs(length) - source.length;
  var padStr = "";
  if (source.length > length) {
    if (length < parseInt(-source.length)) {
      padStr = repeat(chars, padlength);
      return source + padStr.slice(0, padlength);
    }
    return source;
  } else {
    if (padlength > 0) {
      padStr = repeat(chars, padlength);
    }
    return padStr.slice(0, padlength) + source;
  }
}
module.exports = pad;
