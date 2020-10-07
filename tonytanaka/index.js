// exercise 1
let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log(introSentence, age);
console.log(introSentence + " " + age);
// is  it wrong to adopt the first solution?
// the '+' operator is adding the 2nd string to the first

// exercise 2
let variable2a = "1005";
variable2a = Number(variable2a);
console.log(variable2a);

let variable2b = "10.05";
variable2b = Number(variable2b);
//variable2b = parseFloat(variable2b); // also works
console.log(variable2b);

// exercise 3
num1 = 30;
console.log(num1 % 2 == 0 ? num1 + " is even" : num1 + " is odd");

num2 = 939;
console.log(num2 % 2 == 0 ? num2 + " is even" : num2 + " is odd");

num3 = 40.9;
console.log(num3 % 2 == 0 ? num3 + " is even" : num3 + " is odd");
