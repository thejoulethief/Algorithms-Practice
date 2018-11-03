//Bubble sort
//Iterate through the elements and check if any swaps are made, if swap == 0, then the array is unsorted
//Swaps are made when element i and element i+1 are out of order
"use strict";
function bubble_sort(arr){
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
    }
  }
  return arr;
}

function main(){
  var array=[[2,3,76,450,862,1232,12],[22,34,576,240,866,32,12],[12,34,76,40,82,22,12],[0,0,22,36,6,5,82,12,12]];

  //var t0 = performance.now();
  for(let i=0; i<4; i++){
    console.log(bubble_sort(array[i]));
  }
  //var t1 = performance.now();
  //rconsole.log(t1-t0);
};

main();
