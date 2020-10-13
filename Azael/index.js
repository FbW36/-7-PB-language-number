// # Strings and Numbers

// #### 1. Concatenation.
/* Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
```javascript*/
let introSentence = "hello, my name is Fran and I am";
let age = 25;

console.log(introSentence + " " + age);

/* **Expected Output**: 
```javascript
"hello, my name is Fran and I am 25"
```
* In this case, what is the `+` operator doing? Comment your answer in the js file.


// Answer==> To concatenate them */

/*#### 2. Converting
 * Create a variable with the value of "1005". Convert it to a number.
 * Create a variable with the value of "10.05". Convert it to a number. */

let integer = "1005";
let integerNumber = Number(integer);
console.log("integerNumber ==>" + integerNumber);

let float = "10.05";
let floatNumber = Number(float);
console.log("floatNumber ==>" + floatNumber);

/*#### 3. Remain There
Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
* 30
* 939
* 40.9*/

let num = 30;

let isEven = num % 2 == 0 ? "is even!" : "is odd!";
console.log("30==>" + isEven);

num1 = 939;
let isEven1 = num1 % 2 == 0 ? "is even!" : "is odd!";
console.log("939==>" + isEven1);

num2 = 40.9;

let isEven2 = num2 % 2 == 0 ? "is even!" : "is odd!";
console.log("40.9==>" + isEven2);
