// 1.

let introSentence = "hello, my name is Sezai and i am ";
let age = 36;
console.log(introSentence + age);

// In this case, what is the + operator doing? Comment your answer in the js file
//the "+" is adding the variables in the console.log and will transform it to a string value.


// 2. 
let num1 = "1005";
let num2 = "10.05";
let resultNum1 = Number(num1)

console.log("resultNum1 ==>", resultNum1);
console.log("parseFloat num2 ==> ", parseFloat(num2));


//3.

let num3 = 30;
let num4 = 939;
let num5 = 40.9;

let evenNum1 = num3 % 2 ? "is odd" : "is even";
console.log(num3, evenNum1);

let evenNum2 = num4 % 2 ? "is odd" : "is even";
console.log(num4, evenNum2);

let evenNum3 = num5 % 2 ? "is odd" : "is even";
console.log(num5, evenNum3);