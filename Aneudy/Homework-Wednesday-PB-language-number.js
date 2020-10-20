
//#### 1. Concatenation. 
//* Create two variables. One variable should contain a string value and the other should contain a number. 
//Concatenate the string and the number.
var string = "Aneudy";
var number = "30";
var now = string += number;
console.log(string,number,now);
//```javascript
//let introSentence = "hello, my name is Fran and I am";
//let age = 25;
//```
//**Expected Output**: 
//```javascript
//"hello, my name is Fran and I am 25"
//```
//* In this case, what is the `+` operator doing? Comment your answer in the js file.

// Answer: The '+' operator is indicating that it will unite string to a number. 

//#### 2. Converting 
//* Create a variable with the value of "1005". Convert it to a number.
Number = ("1005");
console.log(Number);

//* Create a variable with the value of "10.05". Convert it to a number. 
Number = ("10.50");
console.log(Number);

//#### 3. Remain There
//Check if the following numbers are even numbers. 
//Use a ternary and if the number is even print `30 is even`, else print that it is odd.

//* 30
var thirty = 30 % 2 == 0 ? "number is even" : "number is odd";
console.log(thirty);
//* 939
var nine = 939 % 2 == 0 ? "number is even" : "number is odd";
console.log(nine);
//* 40.9
var forty = 40.9 % 2 == 0 ? "number is even" : "number is odd";
console.log(forty);
