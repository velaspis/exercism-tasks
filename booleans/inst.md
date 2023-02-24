Introduction
A boolean represents one of two values: true or false. Logical operators (!, &&, ||) are typically used with boolean values and they return a boolean value.

Instructions
In this exercise, you'll be implementing the quest logic for a new RPG game a friend is developing. The game's main character is Annalyn, a brave girl with a fierce and loyal pet dog. Unfortunately, disaster strikes, as her best friend was kidnapped while searching for berries in the forest. Annalyn will try to find and free her best friend, optionally taking her dog with her on this quest.

After some time spent following her best friend's trail, she finds the camp in which her best friend is imprisoned. It turns out there are two kidnappers: a mighty knight and a cunning archer.

Having found the kidnappers, Annalyn considers which of the following actions she can engage in:

Fast attack: a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on, so he will be vulnerable.
Spy: the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.
Signal prisoner: the prisoner can be signalled using bird sounds if the prisoner is awake and the archer is sleeping, as archers are trained in bird signaling so they could intercept the message.
Free prisoner: Annalyn can try sneaking into the camp to free the prisoner. This is a risky thing to do and can only succeed in one of two ways:
If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.
If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer.
You have four tasks: to implement the logic for determining if the above actions are available based on the state of the three characters found in the forest and whether Annalyn's pet dog is present or not.

Task 1
Check if the 'Fast Attack' action is possible

Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:

const knightIsAwake = true;
canExecuteFastAttack(knightIsAwake);
// => false

Stuck? Reveal Hints
Opens in a modal
Task 2
Check if the 'Spy' action is possible

Task 3
Check if the 'Signal Prisoner' action is possible

Task 4
Check if the 'Free Prisoner' action is possible

How to debug
When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:

console.log('Debug message');