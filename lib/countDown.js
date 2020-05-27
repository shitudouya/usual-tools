function countDown(time) {
  var endTime = new Date(time).getTime();
  var nowTime = new Date().getTime();
  var RemainingTime = endTime - nowTime;
  var days = parseInt(RemainingTime / (60 * 60 * 24 * 1000));
  var hours = parseInt((RemainingTime / (60 * 60 * 1000)) % 24);
  var minutes = parseInt((RemainingTime / (60 * 1000)) % 60);
  var seconds = parseInt((RemainingTime / 1000) % 60);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
module.exports = countDown;