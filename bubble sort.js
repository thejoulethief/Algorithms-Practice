function bubble_sort(arr) {
  let swaps = 1;
  while (swaps != 0) {
    swaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swaps = 1;
        }
      }
    }
  }

  return arr;
}

function main() {
  array = [
    [2, 3, 76, 450, 862, 1232, 12],
    [22, 34, 576, 240, 866, 32, 12],
    [12, 34, 76, 40, 82, 22, 12],
    [0, 0, 22, 36, 6, 5, 82, 12, 12]
  ];

  for (let i = 0; i < 4; i++) {
    console.log(bubble_sort(array[i]));
  }
}

main();
