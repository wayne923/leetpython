---
title: Basic Calculator
tags: [Beginner, Projects]
---

Welcome to the **Basic Calculator** Project!

In this project, we'll develop a **Basic Calculator**. This calculator is designed to perform basic mathematical operations such as addition, subtraction, multiplication, division, modulus, and exponentiation. It provides a practical context to apply your Python skills in a real-world scenario, and will challenge your understanding of Python's fundamental concepts, including functions, classes, error handling, and user input validation.

## Project Overview: Building the **Basic Calculator**

Let's begin with our project view, where we outline the project's goals, its intended functionality, and its scope and boundaries. This will help us clearly define what our project can do.

### Define the Purpose
The Basic Calculator aims to offer a straightforward interface for users to perform arithmetic calculations. This project challenges your understanding of Python's core concepts, including function definition, input/output handling, error and exceptions management, and performing calculations based on user input. By working through this project, users will apply coding skills in a practical context, creating an application that can be expanded and refined over time.

### Outline Core Features and Functionality
* Mathematical Operations: Perform addition, subtraction, multiplication, division, modulus, and exponentiation based on user input.
* Input Validation: Ensure that user inputs are valid numbers and handle any input errors gracefully.
* Interactive User Interface: Allow users to select operations and enter values through a simple text-based interface.
* Continuous Operation: Enable users to perform multiple operations in succession, maintaining the current value until cleared.
* Error Handling: Provide informative error messages for invalid operations or inputs, such as division by zero.

### Boundaries and Limitations
* The calculator will operate in a command-line environment, without a graphical user interface (GUI).
* It will only handle basic mathematical operations as listed, without support for advanced mathematical functions or graphing capabilities.
* The project assumes the user inputs are either valid numerical values or commands recognized by the calculator (e.g., clear, exit).

## Building the **Basic Calculator**

Now, with a solid grasp of the project's features and boundaries, let's get to building our **Basic Calculator**!

Try your hand at building the calculator first.

Here are some helpful tips and suggestions that can help you understand how to build it:

* Incremental Development: Tackle one functionality at a time, testing each thoroughly before moving on to the next.
* Error Handling: Use try-except blocks to catch and handle exceptions, especially for input validation and division by zero errors.
* User Experience: Keep the interface simple and user-friendly. Provide clear instructions and immediate feedback for user actions.

## Walkthrough of the **Basic Calculator**

### Step 1: Defining the Calculator Class
The key to our **Basic Calculator** is that we'll use a class to store all our methods instead of using functions. Using a class to create our **Basic Calculator** encapsulates its functionalities and state within a single, cohesive structure, making the code more modular, reusable, and easier to maintain. This approach gives us a clear framework for extending functionality and integrating new features into the future. Since this is a **Basic Calculator** we very much want to make it easy for us to add new features.

```python
class Calculator:
    def __init__(self):
        self.current_value = 0
```

We start by defining a Calculator class with an __init__ method. This class serves as the backbone of our application, encapsulating all the functionalities of our calculator. The __init__ method initializes current_value to 0, which stores the current result of any calculation. This design creates a persistent value state between operations, giving us a form of 'memory' that we can manipulate during the calculator's lifetime.

### Step 2: Validating User Input

```python
    def validate_input(self, value):
        try:
            return float(value)
        except ValueError:
            raise ValueError("Invalid input: Please enter a valid number.")
```

The next step is setting up a method that ensures the calculator only processes valid numerical inputs. By attempting to convert the input to a float, we cover a broad range of numbers, including integers and decimals. If the conversion fails, it raises a ValueError with a message prompting the user for a valid number. This approach prevents errors during mathematical operations.

Encapsulating our input validation into a separate method allows us to reuse this in the following arithmetic operation methods instead of having to retype the code out in each method, saving space and greatly simplifying the code.

### Step 3: Implementing Arithmetic Operations

```python
    def add(self, value):
        self.current_value += self.validate_input(value)
        return self.current_value

    def subtract(self, value):
        self.current_value -= self.validate_input(value)
        return self.current_value

    def multiply(self, value):
        self.current_value *= self.validate_input(value)
        return self.current_value

    def divide(self, value):
        value = self.validate_input(value)
        if value == 0:
            raise ValueError("Cannot divide by zero.")
        self.current_value /= value
        return self.current_value

    def modulus(self, value):
        self.current_value %= self.validate_input(value)
        return self.current_value

    def exponentiate(self, value):
        self.current_value **= self.validate_input(value)
        return self.current_value

    def clear(self):
        self.current_value = 0
        return self.current_value
```

We implement methods for each arithmetic operation (addition, subtraction, multiplication, division, modulus, exponentiation) following a similar pattern. Each method uses the `validate_input` method to ensure the input is a valid number, performs the respective operation by updating `current_value` with the appropriate operation, and then returns the new `current_value`. This structure allows us to keep a persistent `current_value` and chain operations together.

The `clear` method allows us to reset `current_value` to 0, giving us the ability to reset at any time.

### Step 4: The Main Function and User Interaction Loop
```python
def basic_calc():
    calc = Calculator()
    print("Welcome to the Basic Calculator!")

    while True:
        try:
            print("\nCurrent Value:", calc.current_value)
            operation = input("Please choose an operation, or clear values or exit from the calculator (+, -, *, /, %, ^, clear, or exit): ").strip().lower()
            if operation == 'exit':
                print("Exiting...")
                break
            elif operation == 'clear':
                print("Cleared all values")
                calc.clear()
            else:
                value = input("Please Enter value: ").strip()
```
The main() function initializes an instance of Calculator and enters an infinite while loop that continually prompts the user for an `operation`. Each of the acceptable inputs leads to specific path in our control flow:
* exit leads to the `break` statement, breaking us out of the infinite while loop and ending the script.
* clear uses the `calc.clear()` method to clear `current_value`
* The symbols each lead to their respective operations:

```python
            elif operation in ['+', '-', '*', '/', '%', '^']:
                value = input("Please Enter value: ").strip()
                if operation == '+':
                    calc.add(value)
                elif operation == '-':
                    calc.subtract(value)
                elif operation == '*':
                    calc.multiply(value)
                elif operation == '/':
                    calc.divide(value)
                elif operation == '%':
                    calc.modulus(value)
                elif operation == '^':
                    calc.exponentiate(value)
```


### Step 5: Exception Handling
```python

            else:
                raise ValueError("This is an invalid operation. Please try again!")
        except ValueError as exception:
            print(exception)
        except Exception as exception:
            print("An unexpected error occurred:", exception)
```
The try-except blocks catch and display any ValueErrors raised during input validation or operations. This helps prevent the program from crashing due to invalid inputs but also guides the user towards using valid inputs.


## Conclusion and Future Steps
Congratulations on completing the **Basic Calculator** project! This project not only gave you an opportunity to explore core Python programming concepts such as class design, method implementation, input validation, and exception handling but also explored how to create a dynamic and user-interactive command-line application. These skills are fundamental for any aspiring Python developer, laying the groundwork for more complex projects and applications.

Remember, programming is as much an art as it is a science. There's no single "correct" way to build this calculator; the approach you take can vary based on your preferences, coding style, and the requirements of the project. The version of the calculator you've developed is a solid foundation, but it also opens the door to numerous possibilities for improvement and expansion. Here are some ideas for taking your calculator to the next level:

* Persistent History: Implement a feature to record calculation history, allowing users to review previous operations and results. This could involve storing entries in a file or database that can be queried and displayed within the application.

* Function Extensions: Expand the calculator's functionality to include more complex mathematical operations, such as trigonometric functions, square roots, or logarithms. This would not only make your calculator more versatile but also provide an excellent opportunity to delve into Python's math module.

* Graphical User Interface (GUI): Enhancing the calculator with a graphical user interface can make it more accessible and user-friendly. Consider exploring Python libraries like Tkinter, PyQt, or Kivy to create a visually appealing interface that supports mouse and keyboard input.

* Error Handling Improvements: While basic error handling has been implemented, further refining this aspect can improve the user experience. Advanced error handling can provide more specific feedback for different types of input errors, making the calculator more robust and user-friendly.

These enhancements not only serve to bolster your understanding of Python but also encourage creativity and problem-solving. Each addition presents its own set of challenges and learning opportunities, pushing you to think critically and explore new aspects of software development.

We're excited to see how you will expand upon this project and look forward to your future creations. Keep coding, keep learning, and most importantly, have fun with it!

See you in the next project!

## Full Code

```python
import sys

class Calculator:
    def __init__(self):
        self.current_value = 0

    def validate_input(self, value):
        try:
            float_value = float(value)
            return float_value
        except ValueError:
            raise ValueError("Invalid input: Please enter a valid number.")

    def add(self, value):
        self.current_value += self.validate_input(value)
        return self.current_value

    def subtract(self, value):
        self.current_value -= self.validate_input(value)
        return self.current_value

    def multiply(self, value):
        self.current_value *= self.validate_input(value)
        return self.current_value

    def divide(self, value):
        value = self.validate_input(value)
        if value == 0:
            raise ValueError("Cannot divide by zero.")
        self.current_value /= value
        return self.current_value

    def modulus(self, value):
        self.current_value %= self.validate_input(value)
        return self.current_value

    def exponentiate(self, value):
        self.current_value **= self.validate_input(value)
        return self.current_value

    def clear(self):
        self.current_value = 0
        return self.current_value

def basic_calc():
    calc = Calculator()
    print("Welcome to the Basic Calculator!")

    while True:
        try:
            print("\nCurrent Value:", calc.current_value)
            operation = input("Please choose an operation, or clear values or exit from the calculator (+, -, *, /, %, ^, clear, or exit): ").strip().lower()
            if operation == 'exit':
                print("Exiting...")
                break
            elif operation == 'clear':
                calc.clear()
                print("Cleared all values")
            elif operation in ['+', '-', '*', '/', '%', '^']:
                value = input("Please Enter value: ").strip()
                if operation == '+':
                    calc.add(value)
                elif operation == '-':
                    calc.subtract(value)
                elif operation == '*':
                    calc.multiply(value)
                elif operation == '/':
                    calc.divide(value)
                elif operation == '%':
                    calc.modulus(value)
                elif operation == '^':
                    calc.exponentiate(value)
            else:
                raise ValueError("This is an invalid operation. Please try again!")
        except ValueError as exception:
            print(exception)
        except Exception as exception:
            print("An unexpected error occurred:", exception)
```