//Psuedocode for selection sort
//search through all the elemnts, find the smallest
//add it to the sorted part of the array
//search through the unsorted part again
//O(n) and Rho(n) complexity



function selection_sort(array){
len = array.length;
for(let i=0; i< len; i++){

    let min = i; //Making the assumption that the ith element is the smallest

    for(let j=i+1; j<len; j++){
      if(array[min] > array[j]){ //If the value at min pos in array is greater than any index, swap min pos for that index
        min = j;
      }
    }
    if( i != min){ //If our assumption that the ith element was the smallest is wrong, Swap the values at min pos and i of the array
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }

return array;
}
};

function main(){
  array=[[2,3,76,450,862,1232,12],[22,34,576,240,866,32,12],[12,34,76,40,82,22,12],[0,0,22,36,6,5,82,12,12]];

  for(let i=0; i<4; i++){
    console.log(selection_sort(array[i]));
  }
};

main();
