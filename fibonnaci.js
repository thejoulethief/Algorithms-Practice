function fib_rec(n) {
  if (n < 2) {
    return n;
  } else {
    return fib_rec(n - 1) + fib_rec(n - 2);
  }
}

console.log(fib_rec(10));

//0,1,1,2

// function fib_it(n) {
//   if (n <= 2) {
//     return n;
//   }

//   let firstNum = 0;
//   let SecondNum = 1;
//   for (let i = 3; i <= n; i++) {
//     sum = SecondNum + firstNum;
//     firstNum = SecondNum;
//     SecondNum = sum;
//   }
//   return SecondNum;
// }
//0,1,1,2
function fib_it(n) {
  let x = 0;
  let y = 1;
  let z = 1;
  for (let i = 0; i < n; i++) {
    x = y;
    y = z;
    z = x + y;
  }
  return x;
}

console.log(fib_it(0));
