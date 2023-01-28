Introduction
Regular Expressions in JavaScript
A Regular Expression (or Regex) is a sequence of characters that we can use to target and manipulate certain elements in strings. Hence, we can:

Search for a text in a string
Replace substrings in a string
Extract information from a string
💡 JavaScript's regex flavor is part of the ECMA-262 standard for the language. This means that you don't have to worry about browser-specific compatibility.

How to create Regular Expressions
In JavaScript, a regular expressions is mostly written in the format /pattern/modifiers.

We have two ways of creating a regular expression:

Regular Expression Literal:
const regex = /[a-z]/;
Constructor RegExp:
const regex = new RegExp('[a-z]');
In both cases, JavaScript is creating an object out of the regex. It is recommended to use immutable patterns with the literal as default.

The RegExp constructor can be used for cases where the regex will change or we don't know it yet (like an input).

🏴‍☠️ Flags
Regular expressions have optional superpowers called flags that allow for additional features.

Some of the widely used are:

/g - Global Search
/i - Case Insensitive
/m - Multiline Search
Here is a simple example:

const re = /home/gi;
const str = 'Home, sweet home.';
const myArray = str.match(re);
console.log(myArray);

=> // ["Home", "home"]
The g character allows us to parse all possible matches within a string. Without this feature, JavaScript would have extracted only the first Home match.

The Case Insensitive flag /i enables us to be flexible when it comes to finding a pattern. This way it doesn't matter if what we are looking for is in UPPERCASE or lowercase.

When using the RegExp constructor, the syntax of adding flags is different.

let regex = /[a-z]/gi; // literal notation
let regex = new RegExp('[a-z]', 'gi'); // constructor with string pattern as first argument
let regex = new RegExp(/[a-z]/, 'gi'); // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
Most common Functions
When regular expressions are combined with current build-in functions in JavaScript, we have some powerful ways of manipulating and getting data from strings.

These are some of the most common functions used alongside regex.

Test
The test()] method executes a search for a match between a regular expression and a specified string. Returns true or false.

const str = 'It is difficult to test if you have a virus';
const result = /virus$/.test(str);

console.log(result);

// => true
Match
With the match() method, we get a useful array whose contents depend on the presence or absence of the found matches.

In this way, we are able both to search and to extract information from any string. For example:

const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';
const regex1 = /someone/;
const regex2 = /happy/;

funnyQuote.match(regex1);
// => ["someone", index: 11, input: "If you see someone crying, ask if it is because of their haircut.", groups: undefined]

funnyQuote.match(regex2);
// => null
When the Global Search flag /g is present, instead of getting the only match alongside useful information such as the index or input, the method returns all of the occurances displayed in the array:

const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';

const regex3 = /if/gi;

funnyQuote.match(regex3);
// => ["If", "if"];
Replace
The replace() method in JavaScript allows us to search for a value within a given string, and replacing it with a desired new value.

string.replace(searchValue, newValue);
The pattern for searching the substitution can be a single string, or a regular expression.

let string = 'I like dogs!';
let result = string.replace('dogs', 'cats');

let string = 'I would love to travel to Japan';
let result = string.replace(/Japan/g, 'Hawaii');
Moreover, we can apply a function on the replacement position in order to make additional changes to each value.

let text = 'Say hello to the chatbot.';
let result = text.replace(/chatbot|hello/gi, function (word) {
  return word.toUpperCase();
});
// => "Say HELLO to the CHATBOT"
Split
The split() method in JavaScript represents a different way of using and manipulating strings with regular expressions.

In this way, we will be using regex in order to divide a given string by recognizing a pattern, e.g. str.split(/[,.\s]/). This pattern will be used as the separator.

const str = 'hello,user.how are.you';

const result = str.split(/[,.\s]/);

console.log(result);
// => ['hello', 'user', 'how', 'are', 'you']
Instructions
You have been hired as a Regular Expression Specialist in a company that is developing a Chatbot.

It is in a very basic phase of development, hence your mission is to use Regular Expressions to improve the chatbot's ability to understand and generate natural language.

Task 1
Check Valid Command

Apart from being smart, the Chatbot is also a loyal assistant.

To ask something to the chatbot, the user must say the word “Chatbot” in the first position of the command.

It doesn't matter if the keyword is in UPPERCASE or lowercase. The important aspect here is the position of the word.

Implement the function isValidCommand() that helps the Chatbot recognize when the user is giving a command.

isValidCommand("Chatbot, play a song from the 80's.";
// => True
isValidCommand("Hey Chatbot, where is the closest pharmacy?";
// => False
isValidCommand("CHATBOT, do you have a solution for this challenge?";
// => True

Stuck? Reveal Hints
Opens in a modal
Task 2
Remove encrypted emojis

The Chatbot has a difficult time understanding how humans use emojis to express their emotions.

When the chatbot receives user messages, each emoji is represented as “emoji” followed by its id number.

Implement the removeEmoji() method to take a string and remove all the emoji’s encryption throughout the message.

Lines not containing emoji’s text should be returned unmodified.

Just remove the emoji string. Do not attempt to adjust the whitespace.

For this particular challenge, use constructor syntax for creating the regular expression.

removeEmoji("I love playing videogames emoji3465 it's one of my hobbies");
// => "I love playing videogames  it's one of my hobbies"

Stuck? Reveal Hints
Opens in a modal
Task 3
Check Valid Phone Number

Considering the download of chatbot features on a mobile app, the user is expected to write a phone number during the conversation.

The problem is that the chatbot can only read and validate a number with a specific format.

If the number is valid (matches the character sequence specified by the regular expression), the chatbot answers with a message thanking the user and confirming the number. If the number is invalid, the function informs the user that the phone number is not valid.

The expected format is: (+##) ###-###-###

checkPhoneNumber('(+34) 659-771-594');
// => "Thanks! You can now download me to your phone."
checkPhoneNumber('659-771-594');
// => "Oops, it seems like I can't reach out to 659-771-594"

Stuck? Reveal Hints
Opens in a modal
Task 4
Get website link

The Chatbot is a really curious software. Even though he can search on the internet about a particular topic, he likes to ask users about cool websites or URL’s to go find relevant information.

Example of Conversation:

Chatbot: Hey username, I would like to learn how to code in JavaScript, do you know any cool website where I could learn?
User: I learned a lot from exercism.com
Implement the function getURL() which is able to return an array with just the link of each website.

getURL('I learned a lot from exercism.com');
// => ["exercism.com"];

Stuck? Reveal Hints
Opens in a modal
Task 5
Greet the user

For storing data from all the persons who have had a conversation with, the chatbot is able to get the Full Name from the user’s profile in this style: “smith, john”.

In this way, we want our chatbot to be really polite and make a good impression.

Write the function niceToMeetYou() that takes a string with the full name of the user, and returns the string “Nice to meet you, John Smith”

For learning purposes, implement the function using a replacement method from Regular Expressions.

let str = 'Smith, John';

niceToMeetYou(str);
// => "Nice to meet you, John Smith"