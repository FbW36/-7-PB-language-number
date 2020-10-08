//1.Concatenation

let intro = 'I am ';
let name = 32;
console.log(intro + name);

// The + operator is concatenating a string and a number.

//2.Converting
let numberString1 = '1005';
let numberString2 = '10.05';

console.log(parseInt(numberString1));
console.log(parseFloat(numberString2));

//3.Remain There
let number1 = 30;
let number2 = 939;
let number3 = 40.9;
console.log(number1 % 2 === 0 ? `${number1} is even` : `${number1} is odd`);
console.log(number2 % 2 === 0 ? `${number2} is even` : `${number2} is odd`);
console.log(number3 % 2 === 0 ? `${number3} is even` : `${number3} is odd`);
