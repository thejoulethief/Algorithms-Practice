function sum_recursive(num) {
  if (num == 0) {
    return 0;
  } else {
    return (num % 10) + sum_recursive(Math.floor(num / 10));
  }
}

console.log(sum_recursive(123));
