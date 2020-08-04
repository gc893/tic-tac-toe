# Tic-Tac-Toe Game

This project consists of creating a 3x3 board whose cells can take the values of _**X**_ or _**O**_.

- The cells change their value when the user clicks on them (they can only click each cell once).

- Once there are 3 cells on a row with the same value, the user playing that value wins.

- The code checks for a winner (or a tie) on each click and updates the message on top of the board accordingly, if there is a winner, confetti is dropped from the top of the screen.

- Finally, there is a counter keeping track of how many times each player has won so that multiple rounds can be played.

- To reset the board in between rounds, there is a **Reset Game** button and to clear the scores, there is a **New Match** button that runs the _reset game_ function and reset the counter variables.