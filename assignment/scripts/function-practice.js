console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end hello
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return 'Hello, Dylan!';
} // end helloName
// Remember to call the function to test
console.log( 'This is the function "helloName":', helloName() );

// 3. Function to add two numbers together & return the result
function addNumbers(num0, num1) {
  let answer = num0 + num1;
   return answer;
} // end addNumbers
  // return firstNumber + secondNumber;
console.log( 'Adding numbers 4 and 5:', addNumbers(4, 5) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let answer = num0 * num1 * num2;
   return answer;
} // end multiplyThree
console.log( 'Multiplying numbers 4, 20, and 12:', multiplyThree(4, 20, 12) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else{
    return false;
  } // end if/else
} // end isPositive
// Call the function to test each outcome (true & false)
console.log( isPositive(1) );
console.log( isPositive(0) );
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  let last_item = array.length-1;
  if ( array.length === 0 ){
    return 'undefined';
  }else{
    return last_item;
  }
  // let last_item = list.length-1;
  //  return last_item;
} // end getLast
console.log( 'The last item is:', getLast([0,1,2,3,4]) );

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for ( i = 0; i < array.length; i++){
    if ( array[i] === value ){
      return true;
    } // end if
  } // end for
  if ( array[i] !== value ){
    return false;
  } // end if
} // end find
console.log( 'This statement should be true:', find(7,[1,4,7,12,16,2,9]) );
console.log( 'This statement should be false:', find(3,[1,4,7,12,16,2,9]) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
