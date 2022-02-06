// problem-1

// string
const myString = 'I am Mahmuda. I am a student of PHero fifth batch.';
console.log(myString);

// number
const myNumber = 12;
console.log(myNumber);

// boolean
const myBoolean = true;
console.log(myBoolean);

//problem-2

// use of var
var bill = 34;
bill = 43;
console.log(bill);

// use of let
let age = 13;
age = 20;
console.log(age)

// use of const
const name = 'Mahmuda Akter';
// const name = 'mahmi';
console.log(name);

// problem-3
let firstNum = 12;
let secondNumber = 3;

// add 
let addNumbers = firstNum + secondNumber;
console.log('Result is:', addNumbers);

// subtract
let subtractNumbers = firstNum - secondNumber;
console.log('Result is:', subtractNumbers);

// multiply
let multiplyNumbers = firstNum * secondNumber;
console.log('Result is:', multiplyNumbers);

// division
let divideNumbers = firstNum / secondNumber;
console.log('Result is:', divideNumbers);

// reminder
let getReminder = firstNum % secondNumber;
console.log('Result is:', getReminder);

// problem-4
let a = 5;
let b = 7;
// when a is less than b
if (a < b) {
       console.log('a is less than b');
}
// when a is greater than b
else if (a > b) {
       console.log('a is greater than b');
}
// when a is equal to b
else if (a == b) {
       console.log('a is equal to b');
}
// when a is not equal to b
else if (a != b) {
       console.log('a is not equal to b');
}
// when a is less than or equal to b
else if (a <= b) {
       console.log('a is less than or equal to b');
}
// when a is greater than or equal to b
else if (a >= b) {
       console.log('a is greater than or equal to b');
}

// problem-5
if (a > b && a > 0) {
       console.log("b has negative number");
}
else if (a > b || a != 0) {
       console.log('a has positive value');
}
else if (a > b && a > 0 || a != 0) {
       console.log('life is beautiful');
}
else if (a != 0 || a > 0 && a > b) {
       console.log('life is beautiful');
}

// problem-6
if (a > b) {
       console.log('Go to movies');
}
else if (b > a) {
       console.log('Go to restaurant');
}

else if (a == 0 || b == 0) {
       console.log('Go to shopping');
}
else {
       console.log('Go to sleep');
}

// problem-7
let number = 7;
while (number < 20) {
       console.log(number);
       number += 2;
}

// problem-8
let myFood = ['burger', 'french fries', 'chicken fry', 'doi fuchka', 'doi chira', 'kima puri', 'fuchka'];
myFood[3] = 'chicken nuggets';
myFood.push('ice cream');
myFood.push('chocolate');
myFood.pop();
console.log(myFood);

// problem-9
let array = ['my', 'name', 'is', 'mahmi', '.', 'i', 'am', 'trying', 'my', 'best'];
for (let i = 0; i < array.length; i++) {
       console.log(array[i]);
}
for (const arr of array) {
       console.log(arr);
}
// problem-10
let ari = [23, 80, 67, 81, 45, 90, 87, 65, 78, 99, 89];
for (let i = 0; i <= ari.length; i++) {
       if (ari[i] > 80) {
              console.log(ari[i]);
       }
}

// problem-11
/* 
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
*/
function multiplyThreeNum(num1, num2, num3) {
       let result = num1 * num2 * num3;
       return result;
}
let numbers = multiplyThreeNum(3, 6, 9)
console.log(numbers);

// problem-12
let books = [
       { name: 'steal like an artist', page: 78, author: 'Austin kleon' },
       { name: 'show your work', page: 90, author: 'Austin kleon' },
       { name: 'keep going', page: 109, author: 'Austin kleon' }
];
books[0].page = 128;
console.log(books)