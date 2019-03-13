function add (num1,num2) {
	num1 += num2;
	return num1;
	
}

function subtract (num1,num2) {
	let substr = num1 - num2;
	return substr;
}

function sum (array) {
	let numbers = array;
	let result = numbers.reduce((total, num) => total + num, 0);
	return result;	
}

function multiply (array) {
	let numbers = array;
	let result = numbers.reduce((total, num) => total * num);
	return result;
}

function power(num1,num2) {
	return Math.pow(num1,num2);
}

function factorial(num) {
	let result = 1;
	if(num == 0){
		result = 1;
	}else{for(let i = 1; i <= num; i++){
		result *= i;
	}
		}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}