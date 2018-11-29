function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0]);
      }
    }
  }
  return arr;
}

function main() {
  var array = [
    [2, 3, 76, 450, 862, 1232, 12],
    [22, 34, 576, 240, 866, 32, 12],
    [12, 34, 76, 40, 82, 22, 12],
    [0, 0, 22, 36, 6, 5, 82, 12, 12]
  ];

  //var t0 = performance.now();
  for (let i = 0; i < 4; i++) {
    console.log(insertion_sort(array[i]));
  }
  //var t1 = performance.now();
  //rconsole.log(t1-t0);
}

main();
