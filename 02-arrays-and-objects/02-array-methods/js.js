let x;

const arr = [28, 38, 44, 29, 109];

// push() - Thêm giá trị 100 vào cuối mảng
arr.push(100);

// pop() - bỏ giá trị cuối cùng
x = arr.pop();

// unshift() - Thêm giá trị 99 vào đầu mảng
arr.unshift(99);

// shift() - Remove first value
x = arr.shift();

// reverse() - đảo ngược arr
// x = arr.reverse();

// includes() - kiểm tra xem phần tử có trong arr không
x = arr.includes(28);


// indexOf() - trả về chỉ số bắt đầu từ giá trị đc gọi
x = arr.indexOf(28);

// trả về kiểu tring
x = arr.toString();
// chuyển mạng sang dạng chuỗi
x = arr.join();



// cắt arr từ vị trí 1 đến 4, đảo ngược, chuyển kiểu sang String, trả về phần tử đc chỉ định (0)
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);

