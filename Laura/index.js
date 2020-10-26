// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "hello, my name is Fran and I am ";
let age = 25;
console.log(introSentence + age); // hello, my name is Fran and I am25
console.log(introSentence.concat(age)); // hello, my name is Fran and I am25
// * In this case, what is the `+` operator doing? Comment your answer in the js file.
// It is converting the age which is a number into a string and concatenating it to the first string value.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
let string = "1005";
console.log(Number.parseInt(string)); // 1005

// * Create a variable with the value of "10.05". Convert it to a number. 
let string2 = "10.05"
console.log(Number.parseFloat(string2)); // 10.05

// #### 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9
let num = 30;
let num2 = 939;
let num3 = 40.5;

let result = num % 2 == 0 ? num + " is even" : num + " is odd";
console.log(result); // 30 is even

let result2 = num2 % 2 == 0 ? num2 + " is even" : num2 + " is odd";
console.log(result2); // 939 is odd

let result3 = num3 % 2 == 0 ? num3 + " is even" : num3 + " is odd";
console.log(result3); // 40.5 is odd
