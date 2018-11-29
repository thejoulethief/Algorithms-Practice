function collatz(num) {
  if (num == 1) {
    return 0;
  }
  if (num % 2 != 0) {
    return 1 + collatz(3 * num + 1);
  }
  if (num % 2 === 0) {
    return 1 + collatz(num / 2);
  }
}

console.log(collatz(50));
