var arr = [123,23,45,67,89,0];

//Merge sort

function merge_sort(arr){
  if(arr.length < 2){
    return arr;
  }
  var middle = Math.floor((arr.length)/2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  return merge(merge_sort(left), merge_sort(right));
}


function merge(left, right){
  let result =[];

  while(left.length && right.length){
      //if(left[0] <= right[0]){
      //    result.push(left.shift());
      //}
       left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
      //else{
      //    result.push(right.shift());
      //}
  }

  while(left.length){
    result.push(left.shift());
  }
  while(right.length){
    result.push(right.shift());
  }

  //console.log(result);
  return result;
}

const list = [2, 5,6,5, 3,1,0];
console.log(merge_sort(arr));
console.log(merge_sort(list));
