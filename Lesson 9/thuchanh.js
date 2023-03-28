let names = [
    "Nguyễn Văn A",
    "Nguyễn Văn B",
    "Nguyễn Văn C",
    "Nguyễn Văn D",
    "Nguyễn Văn B",
    "Nguyễn Văn D"
];
// console.log(names[2]);

// let number = [1, 100, 40, 3, 20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;

// let features = [isRich, isHandsome, hasGirlfriend];

// isRich = true;
//truy xuất giá trị 1 phần tử bất kỳ trong mảng.
// console.log(features[1]);// lấy ra phần tử thứ 2 là index = 1
// console.log(features[0]);// lấy ra 1 phần tử thứ nhất là index = 0


//thay đổi giá trị phần tử bất kỳ trong mảng
// names[0] = "hello world";
// names[4] = "goodbye everyone";
// console.log(names);


// console.log(features); // sẽ in ra giá trị đầu tiên của mảng 'isRich'

// let array1 = ['a', 'b', 'c'];//khai báo 2 mảng khác nhau.
// let array2 = ['a', 'b', 'c'];

// kiểm tra kiểu dữ liệu mảng?
// console.log(typeof (array1)); 
// console.log(array1 + array2); // chương trình tự động ép kiểu mảng về chuỗi khi thực hiện phép cộng.
// console.log(array1 == array2);

// array1[0] = "hello";
// console.log(array1, array2);

//Hoán đổi 2 giá trị phần tử trong mảng.
// let tmp = names[0];
// names[0] = names[3];
// names[3] = tmp;
// console.log(names);

//Duyệt mảng

//Cách 1: dùng for... let i = 0...
// for(let i = 0; i < names.length; i++){
//     let stt = i + 1;
//     // console.log(stt + "." + names[i]);// cộng chuỗi để hiển thị số thứ tự ngoài màn hình in.
//     let name = names[i];
//     if(name == "Nguyễn Văn B" || name == "Nguyễn Văn D"){
//         console.log(stt + "." + name);
//     }

// }

// //C2: for ... of
// // for (const name of names){
//     //làm việc với name trong đây
//  i++
// }

const numbers = [1, 7, 8, -3, 6, 10, 9];
//in ra số chẵn trong numbers
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i]
//     if(number % 2 == 0)
//     console.log(number)
// }
//tính tổng phần tử
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     sum += number;
//     //sum = sum + number;
// }
// console.log(sum)

//tìm phần tử nhỏ nhất
// let min = numbers[0]; // lấy bất kỳ phần tử trong mảng.
// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     if (min > number) {
//         min = number
//         console.log(min);
//     }
// }
// //thêm 3 số vào đầu mảng
// numbers.unshift(100, 1000, -4);
// // console.log(numbers);

// //thêm 3 số vào cuối mảng
// numbers.push(-9, 10, 50);
// console.log(numbers)

// //xóa 1 phần tử đầu tiên trong mảng
// let deletedFirstNumber = numbers.shift();
// console.log("giá trị đầu tiên bị xóa:" + deletedFirstNumber);

// //xóa 1 phần tử cuối mảng
// let deletedLastNumber = numbers.pop();
// console.log('phần tử cuối bị xóa:' + deletedLastNumber);

// //tìm hiểu phưc thức splice()?