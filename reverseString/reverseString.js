const reverseString = function(str) {
    let string = '';
    x = str.length;
    for (let i = str.length-1; i >= 0; i--){

    string += str[i];
    
    }
    
    return string;
}

module.exports = reverseString