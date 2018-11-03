"use strict";
var num = 6;

function recursive_fact(num){

  if(num==1)
    return 1;
  else
    return num * recursive_fact(num-1);

}


//iterative version

function fact(n){

  let product=1;
  while(n > 0){
    product = product * n;
    n--;
  }
  return product;
}
console.log(recursive_fact(num));
console.log(fact(num));
