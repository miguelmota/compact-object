(function(root) {

  function isTruthy(o) {
    return o;
  }

  function isFalsy(o) {
    return !isTruthy(o);
  }

  function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  }

  function isExisty(o) {
    return !(o === null || o === undefined);
  }

  function isString(o) {
    return typeof o === 'string' || o instanceof String;
  }

  function isEmpty(o) {
    if (!isExisty(o)) return true;
    if (isArray(o)) return o.length === 0;
    if (isObject(o)) return Object.keys(o).length === 0;
    if (isString(o)) return o.length === 0;
    return false;
  }

  function filter(col, fn) {
    return col.filter(fn);
  }

  function compactObject(o) {
    var ret = {};
    if (isObject(o)) {
      for (var k in o) {
        if (o.hasOwnProperty(k)) {
          if (!isEmpty(o[k])) {
            if (isObject(o[k])) {
              ret[k] = compactObject(o[k]);
            } else {
              ret[k] = o[k];
            }
          }
        }
      }
    }
    return ret;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = compactObject;
    }
    exports.compactObject = compactObject;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return compactObject;
    });
  } else {
    root.compactObject = compactObject;
  }

})(this);

