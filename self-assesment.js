// self-assessment three
function paperRequirements(book1, book2, book3) {
       const firstBookPage = 100;
       const secondBookPage = 200;
       const thirdBookPage = 300;
       const firstBookTotalPage = book1 * firstBookPage;
       const secondBookTotalPage = book2 * secondBookPage;
       const thirdBookTotalPage = book3 * thirdBookPage;
       const totalPages = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
       return totalPages;
}
const bookNeeded = paperRequirements(2, 2, 2);
// console.log(bookNeeded);

// self-assessment four
let friends = ['mahmuda', 'moontaha', 'samantha', 'pryonnoti', 'mujbarehawer', 'rassberrry'];
function largestName(names) {
       let friend = [0];
       for (const name of names) {
              if (typeof name == "number") {
                     continue;
              }
              else if (name.length > friend.length) {
                     friend = name;
              }
       }
       return friend;
}
const friendName = largestName(friends);
console.log(friendName);

// self-assessment five
let positiveNumArr = [2, -1, 4, -3, 56, 12, -45, 23, 45, -10, 0, 96, 0, 96, 45, 2, 4, 56];
function getPositiveNumber(arrNum) {
       let positiveNumber = [];
       for (let i = 0; i < arrNum.length; i++) {
              let element = arrNum[i];
              if (element >= 0) {
                     if (positiveNumber.indexOf(arrNum[i]) == -1) {
                            positiveNumber.push(element);
                            positiveNumber.sort((a, b) => a - b);
                     }
              }
       }
       return positiveNumber;
}
const showPositiveNumber = getPositiveNumber(positiveNumArr);
console.log(showPositiveNumber);
