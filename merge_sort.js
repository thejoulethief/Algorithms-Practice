function merge_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}
// function main() {
//   var array = [
//     [2, 3, 76, 450, 862, 1232, 12],
//     [22, 34, 576, 240, 866, 32, 12],
//     [12, 34, 76, 40, 82, 22, 12],
//     [0, 0, 22, 36, 6, 5, 82, 12, 12]
//   ];

//   for (let i = 0; i < 4; i++) {
//     console.log(merge_sort(array[i]));
//   }
// }

// main();

console.log(merge_sort([345678, 1, 345, 23, 9, 4, 1]));
