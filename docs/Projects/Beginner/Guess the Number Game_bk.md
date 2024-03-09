---
title: Guess the Number Game V1
tags: [Beginner, Projects]
---

Welcome to the **Guess the Number Game**  project! 

In this project we'll create the **Guess the Number Game**, which challenges players to guess a randomly selected number within a specified range and with a limited number of attempts. It's a fun and engaging way to apply your Python skills that's suitable for beginners and those looking to sharpen their understanding of control flow logic!

## Project Overview: Building the **Guess the Number Game**
As with all projects we undertake in life, we first need to define what we want to accomplish.

This isn't just about listing out everything we want the project to accomplish. It involves outlining the project's goals, its intended functionalitiy, its target audience, and its scope and boundaries. It helps to frame your through processes of all your Python projects in this fashion, so let's go through this exercise!

### Define the Purpose
The Guess the Number Game aims to provide a fun and interactive way for players to practice their problem-solving and critical thinking skills. It challenges players to guess a randomly selected number within a specified range and with a limited number of attempts, encouraging logical reasoning and decision-making based on feedback provided after each guess.

### Outline Core Features and Functionality
* Initialize Game Parameters: Set up the game by defining the start and end ranges of the number to be guessed, and select how many chances we have.
* Random Number Selection: The game will randomly select a number within a user-defined range at the start of each game session.
* Process User Input: Players input their guesses, which are validated to ensure they fall within the specified range.
* Feedback Mechanism: After each guess, the game provides feedback indicating whether the guess was too high, too low, or correct.
* Attempt Tracking: The game tracks the number of attempts a player has made and informs them of how many attempts remain before the game ends.
* Ending the Game: The game concludes by announcing the player's victory if the correct number is guessed within the allowed attempts or reveals the secret number if the player fails to guess correctly.

### Boundaries and Limitations
* The game will only handle integer inputs within the specified range; guesses outside this range or non-integer inputs will prompt an error message asking for a valid input.

* The game is designed for a single player. Multiplayer functionality or competitive features are outside the current scope.

* The scope is limited to a command-line interface; graphical user interface (GUI) elements are not included in this version.

## Transitioning to Code: Structuring the Project's Logic

Now that we've outlined the purpose, core features, and boundaries and limitations of our **Guess the Number Game**, the next step is translating these concepts into a structured plan we can implement into code. This stage is about breaking down our high-level objects into logical components that will form the backbone of our code.

Think about the fundamental loop in this game:
Game asks for player input->Player inputs a valid number->Game evalutes the number against its conditions and determines whether it's a valid number or the correct number->Game returns an appropriate output.

And so on until you either guess the correct number or the game concludes.

So we'll need a way to code in all these loops. Think about how you can establish this loop, then think about how to code each segment.

## Building the **Guess the Number Game**

Now that we've gotten an understanding on the game's features and its logical structure, let's get to building the game!

Try your hand at building the game first.

Here are some helpful tips and suggestions that can help you understand how to build this game:

* Break Problems Down: Approach the game's logic by breaking down the problem into smaller, manageable tasks. Start with input validation, then move on to comparison logic, and finally, focus on feedback mechanisms.

* Iterative Development: Build your game in stages. Start with getting the basic loop working—accepting a guess and providing simple feedback. Then, layer in additional features like input validation, attempt limits, and more nuanced feedback.

Here's our version of this game. Yours may look different; one of the great thing about Python is that there's many ways to achieve the same goal!

## Walkthrough of the **Guess the Number Game**

### Step 1: Initializing the Game
```python
import random

def guess_number_game(start, end, max_attempts):
    secret_number = random.randint(start, end)
    attempts = 0
    print(f"Guess the number between {start} and {end}. You have {max_attempts} attempts.")
```

We begin by importing the random module, which we need to generate the secret number used in the game, and defining the guess_number_game function with parameters for the game's range and maximum number allowed attempts. This lets us call the game with the start and end range and the max_attempts.

### Step 2: The Main Game Loop

```python
while attempts < max_attempts:
    try:
        guess = int(input("Enter your guess: "))
        if not start <= guess <= end:
            print(f"Please guess a number between {start} and {end}.")
            continue
        if guess == secret_number:
            print("Congratulations! You've guessed the right number.")
            return
        print("Your guess is too low." if guess < secret_number else "Your guess is too high.")
        attempts += 1
    except ValueError:
        print("That's an invalid input. Please enter an integer.")
print(f"Sorry, you've run out of attempts. The secret number was {secret_number}.")
```
1. **Starting the Loop**: The while loop initiates by checking if the current number of attempts is less than the maximum allowed (`max_attempts`). This loop continues until the player correctly guesses the number or runs out of attempts. This loop forms the core of the game by repeatedly asking the player for guesses until they either win or run out of attempts.

2. **Input and Validation**: The player is then prompted to enter a guess. This input is checked for two things: it must be an integer, and it must fall within the specified range. If the input doesn't meet these criteria, appropriate feedback is given, and the loop iterates again without penalizing the player with an attempt loss by using `continue` to skip through the rest of the loop's iteration.

3. **Evaluating the Guess and Providing Feedback**: If the guess is valid it's then compared to the `secret_number`. If the guess is correct, the game congralutates the player and ends the game by exiting the loop with `return`. If the guess is incorrect, the game provides feedback to help the player adjust their next guess by telling the player whether their guess is too high or too low compared to the `secret_number` is too high or too low compared to the ``secret_number``

4. **Counting the Attempt**: After providing feedback, the game increments the attempts counter by 1. This keeps track of how many guesses the player has made and ensures the game can ultimately hit the maximum attempt limit.

5. **Handling Non-integer Inputs**: Any input that can't be converted to an integer (like text or symbols) triggers a ValueError. The game catches this error and informs the player, requesting a valid integer input without counting this as an attempt.

6. **Game Conclusion**: If the player does not guess the number within the allowed attempts, the game exits the while loop since `attempts` would now be greater than `max_attempts`. At this point, the final line of code outside the loop executes, informing the player they've run out of attempts and reveals the `secret_number`.

## Conclusion and Future Steps

Congratulations! You've now learned how to build the **Guess the Number Game** in Python. This project showcased essential programming concepts like loops, conditional statements, input validation, and basic error handling. These are all essential to any Python coder's toolkit, so we hope this was helpful to you.

There are, of course, many ways to accomplish the same task. There's no one "correct" write to write this game; the approach varies depending on personal preference, coding style, and specific requirements.

And this game isn't at its final stage either! In fact, there's many things we can to do improve it. Here are some ideas.

* **Repeat Play Option**: After a game concludes, offer the player a chance to play again. This can be achieved by wrapping your game logic within another loop that checks if the player wants to start a new game after the current one ends.

* **Score Tracking**: Implement a scoring system that rewards players based on the number of attempts taken to guess the correct number. Fewer attempts could result in higher scores, encouraging efficiency.

* **Graphical User Interface (GUI)**: While beyond the scope of this introductory project, exploring how to add a GUI to your game using libraries like Tkinter or Pygame could be a great next step. This introduces event-driven programming and the basics of graphical interfaces in Python.

We suggest you play around by attempting to implement these in your own version of the game! This is how you get better at coding after all!

See you in the next Project!

## Full Code

```python
import random

def guess_number_game(start, end, max_attempts):
    secret_number = random.randint(start, end)
    attempts = 0

    print(f"Guess the number between {start} and {end}. You have {max_attempts} attempts.")

    while attempts < max_attempts:
        try:
            guess = int(input("Enter your guess: "))
            if not start <= guess <= end:
                print(f"Please guess a number between {start} and {end}.")
                continue
            if guess == secret_number:
                print("Congratulations! You've guessed the right number.")
                return
            print("Your guess is too low." if guess < secret_number else "Your guess is too high.")
            attempts += 1
        except ValueError:
            print("That's an invalid input. Please enter an integer.")
    
    print(f"Sorry, you've run out of attempts. The secret number was {secret_number}!")
```