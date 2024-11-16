---
title: "Object-Oriented Blackjack Game"
tags: [Intermediate, Projects, Object-Oriented Programming]
description: "Create an object-oriented version of the Blackjack game using Python. This project demonstrates how to structure a game using classes, enhancing code organization and reusability."
keywords: [Python game, Blackjack, object-oriented programming, classes, card game, game logic, console application, Python project]
---

Welcome to the **Object-Oriented Blackjack Game** project!

In this project, we'll create a class-based version of the Blackjack game, building upon our previous function-based implementation. This project is designed for intermediate Python learners who want to explore object-oriented programming (OOP) principles. By refactoring our Blackjack game into a class-based structure, you'll gain hands-on experience with OOP concepts such as encapsulation, abstraction, and code organization.

## Project Overview: Building the Object-Oriented Blackjack Game

Let's outline the goals, features, and scope of our object-oriented Blackjack game, highlighting the differences from the function-based version.

### Define the Purpose
The Object-Oriented Blackjack game aims to provide the same gameplay experience as our previous function-based version, but with a focus on improved code structure and organization through the use of classes. This project demonstrates how to translate a functional program into an object-oriented one, showcasing the benefits of OOP in program development.

### Outline Core Features and Functionality
* Class-based Structure: Implement the game using classes for cards, deck, players, and the game itself.
* Encapsulation: Use class methods to encapsulate behavior and data, improving code organization.
* Inheritance: Demonstrate inheritance by using a common Player class for both the human player and the dealer.
* Code Reusability: Showcase how OOP principles lead to more reusable and maintainable code.
* Gameplay Features: Retain all gameplay features from the function-based version, including betting, multiple rounds, and game rules.

### Boundaries and Limitations
* The game remains text-based and runs in a console environment.
* It maintains the same simplified Blackjack rules as the function-based version.
* The project assumes familiarity with basic Python syntax and introduces object-oriented programming concepts.

This object-oriented approach to the Blackjack game demonstrates how OOP can lead to more organized, maintainable, and extensible code. In the following sections, we'll explore the implementation details and discuss the benefits of this approach.

## Transitioning to Code: Structuring the Project's Logic

Now that we've outlined the purpose and core features of our object-oriented Blackjack game, let's break down how we'll structure our code using classes. This stage is crucial for understanding how object-oriented programming can improve our code organization and maintainability.

### Key Components and Implementation Logic

1. **Card Class**:
   - Represents individual playing cards with suit and rank attributes.
   - Includes methods for:
     - String representation of cards (`__str__`)
     - Value calculation for game scoring
   - This replaces our previous dictionary-based card representation, providing a more robust and encapsulated way to handle card data.

2. **Deck Class**:
   - Manages the collection of cards used in the game.
   - Responsibilities include:
     - Creating a standard 52-card deck using Card objects
     - Shuffling cards using the random module
     - Dealing cards through the `deal_card` method
   - This consolidates all deck-related operations that were previously scattered across different functions.

3. **Player Class**:
   - Serves as a base class for both the human player and dealer.
   - Manages:
     - Player's hand (list of Card objects)
     - Token balance for betting
     - Hand evaluation logic (calculating total value, handling Aces)
     - Methods for displaying hands and managing bets
   - Benefits of this approach:
     - Code reuse between player and dealer
     - Encapsulated player state and behavior
     - Easy to extend with new player-specific features

4. **BlackjackGame Class**:
   - Controls the main game flow and rules.
   - Responsibilities include:
     - Managing the deck, player, and dealer objects
     - Handling game rounds and betting
     - Determining game outcomes
   - This replaces our previous `play_round` function with a more organized structure.

5. **Main Game Flow**:
   - The `play_blackjack` function now primarily:
     - Creates a BlackjackGame instance
     - Manages the high-level game loop
     - Handles player decisions to continue or quit

### Benefits of the Class-Based Structure

The transition from a function-based to a class-based implementation represents more than just a change in code structure - it reflects a fundamental shift in how we model the game of Blackjack itself. Let's explore the key benefits of this approach:

1. **Improved Organization**:
  - Each class has a clear, single responsibility
  - Related data and methods are grouped together
  - Easier to understand and maintain code

In our Blackjack game, this organization is evident in how each class handles a specific aspect of the game. The Card class manages only card-related properties and behaviors, the Deck class handles only deck operations, and the Player class focuses solely on player actions and state. This clear separation makes it immediately obvious where to find specific functionality, and where to make changes when needed.

2. **Enhanced Modularity**:
  - Classes can be modified independently
  - New features can be added without affecting other components
  - Code is more reusable across different projects

Our implementation demonstrates this modularity through its independent classes. We can modify how the Card class calculates values without touching the Deck class, change the Player class's betting system without affecting card handling, or update the BlackjackGame class's rules without modifying player behavior. This independence makes it safer and easier to add new features or modify existing ones.

3. **Better State Management**:
  - Game state is properly encapsulated within objects
  - Reduced risk of global state issues
  - Clearer data flow between components

The game's state management is clearly demonstrated in our class structure. Each Player object maintains its own hand and token count, the Deck object manages its collection of cards, and the BlackjackGame class coordinates the overall game state. This encapsulation ensures that state changes happen in controlled, predictable ways, making it easier to track and modify game conditions.

4. **Easier Testing and Debugging**:
  - Classes can be tested in isolation
  - Bugs are more likely to be localized to specific classes
  - Easier to add new test cases

Our class structure makes testing and debugging straightforward. We can test the Card class's value calculation independently, verify the Deck class's shuffling and dealing operations in isolation, and check the Player class's betting system without involving other components. If a bug appears in hand value calculation, we know to look at the Player class; if there's an issue with card dealing, we can focus on the Deck class.

This object-oriented approach not only improves code organization and maintenance but also provides clear paths for future enhancements:
- Want to add new card types? Extend the Card class
- Need different player strategies? Create new Player subclasses
- Want to modify deck behavior? Update the Deck class

By structuring our project this way, each component has a clear responsibility, and the relationships between components are well-defined. This makes it easier to understand, modify, and extend the game's functionality.

## Walkthrough of the Object-Oriented Blackjack Game

Now that we have a clear understanding of our game's structure, let's dive into the implementation. We'll go through each class and its components, explaining their purpose and functionality.

### Step 1: Creating the Card Class

```python
class Card:
   def __init__(self, suit, rank):
       self.suit = suit
       self.rank = rank

   def __str__(self):
       return f"{self.rank} of {self.suit}"

   def value(self):
       if self.rank in ["J", "Q", "K"]:
           return 10
       elif self.rank == "A":
           return 11  # Ace initially counts as 11, handled in hand evaluation
       else:
           return int(self.rank)
```

The Card class represents a single playing card:

* The constructor (__init__) takes a suit and rank to create a new card.
* __str__ provides a string representation (e.g., "Ace of Hearts").
* The value() method calculates the card's numerical value for scoring:
    * Face cards (J, Q, K) are worth 10
    * Aces initially count as 11 (this can be adjusted to 1 when evaluating hands)
    * Number cards use their numeric value

### Step 2: Implementing the Deck Class

```python
class Deck:
    def __init__(self):
        self.cards = [Card(suit, rank) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                      for rank in ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]]
        random.shuffle(self.cards)

    def deal_card(self):
        return self.cards.pop() if self.cards else None
```

The Deck class manages the collection of cards:

* The constructor creates a full deck of 52 cards using a list comprehension and automatically shuffles the deck upon creation.
* ``deal_card()`` removes and returns the top card from the deck, allowing you to deal cards out to players.
* The class returns None if the deck is empty, providing a safe way to handle deck depletion.

### Step 3: Building the Player Class

```python
class Player:
    def __init__(self, name):
        self.name = name
        self.hand = []
        self.tokens = 10

    def add_card(self, card):
        self.hand.append(card)

    def hand_value(self):
        value = sum(card.value() for card in self.hand)
        ace_count = sum(1 for card in self.hand if card.rank == "A")
        while value > 21 and ace_count:
            value -= 10  # Change ace from 11 to 1
            ace_count -= 1
        return value

    def show_hand(self):
        return ", ".join(str(card) for card in self.hand)

    def bet(self, amount):
        if amount <= self.tokens:
            self.tokens -= amount
            return True
        return False

    def win_tokens(self, amount):
        self.tokens += amount
```

The Player class handles all player-related functionality:

* The constructor initializes a player with a name, empty hand, and starting tokens.
* ``add_card()`` adds a card to the player's hand.
* ``hand_value()`` calculates the total value of the hand by summing up all the card values. It also handles the special case of Aces (which can be 1 or 11) by automatically adjusting its value to prevent busting.
* ``show_hand()`` creates a string representation of the player's cards.
* ``bet()`` and ``win_tokens()`` manage the player's token balance, letting the player bet and win tokens.

### Step 4: Creating the BlackjackGame Class

```python
class BlackjackGame:
    def __init__(self):
        self.deck = Deck()
        self.player = Player("Player")
        self.dealer = Player("Dealer")
```

The BlackjackGame class manages the game flow:

* The constructor initializes:
    * A new deck of cards
    * A player object
    * A dealer object

```python
    def play_round(self):
        if self.player.tokens <= 0:
            print("You are out of tokens! Game over.")
            return False

        # Reset hands and create new deck
        self.player.hand = []
        self.dealer.hand = []
        self.deck = Deck()

        # Handle betting
        bet_amount = int(input(f"You have {self.player.tokens} tokens. How many tokens would you like to bet? "))
        if not self.player.bet(bet_amount):
            print("Invalid bet amount.")
            return True

        # Initial deal
        for _ in range(2):
            self.player.add_card(self.deck.deal_card())
            self.dealer.add_card(self.deck.deal_card())
```
The play_round() method manages a single round of Blackjack:

* Checks if the player has tokens
* Resets hands and creates a new deck
* Handles the betting process
* Deals initial cards to player and dealer

```python
# Player's turn
        while True:
            print(f"Your hand: {self.player.show_hand()} (Value: {self.player.hand_value()})")
            if self.player.hand_value() > 21:
                print("You busted!")
                return True
            action = input("Would you like to hit or stand? (h/s): ").lower()
            if action == 'h':
                self.player.add_card(self.deck.deal_card())
            elif action == 's':
                break
            else:
                print("Invalid input, please enter 'h' or 's'.")

        # Dealer's turn and outcome determination
        print(f"Dealer's hand: {self.dealer.show_hand()} (Value: {self.dealer.hand_value()})")
        while self.dealer.hand_value() < 17:
            self.dealer.add_card(self.deck.deal_card())
            print(f"Dealer hits: {self.dealer.show_hand()} (Value: {self.dealer.hand_value()})")
```
The round continues with:

* Player's turn: hit or stand decisions
* Dealer's turn: automatic play based on standard rules
* Outcome determination and token distribution

### Step 5: Main Game Loop

```python
def play_blackjack():
    print("Welcome to Blackjack!")
    print("In this game, you start with 10 tokens. You can place a bet each round and try to win more tokens. If you run out of tokens, the game is over. Good luck!")
    game = BlackjackGame()
    while True:
        continue_playing = game.play_round()
        if not continue_playing:
            break
        another_round = input("Would you like to play another round? (y/n): ").lower()
        if another_round != 'y':
            break
    print(f"You leave with {game.player.tokens} tokens. Thanks for playing!")
```

The main game loop:

* Creates a new BlackjackGame instance
* Manages multiple rounds of play
* Handles the player's decision to continue or quit
* Displays final results when the game ends

## Conclusion and Future Steps

Congratulations! You've successfully built an object-oriented **Blackjack** game using Python. This project has demonstrated several key programming concepts and best practices:

- Object-oriented programming principles and class design
- Encapsulation of data and behavior
- Code organization and modularity
- Game state management through objects
- User interaction and input handling
- Complex game logic implementation

By structuring the game using classes, you've created a foundation that's not only functional but also maintainable and extensible. Each class has a clear responsibility, making the code easier to understand and modify.

The OOP version of the Blackjack game you've built is a solid foundation that we can expand upon. Here are some ideas for expanding and enhancing your object-oriented Blackjack game:

* Class Inheritance Expansion: Create specialized player classes (like AIPlayer or StrategyPlayer) that inherit from the base Player class, each implementing different playing strategies.

* Card Suite Expansion: Extend the Card and Deck classes to handle multiple decks or different types of cards, making it easier to implement variations of the game.

* Exception Handling: Create custom exception classes for different game scenarios (InvalidBet, EmptyDeck, etc.), improving error handling and user feedback.

* Strategy Pattern Implementation: Implement different dealer strategies using the Strategy pattern, allowing for various rule sets or difficulty levels.

* Game History: Implement a History class to track and replay previous hands, useful for both learning and debugging.

* Player Statistics: Add a Statistics class to track player performance metrics like win/loss ratio, average bet size, and largest wins.

* Tournament Mode: Create a Tournament class that manages multiple BlackjackGame instances, allowing for different game modes and competitive play.

* Advanced Betting System: Implement a more complex betting system with options for insurance, splitting pairs, and doubling down.

These enhancements would not only make your Blackjack game more feature-rich but also provide opportunities to explore more advanced object-oriented programming concepts. Each new feature can help deepen your understanding of class design and software architecture principles.

Remember, good object-oriented design is an iterative process. As you add new features:
- Keep classes focused on single responsibilities
- Look for opportunities to reuse code through inheritance
- Consider how new features might interact with existing classes
- Maintain encapsulation by keeping implementation details private
- Write clear documentation for class interfaces

We encourage you to experiment with these ideas and develop your own enhancements. The modular nature of object-oriented programming makes it easier to try new features without breaking existing functionality. Don't be afraid to refactor your code as you learn better ways to structure your program.

Keep coding, keep learning, and most importantly, have fun with it! We look forward to seeing how you'll expand upon this project and what amazing things you'll create next.

## Full Code
```python
import random

class Card:
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank

    def __str__(self):
        return f"{self.rank} of {self.suit}"

    def value(self):
        if self.rank in ["J", "Q", "K"]:
            return 10
        elif self.rank == "A":
            return 11  # Ace initially counts as 11, handled in hand evaluation
        else:
            return int(self.rank)

class Deck:
    def __init__(self):
        self.cards = [Card(suit, rank) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                      for rank in ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]]
        random.shuffle(self.cards)

    def deal_card(self):
        return self.cards.pop() if self.cards else None

class Player:
    def __init__(self, name):
        self.name = name
        self.hand = []
        self.tokens = 10

    def add_card(self, card):
        self.hand.append(card)

    def hand_value(self):
        value = sum(card.value() for card in self.hand)
        ace_count = sum(1 for card in self.hand if card.rank == "A")
        while value > 21 and ace_count:
            value -= 10  # Change ace from 11 to 1
            ace_count -= 1
        return value

    def show_hand(self):
        return ", ".join(str(card) for card in self.hand)

    def bet(self, amount):
        if amount <= self.tokens:
            self.tokens -= amount
            return True
        return False

    def win_tokens(self, amount):
        self.tokens += amount

class BlackjackGame:
    def __init__(self):
        self.deck = Deck()
        self.player = Player("Player")
        self.dealer = Player("Dealer")

    def play_round(self):
        if self.player.tokens <= 0:
            print("You are out of tokens! Game over.")
            return False

        # Initial Setup
        self.player.hand = []
        self.dealer.hand = []
        self.deck = Deck()

        bet_amount = int(input(f"You have {self.player.tokens} tokens. How many tokens would you like to bet? "))
        if not self.player.bet(bet_amount):
            print("Invalid bet amount.")
            return True

        # Deal initial cards
        self.player.add_card(self.deck.deal_card())
        self.player.add_card(self.deck.deal_card())
        self.dealer.add_card(self.deck.deal_card())
        self.dealer.add_card(self.deck.deal_card())

        # Player's turn
        while True:
            print(f"Your hand: {self.player.show_hand()} (Value: {self.player.hand_value()})")
            if self.player.hand_value() > 21:
                print("You busted!")
                return True
            action = input("Would you like to hit or stand? (h/s): ").lower()
            if action == 'h':
                self.player.add_card(self.deck.deal_card())
            elif action == 's':
                break
            else:
                print("Invalid input, please enter 'h' or 's'.")

        # Dealer's turn
        print(f"Dealer's hand: {self.dealer.show_hand()} (Value: {self.dealer.hand_value()})")
        while self.dealer.hand_value() < 17:
            self.dealer.add_card(self.deck.deal_card())
            print(f"Dealer hits: {self.dealer.show_hand()} (Value: {self.dealer.hand_value()})")

        # Determine outcome
        player_value = self.player.hand_value()
        dealer_value = self.dealer.hand_value()
        if dealer_value > 21 or player_value > dealer_value:
            print("You win this round!")
            self.player.win_tokens(bet_amount * 2)
        elif player_value < dealer_value:
            print("Dealer wins this round.")
        else:
            print("It's a push. You get your bet back.")
            self.player.win_tokens(bet_amount)

        return True

def play_blackjack():
    print("Welcome to Blackjack!")
    print("In this game, you start with 10 tokens. You can place a bet each round and try to win more tokens. If you run out of tokens, the game is over. Good luck!")
    game = BlackjackGame()
    while True:
        continue_playing = game.play_round()
        if not continue_playing:
            break
        another_round = input("Would you like to play another round? (y/n): ").lower()
        if another_round != 'y':
            break
    print(f"You leave with {game.player.tokens} tokens. Thanks for playing!")
```