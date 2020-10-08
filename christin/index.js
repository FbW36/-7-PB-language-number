//1 Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

let intro = "Hello im old and born in year ";
let year = 1950;

console.log(intro + year);

/* The + operator adds the second variable.*/

// 2. Converting
//Create a variable with the value of "1005".Convert it to a number.

let value1 = "1005";
console.log(Number(value1));

//Create a variable with the value of "10.05".Convert it to a number.
let value2 = "10.05";
console.log(Number(value2));

// 3 Remain There
// Check if the following numbers are even numbers.Use a ternary and if the number is even print 30 is even, else print that it is odd.

// 30

let number = 30;

let evenOdd = number % 2 === 0 ? "30 is even" : "30 is odd";
console.log(evenOdd);

// 939
let number2 = 939;

let evenOdd2 = number2 % 2 === 0 ? "939 is even" : "939 is odd";
console.log(evenOdd2);

// 40.9

let number3 = 40.9;
let evenOdd3 = parseFloat(number3) % 2 === 0 ? " is even" : "is odd";
console.log(evenOdd3);
