console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(namedPerson){
  console.log( ' in helloName: ', namedPerson );
  return 'Hello, ' + namedPerson + '!';
} // end helloName

// Remember to call the function to test
console.log(helloName('LangBaby'));
console.log(helloName('Lil Sims'));
console.log(helloName('Mayor Hawthorne'));
console.log(helloName('Johnny Tsunami'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log( 'in addNumbers: ', firstNumber, '+', secondNumber );
    let answer = firstNumber + secondNumber;
    return answer;
  // return firstNumber + secondNumber;
}


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  console.log('in multiplyThree:', num1, '*', num2, '*', num3);
  return num1 * num2 * num3;
}
console.log( 'Checking to see that 24 is returned: ', multiplyThree(2, 3, 4) ); 



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  console.log( 'in isPosistive', number );
  if (number > 0) {
    return true;
  }
  else (number < 0)
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'Checking to see if 9 is Positive: ', isPositive(9) );
console.log( 'Checking to see if -1 is Positive: ', isPositive(-1) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  console.log('in getLast:', array);
  return array[array.length - 1];
}
console.log( 'Testing to see if 3 is returned: ', getLast([1, 2, 3]) ); // 3
console.log( 'Testing to see if "undefined" is returned from an empty array: ', getLast([]) );        // undefined


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  console.log('in find:', value, array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log( 'Testing to see if True is returned when we ask the function to find 2 in the array: ', find( 2, [1, 2, 3] ) ); // true
console.log( 'Testing to see if False is returned when we ask the function to find 4 in the array: ', find( 4, [1, 2, 3] ) ); // false


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
