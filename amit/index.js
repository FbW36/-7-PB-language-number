// 1 concatenate
let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log(introSentence + " " + age); // + operator concatenate string and number

console.log(`"${introSentence} ${age}"`);

// 2 convert string to number
let str = "1005";
console.log(Number(str));

let str2 = "10.5";
console.log(Number(str2));

// 3 check is these even number
let num1 = 30;
console.log(num1 % 2 === 0);

let num2 = 939;
console.log(num2 % 2 === 0);

let num3 = 40.9;
console.log(num3 % 2 === 0);

console.log(num1 % 2 === 0 ? "30 is even" : "30, 939, 40.9");
