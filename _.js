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
  },
  
  words: function(string) {
    if(typeof string === 'string'){ 
      return string.split(' ')
    } else {
      return `It was expected a string but received a ${typeof string}`;
    }
  }
};


module.exports = _;