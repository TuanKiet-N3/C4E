
// //Bài 3: 
// let d1 = '1, 2, 3, 4, 5'
// let d2 = '1, 2, 3, 4, 5, 6, 30'
// arr1 = d1.split(',')
// arr2 = d2.split(',')

// let result = [];
// for(i = 0; i < arr1.length; i++){
//     if (arr1[i] % 2 == 0){
//         result.push(arr1[i])
//     }
// }

// for(i = 0; i < arr2.length; i++){
//     if (arr2[i] % 2 == 0){
//         result.push(arr2[i])
//     }
// }
// console.log(result)


// // description : kiem tra 3 so nhap vao co phai la tam giac hay khopng
// // input : (int) a, (float)b, (string)c
// // output : array
// function kt_tamgiac(a, b, c) {
//     if ((a + b) > c &&
//         (a + c) > b &&
//         (c + b) > a) {
//         return true
//     }
//     return false
// }

// var a = 3 , b = 5, c = 2
// const result = kt_tamgiac(a, b, c)

// var a = 3 , b = 7, c = 2
// const result1 = kt_tamgiac(a, b, c)

// var a = 3 , b = 7, c = 32
// const result2 = kt_tamgiac(a, b, c)

// if (result == true) {
//     console.log('la tam giac')
// } else {
//     console.log('k tao thanh tam giac')
// }

////Bài 2:
let arr = [
    'Cấu hình máy tính cho Streamer livestream tốt nhất hiện nay', // 0
    'Cách kiểm tra text quạt laptop bằng CPU Z', // 1
    'Day la chuoi co gia tri text trong chuoi', // 2
    'Cách tải và cài đặt CPU Z trên PC',// 3
];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < min.length) {
        min = arr[i]
    }
}
console.log(min)
///
let s = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].search("text") >= 0) {
        s.push(arr[i])
    }
}
console.log(result)
///////////////////////
let newS = [];
for (let i = 0; i < arr.length; i++) {
    newS.push(arr[i].slice(0,3) + ' - ' + arr[i])
}
console.log(newS)
/////////////////////////
let str = [];
for (let i = 0; i < arr.length; i++) {
    str.push(arr[i].replaceAll(' ',' - '))
}
console.log(str)