let myString = "           nguyen xuan bac"

let mynewString;
// bỏ khoảng trắng ở đầu
myString = myString.trim();
mynewString = myString[0].toUpperCase() + myString.substring(1);


// mynewString =  myString[0].toUpperCase()  + myString.substring(1);

console.log(mynewString)