"use strict";

var arr = [1,2,3,6,7,34,56,78,876,2345, 5600];

//Binary search
//Find the middle element of the array
//If the elemen = search element then return index i
//If the element < search element, set start=i+1 and end=length of array
//if the element > search element, set start=0 and end=i-1
//when start > end or end < start, return null, that is element is not present

var i=0;
var start=0;
var end = arr.length-1;
var search = 7;
var found = false;
for(i=0; i<arr.length; i++){
   if(start > end){
     break;
   }
   let middle = Math.floor((start + end)/2);
   console.log("Middle:" + middle, "ST"+start, "END" + end, arr[middle]);
   if(search == arr[middle]){
      console.log("Element found at " + middle);
      found = true;
      break;
   }
   else if(search > arr[middle]){
     start = middle+1;
   }
   else{
     end=middle-1;
   }
 }

if(found==false){
  console.log("Element is not present in the given array");
}
