# tic-tac-toe

In this project, I learned how to use Javascript objects to accomplish the goal of creating a tic-tac-toe game.
My main objective in this project was to have the least amount of global functions, variables, and objects.

I learned a lot about how to use factory functions and module pattern, and where to use these certain object formats.

A problem I had with this project is working with objects, and knowing where to put certain logic in which object.

Another problem I had was creating objects that are completely independent. I was unsure how to accomplish this, and unfortunately 
my Player and gameController objects are dependent on the existing objects. 

I had trouble on how to make a winner for the game. I eventually decided on a brute force method which was just creating a checker
function with if statements to check the board everytime the player makes a move. If a winning sequence is detected, the game will decide 
a winner and end the game.

Lastly, I had trouble with ending the game. I thought I had to remove the event listeners that allowed the player to mark the board, but I did not know how syntaxically do this with my current object set ups. I eventually decided on just not allowing the players make a move using a boolean value, "isEnded" after the game has ended. 

9/23/22 update:
There was a bug in the game where if the game ended and there were untouched boxes by the players, when reset is pressed those divs in the next game would have the previous game's event listeners. This would cause those untouched divs to produce ONLY O's or X's based on last game's playerTurn when clicked.

I fixed this by adding the divs to the gameBoardArray using Javascript rather than referencing the html divs. Having a reference to those html divs made it hard to delete those event listeners due to how Javascript handles removing event listeners. If you remove an element with an event listener but a reference to that element still exists in your Javascript, that event listener stays in memory. I tried deleting the div nodes then replace them with new ones, only for the new div nodes to gain the same event listeners again.

 By having dynamically made divs in Javascript, I can delete those divs, their references, and their event listeners easily. A super simple solution for a mistake that cost me hours of headache. But I am glad to have learned how Javascript handles event listeners as that is quite a unique experience.