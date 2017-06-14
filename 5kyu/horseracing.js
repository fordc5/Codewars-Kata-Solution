//Write a function, accept two parameters: 
//noble(noble's horse, int array, the speed of each horse), 
//tianji(Tian Ji's horse, int array, the speed of each horse), 
//calculate how many times Tian Ji can win the most, 
//returns a number (the number of wins). 
//notes: Tian Ji and the noble have the same number of horses, 
//and the horse can not be repeated to participate in 
//the competition.
//problem from myjinxin2015

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
function horseRacing(noble,tianji){
  total = 0;
  max_noble = 0;
  max_tianji = 0;
  min_tianji = 0;
  horseRacingAux(noble,tianji);
  return total;
}

function horseRacingAux(noble,tianji){
  max_noble = getMaxOfArray(noble);
  max_tianji = getMaxOfArray(tianji);
  min_tianji = getMinOfArray(tianji);
  if (max_noble >= max_tianji){
    var index_min = tianji.indexOf(min_tianji);
    if (index_min > -1) {
      tianji.splice(index_min, 1);
    }
    var index_max = noble.indexOf(max_noble);
    if (index_max > -1) {
      noble.splice(index_max, 1);
    }
  }else{
    var index_max = tianji.indexOf(max_tianji);
    if (index_max > -1) {
      tianji.splice(index_max, 1);
    }
    var index_max = noble.indexOf(max_noble);
    if (index_max > -1) {
      noble.splice(index_max, 1);
    }
    total++;
  }
  if (tianji.length > 0){
    horseRacingAux(noble,tianji);
  }
  return total;
  
  
}