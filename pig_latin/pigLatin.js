function translate(str) {
	let pig = "";
	let reg = /[aeio]/;
	let word = str.split(" ");
	let arr = [];
	
	function isConsonant(char){
	  if(char.match(reg) === null){
		return true;
	  }else{
		return false;
	  }
	}
	
	for(let i = 0; i < word.length; i++){
		if(isConsonant(word[i][0])===false){
		  arr.push(word[i]+"ay");
		}else{
		  let indexVowel = word[i].search(reg);
		  let trozo = word[i].substring(indexVowel);
		  let trozo1 = word[i].substr(0, indexVowel);
		  arr.push(trozo + trozo1 + "ay");
		}
	}
	pig = arr.join(" ");
	return pig;
}


module.exports = {
	translate
}

