//0,1,1,2,3,5
//index starts from 0

function fibonnaci(n){
  if(n==0){
    return 0;
  }
  else if(n==1){
    return 1;
  }
  else{
    return fibonnaci(n-1) + fibonnaci(n-2);
  }

}

var num=20;
console.log(fibonnaci(num));
console.log(iter_fibonnaci(num));

function iter_fibonnaci(n){
  var num1= 0;
  var num2=1;
  var sum;

  if(n<=1){
    return n;
  }
  while(n>1){
    sum = num1+num2;
    num1=num2;
    num2=sum;
    n--;
  }
  return sum;
}
