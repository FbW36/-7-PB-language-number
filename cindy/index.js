//1. Concatenation.

//Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

let string1 = "hello, my name is Cindy and I am ";
let age = 25;

//Expected Output:

//("hello, my name is Fran and I am 25");
console.log(string1 + age);
//In this case, what is the + operator doing? Comment your answer in the js file

//The "+" operator is adding both values in the same output.

//*****************************************
//2. Converting

//Create a variable with the value of "1005". Convert it to a number.
let number1 = "1005";
let number11 = Number(number1);
console.log(typeof number11);

//Create a variable with the value of "10.05". Convert it to a number.
let number2 = "10.05";
let number22 = Number(number2);
console.log(typeof number22);

//************************************
//3. Remain There

//Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

//30;
//939;
//40.9;
let num3 = 30;
let num4 = 939;
let num5 = 40.9;

let evenNum1 = num3 % 2 ? "is odd" : "is even";
console.log(num3, evenNum1);

let evenNum2 = num4 % 2 ? "is odd" : "is even";
console.log(num4, evenNum2);

let evenNum3 = num5 % 2 ? "is odd" : "is even";
console.log(num5, evenNum3);
