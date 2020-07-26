const _ = {
  clamp: function(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  }
};


module.exports = _;