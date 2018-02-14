function randomize(min,max){
    return Math.round( Math.random() * (max - min) + min )          
}


// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 
// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

/*
        alert(Math.radians(90));  // 1.5707963267948966
        alert(Math.radians(180)); // 3.141592653589793
        
        alert(Math.degrees(1.5707963267948966)); // 90
        alert(Math.degrees(3.141592653589793));  // 180
*/