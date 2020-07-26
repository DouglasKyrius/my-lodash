const _ = {
  clamp: function(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },

  inRange: function(number, start, end) {
    if(!end) {
      end = start;
      start = 0;
    }
    if(start > end) {
      let tempEnd = end;
      end = start;
      start = tempEnd;
    }
    
    const isInRange = start <= number && number < end;
    
    return isInRange;
  }
};


module.exports = _;