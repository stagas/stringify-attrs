
/**
 * Serialize the given `attrs`.
 * 
 * @param {Object} attrs
 * @return {String}
 * @api public
 */

module.exports = function(attrs){
  var val
    , s = [];

  for (var key in attrs) {
    val = String(attrs[key]);
    if (val.length) {
      s.push(key+'='+quotes(val));
    }
    else s.push(key);
  }

  s = s.join(' ');

  return s;
};

/**
 * Put `str` in quotes escaping own.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function quotes(str){
  str = str.replace(/\"/g, '&quot;');
  str = '"'+str+'"';
  return str;
}
