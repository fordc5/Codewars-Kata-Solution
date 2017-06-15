//Consider a sequence u where u is defined as follows:
//The number u(0) = 1 is the first one in u.
//For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
//There are no other numbers in u.
//Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

//#Task: Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.
//Kata by g964

function giveMajor(){
  listy = [1]
  for(k=0;k<1000000;k++){
    y = (2*listy[k])+1;
    x = (3*listy[k])+1;
    listy.push(y);
    listy.push(x);
  }
  function sortNumber(a,b) {
    return a - b;
  }
  listy.sort(sortNumber);
  return [...new Set(listy)];
}

takeALook = giveMajor();

function dblLinear(n) {
  return takeALook[n];
}