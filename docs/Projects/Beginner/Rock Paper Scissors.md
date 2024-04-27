---
title: Rock Paper Scissors
tags: [Beginner, Projects]
---

Welcome to the **Rock Paper Scissors** project!

In this project, we'll create the **Rock Paper Scissors** game, the classic and beloved game of chance and psychology! In this project we'll use Python to implement a digital version of this game, complete with a scoring system to track victories and losses. 

This project is designed for learners familiar with the basics of Python such as conditional statements, loops, and functions, and will challenge your ability to handle user input, making decisions programmatically, and using Python's standard library with the random module. The goal here is to solidify your understanding of Python fundamentals by applying them in a fun and interactive project.

## Project Overview: Building the **Rock Paper Scissors** Game
Before diving into coding, let's define what we aim to achieve with this project. This exercise helps frame the development process, making it easier to plan and implement the features you want.

### Define the Purpose
The **Rock Paper Scissors** game aims to simulate the traditional hand game in a digital format, where players can engage against a computer opponent. This project is designed to challenge your ability to use conditional statements effectively, handle user input, and generate random outcomes. It provides a practical context to apply these coding skills, allowing you to create an interactive and enjoyable game.

### Outline Core Features and Functionality
* User Choice: Prompt the player to choose between rock, paper, or scissors and check the input is valid before proceeding.
* Computer Choice: Utilize the random module to have the computer randomly select its move.
* Determine Winner: Implement logic to compare the player's choice against the computer's, deciding the outcome of each round based on the rules of Rock Paper Scissors.
* Scoring System: Track and display the scores of both the player and the computer, updating them based on the outcomes of the rounds played.
* Game Loop: Allow the game to continue until the player decides to exit.

## Boundaries and Limitations
* The game will be played in a text-based interface, without graphical elements.
* It will accept only 'rock', 'paper', 'scissors', or 'exit' as valid inputs, with any other input prompting the user to try again.

## Transitioning to Code: Structuring the Project's Logic
Now that we defined the purpose, core features of our **Rock Paper Scissors** game, it's time to start thinking about how to translate these ideas into code. This step is crucial for laying out the foundational structure of the game and ensuring a smooth development process.

### High-Level Logic
* Initialize Game State: Set up variables to track scores (user_score, computer_score) and define the symbols (rock, paper, scissors) along with their corresponding emoji representations for a user-friendly display.
* Game Loop: Create a loop that continues to run the game until the user decides to exit. This loop will handle the core game functionality, including prompting for user input, generating the computer's choice, and determining the outcome of each round.
* Handling User Input: Prompt the user to enter their choice (rock, paper, scissors, or exit). Validate the input to ensure it's one of the acceptable options. If not, prompt the user again without proceeding to the next steps.
* Computer's Choice: Use the random module to select the computer's choice randomly from the available options.
* Determine the Winner: Compare the user's choice against the computer's choice according to the rules of Rock Paper Scissors and update the score accordingly.
* Display Round Results: Show the choices made by both the player and the computer, announce the winner of the round, and display the current score.
* Repeat or Exit: After displaying the round results, check if the user wants to play another round or exit the game. If the user decides to exit, display the final score and give a closing message.

## Building the Rock Paper Scissors Game
Now that we've outlined the logic and structure of our game, let's start building it. Remember, the best way to improve your programming skills is by practicing and experimenting with the code.

Before diving into our step-by-step walkthrough, we encourage you to try implementing the game based on the provided high-level logic. This approach allows you to tackle the problem with your own solutions, giving you a deeper understanding of the programming concepts used in this project.

Here are some helpful tips and suggestions:

* Incremental Development: Start by getting the basic input and comparison logic working. Then, gradually add complexity, such as score tracking and input validation.
* Testing and Debugging: Test your game frequently as you add new features, checking for and fixing any bugs that arise. This iterative process helps ensure that your game functions correctly.
* Use Functions: Consider organizing your code into functions to make it more readable and maintainable. For example, you could create separate functions for getting the user's choice, generating the computer's choice, and determining the winner.

## Walkthrough of the **Rock Paper Scissors** Game

### Step 1: Initializing the Game
Let's begin by setting up our game environment by initializing the necessary variables and defining the choices available to the players.

```python
import random

symbols = {
    'rock': '🗿',
    'paper': '📄',
    'scissors': '✂️'
}

user_score = 0
computer_score = 0
```

We begin by importing the random module, which we'll use to generate the computer's random choice. We then define a dictionary named `symbols` to store the game's possible choices and their corresponding emoji symbols, making the game output more engaging and interesting than simply printing out their text equivalents.

We also initialize two variables, `user_score` and `computer_score`, so that we can track their respective scores.

### Step 2: The Main Game Loop
The core of the game resides in a loop that continuously prompts the player for their choice, generates the computer's choice, determines the winner, and updates the scores until the player decides to exit.

```python
while True:
    user_choice = input("Choose rock, paper, or scissors (or 'exit' to quit): ").lower()
    if user_choice == 'exit':
        break
    if user_choice not in symbols:
        print("Invalid choice. Please choose again.")
        continue

    computer_choice = random.choice(list(symbols.keys()))
    print(f"Your choice: {symbols[user_choice]} vs Computer's choice: {symbols[computer_choice]}")
```

Upon entering the while loop, the game executes several key steps:

1. Validing Player Input:
    * The input() function captures the player's choice, converting it to lowercase to ensure consistency with our symbols dictionary keys. This step is the primary interaction point with the player, giving them the option to choose 'rock', 'paper', 'scissor', or 'exit' to quit the game.

    * Typing in 'exit' triggers the first if statement, which has the while loop encounter the `break` statement and exit the loop (and thus the game) immediately, ending the script. This option provides the player with a straightforward way to quit the game at any time.

    * Any user input that doesn't match any of the four choices above triggers the second if statement, which prints an error message instructing the player to make a valid choice. It then uses `continue` to restart the loop, sending it back to the start. This ensures the game only proceeds with valid inputs, maintaining its integrity.

2. Generating the Computer's Choice:
    * The game uses the random.choice() function to select a random key from the symbols dictionary, representing the computer's move.


3. Displaying Choices:
    * Finally, the game displays both the player's and computer's choices using the corresponding emoji symbols from the symbols dictionary. This visual representation makes the game more engaging and user-friendly, and clearly illustrates the current round's choices.


### Step 3: Define the determine_winner Function

After both choices are made, we'll need to compare thee choices according to the rules of Rock Paper Scissors. We created the determine_winner function to do just that.

```python
def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return 'tie'
    elif (user_choice == 'rock' and computer_choice == 'scissors') or \
         (user_choice == 'scissors' and computer_choice == 'paper') or \
         (user_choice == 'paper' and computer_choice == 'rock'):
        return 'user'
    else:
        return 'computer'
```
1. Check for a Tie:
The first condition checks if the user_choice and computer_choice are the same. If they are, the function returns 'tie', indicating that the round has ended in a draw. This comparison ensures that when both participants make the same choice, neither is unfairly advantaged.
Determine the Winning Conditions:

2. The function then evaluates the combinations of choices that would result in a win for the user:
    * If the user picks 'rock' and the computer picks 'scissors', the user wins, since rock crushes scissors.
    * If the user picks 'scissors' and the computer picks 'paper', the user wins, as scissors cut paper.
    * If the user picks 'paper' and the computer picks 'rock', the user wins, because paper covers rock.

    These conditions are encapsulated in a single elif statement using logical OR (or) operators. If any of these conditions are true, the function returns `user`, signifying that the player has won the round.

3. Default to Computer Win:
If neither the tie condition nor the user win conditions are met, the function defaults to returning 'computer'. This means that any other combination of choices not covered by the first two conditions results in a win for the computer. This catch-all else clause simplifies the logic by eliminating the need to explicitly list the computer's winning conditions.

###  Step 4: Determining the Winner
We can now use our determine_winner function to see who wins the round:

```python
winner = determine_winner(user_choice, computer_choice)
if winner == 'tie':
    print("It's a tie!")
elif winner == 'user':
    print("You win!")
    user_score += 1
else:
    print("Computer wins!")
    computer_score += 1

print(f"Score - You: {user_score}, Computer: {computer_score}\n")
```
1. Evaluating the Outcome:
    * Tie: `determine_winner` returns `tie` if both players made the same choice, and no one gets a point.
    * Player Wins: `determine_winner` returns `user` if the player won the round, and `user_score` is incremented by 1 to celebrate the player's victory.
    * Computer Wins: `determine_winner` returns `computer` if the computer won the round, and `computer_score` is incremented by 1 to celebrate the computer's victory.

2. Displaying the Score: 
After evaluating the round's outcome, the game prints the current score, providing both the player and the computer's totals.

## Conclusion and Future Steps


Congratulations! You've successfully built the **Rock Paper Scissors** game in Python. Through this project, you've applied and honed essential programming concepts such as loops, conditional statements, user input handling, and using modules. This practical application reinforces your understanding of Python in a fun and engaging way.

The journey of learning and mastering Python doesn't end here. The versatility and simplicity of Python make it an excellent language for exploring a wide range of projects, from simple games like this to complex machine learning algorithms. Every project you undertake enhances your problem-solving skills and deepens your knowledge of programming principles. So keep at them!

While our **Rock Paper Scissors** game is fully functional, there's always room for improvement and new features. Here are some suggestions for extending your project and challenging yourself further:

* Best of N Rounds: Introduce an option at the beginning of the game to play a "best of N rounds" match, where N can be any odd number chosen by the player. This adds a strategic layer to the game, as players must think ahead about their choices over multiple rounds.

* Advanced AI Opponent: Enhance the computer's choice mechanism to make it more sophisticated. Instead of randomly selecting its move, the computer could use a simple algorithm to predict the player's next move based on their previous choices, making the game more challenging.

* Graphical User Interface (GUI): Take your game to the next level by adding a GUI using libraries such as Tkinter or Pygame. This will not only make the game more visually appealing but also introduce you to event-driven programming and the basics of creating graphical applications in Python.

* Multiplayer Mode: Implement a multiplayer mode that allows two players to play against each other from the same computer or over the network. This feature would involve handling player sessions and synchronizing game states between clients.

* Leaderboard System: Create a simple leaderboard that tracks high scores or win rates. This could be as simple as storing scores in a text file or as complex as using a database to keep records of multiple players over time.

Remember, the path to becoming proficient in programming is paved with projects like these. Each project presents its unique challenges and learning opportunities, pushing you to apply your knowledge in new and creative ways.

By continuing to build projects, experiment with new technologies, and push the boundaries of what you currently know, you'll find yourself becoming more confident and skilled as a programmer. Keep exploring, keep learning, and most importantly, keep enjoying the process.

See you in the next project!

## Full Code
```python
import random

symbols = {
    'rock': '🗿',
    'paper': '📄',
    'scissors': '✂️'
}

def get_computer_choice():
    return random.choice(list(symbols.keys()))

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return 'tie'
    elif (user_choice == 'rock' and computer_choice == 'scissors') or \
         (user_choice == 'scissors' and computer_choice == 'paper') or \
         (user_choice == 'paper' and computer_choice == 'rock'):
        return 'user'
    else:
        return 'computer'

def rock_paper_scissors():
    user_score = 0
    computer_score = 0

    while True:
        user_choice = input("Choose rock, paper, or scissors (or 'exit' to quit): ").lower()
        if user_choice == 'exit':
            break
        if user_choice not in symbols:
            print("Invalid choice. Please choose again.")
            continue

        computer_choice = get_computer_choice()
        print(f"Your choice: {symbols[user_choice]} vs Computer's choice: {symbols[computer_choice]}")
        winner = determine_winner(user_choice, computer_choice)

        if winner == 'tie':
            print("It's a tie!")
        elif winner == 'user':
            print("You win!")
            user_score += 1
        else:
            print("Computer wins!")
            computer_score += 1

        print(f"Score - You: {user_score}, Computer: {computer_score}\n")

    print("Game over. Thanks for playing!")
    print(f"Final Score - You: {user_score}, Computer: {computer_score}")
```