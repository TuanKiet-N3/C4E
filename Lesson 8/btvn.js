// Bài 1: Dùng dòng lặp for, while đề xuất ra các số chẵn từ 0 - 100
// for (let count = 0; count <=100; count++){
//         if(count%2==0){
//         console.log(count)
//         }
// }

// let i = 0;
// while (i <= 100){
//     if (i%2==0){
//         console.log(i)
//         i++;
//     }
// }


// Bài 2: Nhập vào 2 tham số a, b, in ra thông báo so sánh giữa 2 số.
// let a = Number(prompt('Nhập vào số a:'));
// let b = Number(prompt('Nhập vào số b:'));
// for(let i = a; i <= b; i++){
//     if (a < b) { 
//         console.log('a lớn hơn b');
//     } else if (a = b) {
//         console.log('a và b bằng nhau');
//     } else {
//         console.log('a lớn hơn b');
//     }
// }

//Bài 3: Viết hàm nhập vào một số nguyên dương, in ra thông báo số đó là chẵn hay lẽ.
// let a = Number(prompt('Nhập số nguyên dương:'))
// for(i = 1; i <= a ;i++){
//     if (a%2==0){
//         console.log('Là số chẵn');
//         break;
//     }else{
//         if (a%2 !=0)
//         console.log('là số lẻ')
//     }
// }

// Bài 4: Tính tổng các số nguyên dương từ 0 đến 100, xuất ra màn hình kết quả
// let sum = 0
// for(let count=0; count <= 100; count++){
//     sum = sum + count;
// }
// console.log(sum)

//Bài 5: Thực hiện xử lý, nhập vào một ngày, hiển thị thông báo tên thứ trong tuần
// let date = new Date();
 
// // Lấy số thứ tự của ngày hiện tại
// let current_day = date.getDay(prompt('Nhập vào một số:'));
 
// // Biến lưu tên của thứ
// let day_name = '';
 
// // Lấy tên thứ của ngày hiện tại
// switch (current_day) {
// case 0:
//     day_name = "Chủ nhật";
//     break;
// case 1:
//     day_name = "Thứ hai";
//     break;
// case 2:
//     day_name = "Thứ ba";
//     break;
// case 3:
//     day_name = "Thứ tư";
//     break;
// case 4:
//     day_name = "Thứ năm";
//     break;
// case 5:
//     day_name = "Thứ sau";
//     break;
// case 6:
//     day_name = "Thứ bảy";
// }
 
// console.log(day_name);

//Bài 6: Nhập vào một giá trị bất kì, kiểm tra giá trị là số nguyên, số thập phân hay là chữ.



