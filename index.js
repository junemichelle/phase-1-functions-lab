// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  if (pickup>=42){
    return pickup-42
  }
  else return 42-pickup
}
function distanceFromHqInFeet(pickup){
let distanceInFeet;
 if (pickup>=42){
 distanceInFeet= distanceFromHqInBlocks(pickup) * 264
return distanceInFeet}
else if(pickup<42){
  distanceInFeet=distanceFromHqInBlocks(pickup) * 264
  return distanceInFeet
}
}
function distanceTravelledInFeet(start, destination){
let distancetravelled= distanceFromHqInFeet(destination)-distanceFromHqInFeet(start)
return distancetravelled
}
function calculatesFarePrice(start, destination){
  let x = distanceTravelledInFeet(start, destination)
  if (x<400){
    return 0
  }
  else if (x>400 & x<2000){
    let y=x-400
    return y* 0.02
  }
  else if (x>2000 & x<2500){
    return 25
  }
  else return "cannot travel that far"
}