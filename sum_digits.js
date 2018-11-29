function sum_digits(num) {
  let arr = num.toString().split("");

  let sum = 0;
  for (let element of arr) {
    sum += parseInt(element);
  }
  return sum;
}

function sum_digits_old(num) {
  let sum = 0;
  let remain;
  while (num != 0) {
    remain = num % 10;
    num = Math.floor(num / 10);
    sum += remain;
  }
  return sum;
}

console.log(sum_digits_old_1(10));

console.log(sum_digits_old(123));
