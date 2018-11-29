// Print numbers right hand triangle
// function print_asteriks(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//     console.log(arr.join(" "));
//   }
// }

// Print asteriks right handed descending triangle
// function print_asteriks_desc(n) {
//   for (let i = n; i >= 1; i--) {
//     console.log("*".repeat(i));
//   }
// }
// print_asteriks_desc(10);

//Print left handed traingale with asteriks

// function print_left_asteriks(n) {
//   for (let i = 1; i <= n; i++) {
//     let str1 = " ".repeat(n - i);
//     let str2 = "*".repeat(i);

//     console.log(str1 + str2);
//   }
// }

// print_left_asteriks(10);

//Print whole triangle with asteriks

// function asteriks(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = " ".repeat(n - i);
//     let str2 = "*".repeat(i * 2 - 1);

//     console.log(str + str2 + str);
//   }
// }

// asteriks(20);

// Print whole triangle of numbers

// function asteriks(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     let str1 = " ".repeat(n - i);
//     arr.push(i);
//     let str2 = arr.join("");
//     console.log(str1 + str2 + str1);
//   }
// }

// asteriks(20);

// function asteriks_left_num(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//     str = " ".repeat(n - arr.length);
//     str1 = arr.join("");
//     console.log(str + str1);
//   }
// }

// asteriks_left_num(5);
