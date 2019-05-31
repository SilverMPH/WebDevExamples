function getRandomNumber( lower, upper ) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error("One or both of the values entered in the function is not a number. Please enter an integer type number.");
  }
  else {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
  }
  
}

/*
NOTE: Error detection set up above will stop the program completely if gets to the error statement. So if you want to see other results you need to rearrange the order of the function calls below so that a correctly called function is on top.
*/

console.log( getRandomNumber( 'nine', 24 ) );
console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );

