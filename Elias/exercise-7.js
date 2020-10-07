let introSentence = "hello, my name is Fran and I am ";
let age = 25;

console.log(introSentence + age);

//The + sign is concatnating the two variables together

let str1 = "1005";

console.log(Number(str1));

let str2 = "10.05";

console.log(parseFloat(str2));

const numberChecker = (num) => {
if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd")
}
};

numberChecker(30);
numberChecker(939);
numberChecker(40.9);