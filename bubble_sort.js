// Checks if any swaps were performed in a while loop
// If not, returns arr
// Else uses a for loop to iterate through each element, if a[i] > a[i+1], iy swaps them.

function bubble_sort(arr) {
  let swap = 1;
  while (swap != 0) {
    swap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = 1;
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
