// Given an array of numbers, return the median.
var median = function(numAr){
  if (numAr.length < 1) return 0;
  sortedAr = numAr.sort( function(a, b) {return +a-b;} );
  midI = sortedAr.length/2;
  midFl = Math.floor(midI);
  return (midI===midFl) ? numAr[midFl] : (numAr[midFl]+numAr[Math.ceil(midI)])/2 ;
};
