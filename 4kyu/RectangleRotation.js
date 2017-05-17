//Connor Ford
//A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.
//How many points with integer coordinates are located inside the given rectangle (including on its sides)?

function rectangleRotation(a, b) {
  width = 2*Math.floor((b/2)/(Math.sqrt(2)/2))+1
  height = 2*Math.floor((a/2)/(Math.sqrt(2)/2))+1
  remainder = -1;
  if(((width-1)/2)%2===0 && ((height-1)/2)%2===0 || ((width-1)/2)%2===1 && ((height-1)/2)%2===1){
    remainder=1;
  }
  return ((height*width)+remainder)/2
}