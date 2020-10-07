
// 1.
let introSentence = "Hello, my name is Fran and I am";
let age = 25;
let concat = introSentence + " " + age;
console.log(concat);
/* 
The + operator operates as follows:
1. If we have two numbers (integer/float), it adds them together and optains the result as (integer/float).
2. If one side or both sides of '+' is a String, it concatenate them together in one place, the result in both cases is a string  
*/

// 2. a
let var1 = '1005';
let var1ToInt = parseInt(var1);
console.log(var1, typeof var1ToInt);

// 2. b
let var2 = "10.05";
let var2ToFloat = parseFloat(var2);
console.log(var2ToFloat, typeof var2ToFloat);

// 3.
let firstNrCheck = (30 % 2)==0;
let secondNrCheck = (939 % 2)==0;
let thirsNrCheck = (40.9 % 2)==0;
let CheckNr = (!!firstNrCheck || !!secondNrCheck || !!thirsNrCheck) ? "30 is even" : "the number is odd";
console.log(CheckNr);



