Introduction
Comparison
In JavaScript, numbers can be compared using the following relational and equality operators.

Comparison	Operator
Greater than	a > b
Greater than or equals	a >= b
Less than	a < b
Less than or equals	a <= b
(Strict) Equals	a === b
Not (strict) equals	a !== b
The comparison result is always a boolean value: true or false.

1 < 3;
// => true

2 !== 2;
// => false

1 === 1.0;
// => true
// All numbers are floating-points, so this is different syntax for
// the exact same value.
In JavaScript, the comparison operators above can also be used to compare strings. In that case, a dictionary (lexicographical) order is applied. You can find a list of the exact order of all the characters here.

'Apple' > 'Pear';
// => false

'a' < 'above';
// => true

'a' === 'A';
// => false
Conditionals
A common way to conditionally execute logic in JavaScript is the if-statement. It consists of the if keyword, a condition wrapped in round brackets and a code block wrapped in curly brackets. The code block will only be executed if the condition evaluates to true.

if (condition) {
  // code that is executed if "condition" is true
}
It can be used stand-alone or combined with the else keyword.

if (condition) {
  // code that is executed if "condition" is true
} else {
  // code that is executed otherwise
}
To nest another condition into the else statement, you can use else if.

if (condition1) {
  // code that is executed if "condition1" is true
} else if (condition2) {
  // code that is executed if "condition2" is true
  // but "condition1" was false
} else {
  // code that is executed otherwise
}
Instructions
In this exercise, you will write some code to help you prepare to buy a vehicle.

You have three tasks, one to determine if you will need to get a licence, one to help you choose between two vehicles and one to estimate the acceptable price for a used vehicle.

Task 1
Determine if you will need a drivers licence

Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

needsLicense('car');
// => true

needsLicense('bike');
// => false

Stuck? Reveal Hints
Opens in a modal
Task 2
Choose between two potential vehicles to buy

Task 3
Calculate an estimation for the price of a used vehicle