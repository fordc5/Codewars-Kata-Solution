//Connor Ford
//Return true if n is prime and false if not without using loops


function euclids(a,b){ 
  var temp;
  if(a<b){
    temp=a;
    a=b;
    b=temp;
  }
  if(a%b==0){
    return(b);
  }
  return(euclids(a%b,b));
}
//console.log(euclids(3,9))

function aux(x,y){
  console.log(x,y);
  if(x==1){
    return true;
  }
  else if(euclids(x,y) == x){
    return false;
  }else{
    return (aux(x-1,y));
  }
}

function isPrime(n) {
  var number = n;
  if(n<0){
    number = -1*n;
  }
  if(n===0 || n==1){
  return false;
  }
  if(n==2){
  return true
  }
  return aux(Math.floor(Math.sqrt(number))+1,number);
};