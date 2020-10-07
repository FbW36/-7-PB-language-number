// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

let introSentence = "hello, my name is Fran and I am";
let age = 25;
// Expected Output:
// "hello, my name is Fran and I am 25"
console.log(introSentence, age);
// In this case, what is the + operator doing? Comment your answer in the js file.
//In this case it puts the different variables next to each other.
// 2. Converting
// Create a variable with the value of "1005". Convert it to a number.
let value1 = "1005";
value1 = Number(value1);
console.log(value1);
// Create a variable with the value of "10.05". Convert it to a number.
value2 = "10.05";
console.log(parseFloat(value2));
// 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
let value3 = 30;
let value4 = 939;
let value5 = 40.9;

    if(value3 % 2 === 0){
        console.log(value3, "is even");
    }else{
        console.log(value3, "is odd.")
    }

    if(value4 % 2 === 0){
        console.log(value4, "is even");
    }else{
        console.log(value4, "is odd.")
    }

    if(value5 % 2 === 0){
        console.log(value5, "is even");
    }else{
        console.log(value5, "is odd.")
    }


// 30
// 939
// 40.9