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
let n = 40.9;
let checkNumber = n % 2 == 0 ? "30 is even" : "number is odd";
console.log(checkNumber);
