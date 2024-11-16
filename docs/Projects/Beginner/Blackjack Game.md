---
title: "Blackjack Game"
tags: [Beginner, Projects]
description: "Create a text-based Blackjack game in Python. This advanced beginner-level project teaches you how to implement game logic, handle user input, manage game state, and work with randomization to simulate card dealing."
keywords: [Python game, Blackjack, card game, random number generation, game logic, user input, console application, Python project]
---

Welcome to the **Blackjack Game** project!

In this project, we'll create a text-based version of the classic casino game, Blackjack. This project is designed for advanced beginners and will challenge your understanding of functions, data structures, game logic implementation, and user interaction in a console environment. By completing this project, you'll gain hands-on experience with creating a fully functional game, including managing game state, implementing complex rule sets, and handling player decisions.

## Project Overview: Building the Blackjack Game

Let's begin by outlining our project's goals, features, and scope. This approach helps us clearly define what our Blackjack game will do and how we'll implement it.

### Define the Purpose
The Blackjack game aims to provide an interactive, text-based simulation of the popular casino card game. This project addresses the challenge of translating a complex set of game rules into a programmatic structure, while also managing user interactions and game state. By working through this project, users will apply coding skills in a practical context, creating an engaging game that demonstrates proficiency in Python programming concepts.

### Outline Core Features and Functionality
* Deck Creation and Shuffling: Implement a function to create and shuffle a standard 52-card deck.
* Card Value Calculation: Create a system to calculate the value of cards and hands, accounting for the special rules of Ace cards.
* Player and Dealer Logic: Implement the game logic for both the player's turns and the dealer's automatic play.
* Betting System: Include a simple betting system where players can wager and win tokens.
* Game Flow Control: Manage the overall flow of the game, including dealing cards, player decisions, and determining winners.
* User Interface: Provide a text-based interface for players to interact with the game, make decisions, and see the game state.
* Multiple Round Support: Allow players to play multiple rounds until they choose to quit or run out of tokens.

### Boundaries and Limitations
* The game is text-based and runs in a command-line environment, without a graphical user interface (GUI).
* It simulates a simplified version of Blackjack, focusing on core rules without advanced options like splitting or insurance.

## Transitioning to Code: Structuring the Project's Logic

Now that we've outlined the purpose and core features of our Blackjack game, let's break down the high-level concepts into a structured plan we can implement in Python. This stage is crucial for translating our project goals into logical components that will form the backbone of our code.

### Key Components and Implementation Logic

1. **Deck Creation and Management**:
   - We'll implement a `create_deck()` function to generate a standard 52-card deck.
   - Each card will be represented as a dictionary with 'suit' and 'rank' keys.
   - The deck will be shuffled using Python's `random.shuffle()` function to ensure randomness in card dealing.

2. **Card and Hand Value Calculation**:
   - A `card_value()` function will determine the value of individual cards, handling face cards and Aces.
   - The `hand_value()` function will calculate the total value of a hand, accounting for the flexible value of Aces (1 or 11). In Blackjack, Aces can be worth either 1 or 11 points, whichever is more advantageous for the hand without exceeding 21. For example, an Ace with a 6 would be counted as 11+6=17, but an Ace with a 6 and a 5 would count the Ace as 1, resulting in 1+6+5=12.

3. **Game Round Logic**:
   - The `play_round()` function will encapsulate the logic for a single round of Blackjack, including:
     - Betting system
     - Initial card dealing
     - Player's turn (hit or stand decisions)
     - Dealer's turn
     - Determining the round outcome

4. **Player Interaction and Decision Making**:
   - We'll use the `input()` function to get player decisions (e.g., hit/stand, bet amount).
   - The game will provide feedback after each action, showing the current hand and its value.

5. **Dealer AI**:
   - The dealer's play will be automated based on standard Blackjack rules (hit on 16 or below, stand on 17 or above).

6. **Game State Management**:
   - We'll keep track of the player's tokens throughout multiple rounds.
   - The game will end when the player runs out of tokens or chooses to quit.

7. **Main Game Loop**:
   - The `play_blackjack()` function will serve as the main game loop, initializing the game and managing multiple rounds.

8. **Display and User Interface**:
   - We'll use print statements to display game information, hand values, and results.
   - The `show_hand()` function will format the display of cards in a hand.

By structuring our project into these logical components, we create a clear roadmap for implementation. This modular approach allows us to focus on one aspect at a time, making the coding process more manageable and organized. Each function will have a specific responsibility, promoting code reusability and easier debugging.

## Walkthrough of the Blackjack Game

Now that we have a clear understanding of the Blackjack game's components and logic, let's dive into the implementation. We'll go through each part of the code, explaining its purpose and functionality.

### Step 1: Importing Necessary Modules and Creating the Deck

We start by importing the `random` module, which we'll use for shuffling the deck. The `create_deck()` function generates a standard 52-card deck:

```python
import random

def create_deck():
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    deck = [{"suit": suit, "rank": rank} for suit in suits for rank in ranks]
    random.shuffle(deck)
    return deck
```

- We define lists of suits and ranks.
- Using a list comprehension, we create a deck where each card is a dictionary with 'suit' and 'rank' keys.
- The deck is then shuffled using `random.shuffle()` to ensure randomness in card dealing.

### Step 2: Calculating Card and Hand Values

```python
def card_value(card):
    rank = card["rank"]
    if rank in ["J", "Q", "K"]:
        return 10
    elif rank == "A":
        return 11
    else:
        return int(rank)

def hand_value(hand):
    value = sum(card_value(card) for card in hand)
    ace_count = sum(1 for card in hand if card["rank"] == "A")
    while value > 21 and ace_count:
        value -= 10  # Change ace from 11 to 1
        ace_count -= 1
    return value
```

These functions handle the value calculation for cards and hands:

- `card_value()` determines the value of a single card.
- `hand_value()` calculates the total value of a hand by using a list comprehension to sum card values.
- It also handles the special case of Aces, which can be worth 1 or 11, depending on the value of your hand.

### Step 3: Displaying Hands

This function formats the display of a hand, creating a string representation of the cards.

```python
def show_hand(hand):
    return ", ".join(f"{card['rank']} of {card['suit']}" for card in hand)
```

### Step 4: Implementing a Single Round of Blackjack

The `play_round()` function encapsulates the logic for a single round of Blackjack. It handles:

1. Betting
2. Initial card dealing
3. Player's turn (hit or stand decisions)
4. Dealer's turn
5. Determining the round outcome and updating tokens

This function uses the previously defined helper functions and implements the core game logic. Let's break it down segment by segment:

1. **Initial Check and Setup**:
```python
def play_round(player_tokens):
    if player_tokens <= 0:
        print("You are out of tokens! Game over.")
        return player_tokens, False

    # Initial Setup
    deck = create_deck()
    player_hand = []
    dealer_hand = []
```

* The function first checks if the player has any tokens left. If not, it ends the game.
* A new shuffled deck is created using the create_deck() function.
* Empty lists are initialized for the player's and dealer's hands.

2. **Betting**:
```python
    bet_amount = int(input(f"You have {player_tokens} tokens. How many tokens would you like to bet? "))
    if bet_amount > player_tokens or bet_amount <= 0:
        print("Invalid bet amount.")
        return player_tokens, True
    player_tokens -= bet_amount
```

* The player is prompted to place a bet.
* The bet is validated to ensure it's within the available tokens and greater than zero.
* If valid, the bet is deducted from the player's tokens.

3. **Initial Deal**:
```python
    player_hand.append(deck.pop())
    player_hand.append(deck.pop())
    dealer_hand.append(deck.pop())
    dealer_hand.append(deck.pop())
```

* Two cards are dealt to both the player and the dealer using deck.pop().
* This simulates the initial deal in Blackjack where each player starts with two cards.

4. **Player's Turn**:
```python
    while True:
        print(f"Your hand: {show_hand(player_hand)} (Value: {hand_value(player_hand)})")
        if hand_value(player_hand) > 21:
            print("You busted!")
            return player_tokens, True
        action = input("Would you like to hit or stand? (h/s): ").lower()
        if action == 'h':
            player_hand.append(deck.pop())
        elif action == 's':
            break
        else:
            print("Invalid input, please enter 'h' or 's'.")
```

* This loop handles the player's turn.
* It displays the player's current hand and its value.
* If the hand value exceeds 21, the player busts, and the round ends.
* The player is prompted to hit (take another card) or stand (end their turn).
* This continues until the player stands or busts.

5. **Dealer's Turn**:
```python
    print(f"Dealer's hand: {show_hand(dealer_hand)} (Value: {hand_value(dealer_hand)})")
    while hand_value(dealer_hand) < 17:
        dealer_hand.append(deck.pop())
        print(f"Dealer hits: {show_hand(dealer_hand)} (Value: {hand_value(dealer_hand)})")
```
* The dealer's hand is revealed.
* The dealer hits (takes cards) until their hand value is 17 or higher, following standard Blackjack rules.
* Each hit is displayed to the player.

6. **Determining the Outcome**:
```python
    player_value = hand_value(player_hand)
    dealer_value = hand_value(dealer_hand)
    if dealer_value > 21 or player_value > dealer_value:
        print("You win this round!")
        player_tokens += bet_amount * 2
    elif player_value < dealer_value:
        print("Dealer wins this round.")
    else:
        print("It's a push. You get your bet back.")
        player_tokens += bet_amount

    return player_tokens, True
```
* The final hand values for both player and dealer are calculated.
* The winner is determined based on the rules of Blackjack.
* Tokens are awarded or deducted based on the outcome.
* The function returns the updated token count and a boolean indicating whether the game should continue.

This function effectively simulates a round of Blackjack, handling all aspects from betting to determining the winner.

### Step 5: Main Game Loop
```python

def play_blackjack():
    print("Welcome to Blackjack!")
    print("In this game, you start with 10 tokens. You can place a bet each round and try to win more tokens. If you run out of tokens, the game is over. Good luck!")
    player_tokens = 10
    while True:
        player_tokens, continue_playing = play_round(player_tokens)
        if not continue_playing:
            break
        another_round = input("Would you like to play another round? (y/n): ").lower()
        if another_round != 'y':
            break
    print(f"You leave with {player_tokens} tokens. Thanks for playing!")
```

The `play_blackjack()` function serves as the main game loop:

- It initializes the game with a welcome message and starting tokens.
- It repeatedly calls `play_round()` until the player runs out of tokens or chooses to quit.
- After each round, it checks if the player wants to continue.
- Finally, it displays the player's ending token count.

This modular structure allows for easy understanding and potential expansion of the game. Each function has a specific responsibility, promoting code reusability and easier debugging, and allows us to modify the code without affecting the entire program.

## Conclusion and Future Steps

Congratulations! You've successfully built a functional **Blackjack** game using Python. This project has introduced you to several important programming concepts and techniques, including:

- Implementing complex game logic and rules
- Managing game state across multiple rounds
- Handling user input and providing interactive feedback
- Working with randomization for card shuffling and dealing
- Using functions to create modular, reusable code
- Implementing a simple betting system

By completing this project, you've not only created an entertaining game but also gained practical experience in structuring larger programs and managing more complex logic flows.

Remember, the journey of learning and mastering Python doesn't end here. The ``Blackjack`` game you've built is a solid foundation, but there's always room for improvement and expansion. Here are some ideas for taking your ``Blackjack`` game to the next level:

* Graphical User Interface: Transform the text-based game into a graphical application using libraries like Pygame or Tkinter. This would make the game more visually appealing and potentially more user-friendly.

* Advanced Blackjack Rules: Implement more complex Blackjack rules such as splitting pairs, doubling down, or offering insurance when the dealer shows an Ace.

* Multiple Players: Expand the game to allow multiple players to compete against the dealer simultaneously.

* Save and Load: Implement functionality to save a player's progress (e.g., token count) and load it in future sessions.

* AI Players: Create computer-controlled players with different playing styles or skill levels.

* Animation and Sound: If you implement a GUI, adding simple animations for card dealing and sound effects could greatly enhance the user experience.

* Persistent Leaderboard: Keep track of high scores or largest token wins across multiple game sessions.

These enhancements would not only make your ``Blackjack`` game more feature-rich but also provide opportunities to explore new Python concepts and libraries. For instance, implementing a GUI would introduce you to event-driven programming, while adding AI players could involve basic artificial intelligence concepts.

Remember, the key to improving as a programmer is to keep challenging yourself with new projects and continuously expanding your skills. Each new feature you add or improvement you make is a step forward in your programming journey.

We encourage you to experiment with these ideas, or come up with your own unique features. Don't be afraid to explore, make mistakes, and learn from them. That's how you'll grow as a Python developer.

Keep coding, keep learning, and most importantly, have fun with it! We look forward to seeing how you'll expand upon this project and what amazing things you'll create next.

See you in the next project!

## Full Code
```python
import random

def create_deck():
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    deck = [{"suit": suit, "rank": rank} for suit in suits for rank in ranks]
    random.shuffle(deck)
    return deck

def card_value(card):
    rank = card["rank"]
    if rank in ["J", "Q", "K"]:
        return 10
    elif rank == "A":
        return 11
    else:
        return int(rank)

def hand_value(hand):
    value = sum(card_value(card) for card in hand)
    ace_count = sum(1 for card in hand if card["rank"] == "A")
    while value > 21 and ace_count:
        value -= 10  # Change ace from 11 to 1
        ace_count -= 1
    return value

def show_hand(hand):
    return ", ".join(f"{card['rank']} of {card['suit']}" for card in hand)

def play_round(player_tokens):
    if player_tokens <= 0:
        print("You are out of tokens! Game over.")
        return player_tokens, False

    # Initial Setup
    deck = create_deck()
    player_hand = []
    dealer_hand = []

    bet_amount = int(input(f"You have {player_tokens} tokens. How many tokens would you like to bet? "))
    if bet_amount > player_tokens or bet_amount <= 0:
        print("Invalid bet amount.")
        return player_tokens, True
    player_tokens -= bet_amount

    # Deal initial cards
    player_hand.append(deck.pop())
    player_hand.append(deck.pop())
    dealer_hand.append(deck.pop())
    dealer_hand.append(deck.pop())

    # Player's turn
    while True:
        print(f"Your hand: {show_hand(player_hand)} (Value: {hand_value(player_hand)})")
        if hand_value(player_hand) > 21:
            print("You busted!")
            return player_tokens, True
        action = input("Would you like to hit or stand? (h/s): ").lower()
        if action == 'h':
            player_hand.append(deck.pop())
        elif action == 's':
            break
        else:
            print("Invalid input, please enter 'h' or 's'.")

    # Dealer's turn
    print(f"Dealer's hand: {show_hand(dealer_hand)} (Value: {hand_value(dealer_hand)})")
    while hand_value(dealer_hand) < 17:
        dealer_hand.append(deck.pop())
        print(f"Dealer hits: {show_hand(dealer_hand)} (Value: {hand_value(dealer_hand)})")

    # Determine outcome
    player_value = hand_value(player_hand)
    dealer_value = hand_value(dealer_hand)
    if dealer_value > 21 or player_value > dealer_value:
        print("You win this round!")
        player_tokens += bet_amount * 2
    elif player_value < dealer_value:
        print("Dealer wins this round.")
    else:
        print("It's a push. You get your bet back.")
        player_tokens += bet_amount

    return player_tokens, True

def play_blackjack():
    print("Welcome to Blackjack!")
    print("In this game, you start with 10 tokens. You can place a bet each round and try to win more tokens. If you run out of tokens, the game is over. Good luck!")
    player_tokens = 10
    while True:
        player_tokens, continue_playing = play_round(player_tokens)
        if not continue_playing:
            break
        another_round = input("Would you like to play another round? (y/n): ").lower()
        if another_round != 'y':
            break
    print(f"You leave with {player_tokens} tokens. Thanks for playing!")
```