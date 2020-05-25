(function (root, factory) {
  if (typeof module === "object" && typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(factory);
  } else {
    root["usualTools"] = factory();
  }
})(this, function factory() {
  "use strict";

  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }

  function isEmpty(target) {
    return (
      target === undefined ||
      target === null ||
      (typeof target === "object" && Object.keys(target).length === 0) ||
      (typeof target === "string" && target.trim().length === 0)
    );
  }

  function type(target) {
    var class2type = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
      class2type["[object " + item + "]"] = item.toLowerCase();
    });
    if (target == null) {
      return target + "";
    }
    return typeof target === "object" || typeof target === "function"
      ? class2type[Object.prototype.toString.call(target)] || "object"
      : typeof target;
  }

  function once(fn) {
    var result;
    return function () {
      if (fn) {
        result = fn.apply(this, arguments);
        fn = null;
      }
      return result;
    };
  }

  function isFunction(obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
  }

  function eq(a, b, aStack, bStack) {
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null) return false;
    if (a !== a) return b !== b;
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object") return false;
    return deepEq(a, b, aStack, bStack);
  }

  function deepEq(a, b, aStack, bStack) {
    var toString = Object.prototype.toString;
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }

    var areArrays = className === "[object Array]";
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") return false;
      var aCtor = a.constructor,
        bCtor = b.constructor;
      if (
        aCtor == bCtor &&
        !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) &&
        "constructor" in a &&
        "constructor" in b
      ) {
        return false;
      }
    }

    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a) {
        return bStack[length] === b;
      }
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
      length = a.length;
      if (length !== b.length) return false;
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      var keys = Object.keys(a),
        key;
      length = keys.length;
      if (Object.keys(b).length !== length) return false;
      while (length--) {
        key = keys[length];
        if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }

  function debounce(fn, wait) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function throttle(fn, delay) {
    var timer = null;
    return function () {
      if (!timer) {
        var context = this;
        var args = arguments;
        timer = setTimeout(function () {
          fn.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }

  function eqNaN(source, target) {
    if (source !== source) {
      return target !== target;
    }
    return false;
  }

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

  function countDown(time) {
    var timeObj = {};
    var endTime = new Date(time).getTime();
    var nowTime = new Date().getTime();
    var leftTime = endTime - nowTime;
    var days = parseInt(leftTime / (60 * 60 * 24 * 1000));
    var hours = parseInt((leftTime / (60 * 60 * 1000)) % 24);
    var minutes = parseInt((leftTime / (60 * 1000)) % 60);
    var seconds = parseInt((leftTime / 1000) % 60);
    timeObj.days = days;
    timeObj.hours = hours;
    timeObj.minutes = minutes;
    timeObj.seconds = seconds;
    return timeObj;
  }

  function trimAll(str) {
    return str.replace(/\s/g, "");
  }

  function deepClone(obj) {
    if (typeof obj !== "object") return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
      }
    }
    return newObj;
  }

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

  function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  }

  return {
    isPlainObject: isPlainObject,
    isEmpty: isEmpty,
    type: type,
    once: once,
    eq: eq,
    debounce: debounce,
    throttle: throttle,
    shuffle: shuffle,
    deepClone: deepClone,
    randomNumber: randomNumber,
    countDown: countDown,
    trimAll: trimAll,
    getUrlQueryObj: getUrlQueryObj,
    uuid: uuid,
    eqNaN: eqNaN
  };
});
