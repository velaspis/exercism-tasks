Introduction
A string is the JavaScript data type to store text data.

Creating a String
You create a string by wrapping the text in single quotes or double quotes. On Exercism, single quotes are used.

'Hello, World!'
"Hello, World!"
Strings as Lists of Characters
A string can be treated as a list of characters where the first character has index 0. You can access an individual character of the string using square brackets and the index of the letter you want to retrieve.

'cat'[1];
// => 'a'
You can determine the number of characters in a string by accessing the length property.

'cat'.length;
// => 3
Concatenation and Methods
The simplest way to concatenate strings is to use the addition operator +.

'I like' + ' ' + 'cats.';
// => "I like cats."
Strings provide a lot of helper methods, see MDN Docs on String Methods for a full list. The following list shows some commonly used helpers.

toUpperCase and toLowerCase - change the case of all characters
trim - remove whitespace at the beginning and end
includes, startsWith and endsWith - determine whether another string is part of the given string
slice - extract a section of the string
Strings are immutable in JavaScript. So a "modification", e.g. by some of the methods above, will always create a new string instead.

Instructions
A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.

The password is always based on a poem and can be derived in a two-step process.

The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
The details of the process depend on which door you are trying to enter.

Task 1
Get the first letter of a sentence

To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.

To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.

Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave
So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.

Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.

frontDoorResponse('Stands so high');
// => "S"

Stuck? Reveal Hints
Opens in a modal
Task 2
Capitalize a word

Task 3
Get the last letter of a sentence

Task 4
Be polite

How to debug
When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:

console.log('Debug message');