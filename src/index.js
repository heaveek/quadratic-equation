module.exports = function solveEquation(equation) {
  const arr = equation.split(' ');
  let a = parseInt(arr[0]),
      b = parseInt(arr[3] + arr[4]), // get a sign and a number
      c = parseInt(arr[7] + arr[8]); // get a sign and a number
  let discr = Math.pow(b, 2) - 4 * a * c; // calculate the discriminant D = b^2 − 4ac
 // if(discr > 0) { // two roots 
    let xOne = Math.round(((b * -1) + Math.sqrt(discr)) / (2 * a) );
    let xTwo = Math.round(((b * -1) - Math.sqrt(discr)) / (2 * a) );
    return [xOne, xTwo].sort(function(a,b) {return a - b;});
 /* } else if(discr == 0) { // one roots
      let xOne = Math.round(((b * -1) + Math.sqrt(discr)) / (2 * a));
      return [xOne];
  } else {
    return false;
  } */
};
