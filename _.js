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
  },

  pad: function(string, length=0) {
    if(length <= string.length) {
      return string;
    }

    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

    return paddedString;
  },
  
  has: function(object, key) {
    const hasValue = object[key] != undefined;
    
    return hasValue;
  },

  invert: function (object) {
    let invertedObject = {};
    for(let key in object) {
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }

    return invertedObject;
  },

  findKey: function(object, predicate) {
    for(let key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return key;
      }
    }

    return undefined;
  },

  drop: function(array, number=1){
    return array.slice(number);
  },

  dropWhile: function (array, predicate) {
    const cbFunction = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cbFunction);
    let droppedArray = this.drop(array, dropNumber);
    
    return droppedArray;
  }
};


module.exports = _;