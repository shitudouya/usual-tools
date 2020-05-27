function isEmpty(target) {
  return target === undefined || target === null || (typeof target === "object" && Object.keys(target).length === 0) || (typeof target === "string" && target.trim().length === 0);
}

module.exports = isEmpty;
