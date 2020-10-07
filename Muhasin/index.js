// 1. Concatenation

let introSentence = "hello, my name is Fran and I am"
let age = 25;

console.log(introSentence + ' ' + age);

// 2. Converting
let value1 = "1005"
let value2 = "10.05"
let converted = Number(value1);
console.log(typeof converted);



// 3. Remain There
let num1 = 30;
let num2 = 939;
let num3 = 40.9
let isEven = num1 % 2 == 0 ? "true" : "false";
console.log(isEven);

let isEven2 = num2 % 2 == 0 ? "true" : "false";
console.log("Is 939 an even number?", isEven2);

let isEven3 = num2 % 2 == 0 ? "true" : "false";
console.log("Is 40.9 an even number?", isEven3);

let isOdd = num1 % 3 == 0 ? "true" : "false"
console.log("Is 30 an odd ?", isOdd);