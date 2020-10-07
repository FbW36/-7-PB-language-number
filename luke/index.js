// * Create two variables.One variable should contain a string value and the other should contain a number.Concatenate the string and the number.
let str = "Hey my name is luke, I like JavaScript ";
let age = 26;
console.log(str + age);

// * In this case, what is the`+` operator doing ? Comment your answer in the js file.
/*
The javascript is taking the two variable and adding them together, it see's the first one is a string and converts the age variable to a string.
*/

// * Create a variable with the value of "1005".Convert it to a number.
let value1 = "1005";
console.log(parseInt(value1));

// * Create a variable with the value of "10.05".Convert it to a number.
let value2 = "10.05";
console.log(parseFloat(value2));

// Check if the following numbers are even numbers. Use a ternary and if the number is even print`30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9
let num1 = 30;
let res1 =
  num1 % 2 == 0 ? num1 + " is an even number" : num1 + " is an odd number";
console.log(res1);

let num2 = 939;
let res2 =
  num2 % 2 == 0 ? num2 + " is an even number" : num2 + " is an odd number";
console.log(res2);

let num3 = 40.9;
let res3 =
  num3 % 2 == 0 ? num3 + " is an even number" : num3 + " is an odd number";
console.log(res3);
