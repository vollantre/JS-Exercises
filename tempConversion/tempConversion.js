const ftoc = function(f) {
  var result = ((f-32)* 5/9)*10;
  return Math.round (result)/10;
}

const ctof = function(c) {
  var result = (c * 9/5+32)*10;
  return Math.round(result)/10;
}

module.exports = {
  ftoc,
  ctof
}
