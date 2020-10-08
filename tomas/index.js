//Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the numbe
let introSentence = "hello, my name is Fran and I am";
let age = 25;
let wholeSentence = introSentence + " " + age;
console.log(wholeSentence);

// + in this case, operator is adding data types to each other

// Create a variable with the value of "1005". Convert it to a number
let num1 = "1005";
console.log(Number(num1));

//Create a variable with the value of "10.05". Convert it to a number
let num2 = "10.05";
num2 = parseFloat(num2);
console.log(num2);

// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd
let num3 = 30;
let num4 = 939;
let num5 = 40.9;

let evenNum1 = num3 % 2 ? "is odd" : "is even";
console.log(num3, evenNum1);

let evenNum2 = num4 % 2 ? "is odd" : "is even";
console.log(num4, evenNum2);

let evenNum3 = num5 % 2 ? "is odd" : "is even";
console.log(num5, evenNum3);
