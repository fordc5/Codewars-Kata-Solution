//In this kata you get the start number and the end number 
//of a region and should return the count of all numbers except numbers with a 5 in it. 
//The start and the end number are both inclusive
//kata by SteffenVogel_79


func checkForFive( check: Int) -> Bool {
  if String(check).range(of:"5") != nil{ 
    return true
  } else {
    return false
  }
}

func dontGiveMeFive(_ start: Int, _ end: Int) -> Int {
  var total = 0
  for k in start...end{
    if !checkForFive(check: k){
      total += 1
    }
  }
  return total
}