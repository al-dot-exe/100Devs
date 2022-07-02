// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object 
// is a digit (0-9), false otherwise.

String.prototype.digit = function() {
  return this.length === 1 && this.search(/[0-9]/) !== -1 ? true : false;
};
