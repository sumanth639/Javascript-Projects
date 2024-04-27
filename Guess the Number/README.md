# Guess My Number!

A simple web-based game where the user tries to guess a randomly generated number between 1 and 20.

## How to Play

1. When the game loads, a random number between 1 and 20 is generated.
2. Enter your guess in the input field and click the "Check!" button.
3. The game will let you know if your guess is too high, too low, or correct.
4. If your guess is correct, the game will celebrate with confetti and update your score and high score.
5. If your guess is incorrect, your score will decrease by 1.
6. If your score reaches 0, you lose the game.
7. Click the "Again!" button to start a new game.

## Features

- Random number generation between 1 and 20
- Score tracking
- High score tracking
- Visual feedback (background color changes, number display, confetti on win)
- Responsive design (works on various screen sizes)

## Technologies Used

- HTML
- CSS
- JavaScript

## File Structure

- `index.html`: The main HTML file that structures the game layout.
- `style.css`: The CSS file that styles the game elements.
- `script.js`: The JavaScript file that handles the game logic.
- `confetti.browser.min.js`: A third-party library used to create the confetti animation when the user wins.

## How to Run

Simply open the `index.html` file in a modern web browser to start playing the game.

## Credits

This game was created as part of a JavaScript course by Jonas Schmedtmann. The confetti animation is provided by the [canvas-confetti](https://www.kirilv.com/canvas-confetti/) library.
