Introduction
When working with arrays, you sometimes want to execute code for each value in the array. This is called iterating or looping over the array.

Here we will look at the case where you do not want to modify the array in the process. For transforming arrays, see Concept Array Transformations instead.

The for Loop
The most basic way to iterate over an array is to use a for loop, see Concept For Loops.

const numbers = [6.0221515, 10, 23];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// => 6.0221515
// => 10
// => 23
The for...of Loop
When you want to work with the value directly in each iteration and do not require the index at all, you can use a for...of loop.

for...of works like the basic for loop shown above, but instead of having to deal with the index as a variable in the loop, you are provided with the value directly.

const numbers = [6.0221515, 10, 23];

// Because re-assigning number inside the loop will be very
// confusing, disallowing that via const is preferable.
for (const number of numbers) {
  console.log(number);
}
// => 6.0221515
// => 10
// => 23
Just like in regular for loops, you can use continue to stop the current iteration and break to stop the execution of the loop entirely.

The forEach Method
Every array includes a forEach method that can be used to loop over the elements in the array.

forEach accepts a callback as a parameter. The callback function is called once for each element in the array. The current element, its index and the full array are provided to the callback as arguments. Often, only the current element or the index are used.

const numbers = [6.0221515, 10, 23];

numbers.forEach((number, index) => console.log(number, index));
// => 6.0221515 0
// => 10 1
// => 23 2
There is no way to stop the iteration once the forEach loop was started. The statements break and continue do not exist in this context.

Instructions
As a budding magician, Elyse needs to analyze her deck in lots of different ways. To keep things simple, she only uses cards with values 1-10.

Task 1
Determine how many cards of a certain type are in the deck

Elyse wants to know how many cards of a particular type she has in her deck.

Write a function cardTypeCheck that takes two parameters: an array of cards (Elyse's deck) and the type of card to count. The function should use forEach and return the number of cards in the deck of the specified type.

const cardType = 3;
cardTypeCheck([1, 2, 3, 4], cardType);
// => 1

Stuck? Reveal Hints
Opens in a modal
Task 2
Determine how many odd or even cards there are

For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function determineOddEvenCards that takes in two parameters: an array of cards (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').

This function should return a single number: the number of odd or even cards there are (depending on the value of the second argument) in the deck. To practice, use a for...of loop in the function implementation this time.

determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
// => 2

determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
// => 4