"use strict";

var arr = [1, 2, 3, 6, 7, 34, 40, 56, 78, 876, 2345, 5600, 6789];

function binary_search(arr, search) {
  let middle;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === search) return middle;
    if (search > arr[middle]) start = middle + 1;
    if (search < arr[middle]) end = middle - 1;
  }
  return -1;
}

console.log(binary_search(arr, 67));
