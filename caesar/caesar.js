const caesar = function(str, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let abc = alphabet.split("");
    let minuscula = str.toLowerCase();
    let result = "";
    let n = num % 26;

    for(let i = 0; i < minuscula.length; i++){
      let currentLetter = minuscula[i];
      if(alphabet.search(currentLetter) < 0){
        result += currentLetter;
        continue;
      }
        let currentIndex = abc.indexOf(currentLetter);
        let newIndex = currentIndex + n;
        if(newIndex > 25)newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()){
          result += abc[newIndex].toUpperCase();
        }
        else{
          result += abc[newIndex];
        }
    }
    return result;
}

module.exports = caesar
