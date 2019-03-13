const palindromes = function(str) {
    var pal = str;
    var string = pal.replace(/[^a-z0-9]/ig, '');
    let backwards = '';
    for(let i = string.length-1; i>=0; i--){
        backwards += string[i];
    }
  return string.toLowerCase() === backwards.toLowerCase();
}

module.exports = palindromes
