function say(something) {
  console.log(something);
}

//The parameters below are an example of passing a function "func" along with an argument "arg" into the function.
function exec(func, arg) {
  func(arg);
}

//NOTE: With these two values that are being passed it may seem weird. However it is said that both types (function and string) are first class citizens meaning that they can both be passed as arguments in JS. Moreover it is said that a function is a first class citizen because it can be stored in variables or passed into functions like other data types.
exec(say, "Hi there!");

/*Another way to do the same thing as above is pass the function directly in the function call. Doing it this way changes this from being like a statement (as with the above example) into an expression. Also as you can see I have removed the "function say" from the declaration here. This is what is called an anonymous function and is commonly used when doing things this way.
  exec( (something) => {
  console.log(something);
}, "Greetings, everyone!");
*/

//Below is what is referred to as a callback function because we want to call the passed function back after a set period of time which is the "3000" value which is 3 seconds being displayed in milliseconds. There is more information the page I have bookmarked regarding the "setTimeOut" method.
window.setTimeout( (something) => {
  console.log(something);
}, 3000, "Greetings, everyone!");