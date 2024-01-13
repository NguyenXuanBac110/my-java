let firstName="Nguyen";
let lastName="Bac";

const fullName= "Họ ten: " + firstName + lastName

console.log(fullName);

// arr
const arr=[1, 2, 3, 4, 5];

arr.push(6);
// xoá 2 phần tử từ vị trí thứ 2
arr.splice(2,2);
// thêm 6 và 7 sau vị trí thứ 1 mà k xoá phần tử nào trong mảng
arr.splice(1, 0, 6, 7)

// pop() xoá phần tử cuối cùng của mảng
// shift() xoá phần tử đầu của mảng

// filter 
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(item => item % 2 === 0);
// evenNumbers sẽ là [2, 4, 6]

let users = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 17 }
  ];
  
  let adults = users.filter(user => user.age >= 18);
  // adults sẽ là [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }]
console.log(adults);