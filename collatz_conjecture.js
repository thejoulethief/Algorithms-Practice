"use strict";



function collatz(num){
    if(num == 1){
      return 0;
    }
    else if(num%2==0){
      return 1 + collatz(num/2);
    }
    else{
      return 1 + collatz(3*num + 1);
    }

}

 console.log(collatz(50));
