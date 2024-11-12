---
title: "Control Flow"
description: "Master the art of controlling the flow of your Python programs. Learn about conditional statements (if, elif, else), loops (while, for), control statements (break, continue, pass), and error handling (try, except, finally) to create dynamic and interactive code."
keywords: [Python control flow, conditional statements, if statement, elif statement, else statement, loops, while loop, for loop, break statement, continue statement, pass statement, error handling, try statement, except statement, finally statement]
---

# Control Flow

So far we've learned the common building blocks and concepts in Python, but nothing about how to complete meaningful tasks or create solutions to problems. This is where control flow statements come in.

What are control flow statements? They're the statements and syntaxes that control how your code executes, allowing your code to make decisions based on certain conditions.

Essentially, they direct the flow of your program, enabling it to react differently under various circumstances, making your code dynamic and interactive. Implementing the correct control flows in your program is what gives it its programming logic!

Python's control flow statements can be broken down into four categories-

* Conditional Statements:
  * If Statement
  * Elif (else if) statement
  * Else Statement

* Loops:
  * While Loop
  * For Loop

* Control Statements:
  * Break Statement
  * Continue Statement
  * Pass Statement

* Error Handling Statement:
  * Try Statement
  * Except Statement
  * Finally Statement

In the following sections we'll cover each of these, going over what they mean and give examples. Let's dive in!

## If Statement

An if statement is used to execute a code block only if the specified condition is true. This allows you to control code execution based on your desired conditions.

The logic of an if statement can be expressed as:

`If this condition is true, perform this action.`

Here's its actual syntax in Python:

```python
if condition:
    code block
```

Here's an example of if statements in action:

```python
# Define a variable with a value
number = 5

# Check if the number is greater than 3
if number > 3:
    print("The number is greater than 3.")
```

## Elif (else if) Statement
The elif (else if) statement is used to provide multiple conditions, each with its own code block, to be checked in sequence if the initial if statement fails. It's used to create logic branches, allowing you to program in decisions based on the result of the initial if statement.

The logic of an elif statement can be expressed as:

`If the first condition is true, perform this action. Else if another condition is true, perform a different action.`

Here's its actual syntax in Python:

```python
if first_condition:
    # Executed if first_condition is true
    code block
elif second_condition:
    # Executed if second_condition is true
    code block
```

Here's an example of elif statements in action:

```python
number = 5

if number > 10:
    print("The number is greater than 10.")
elif number > 3:
    print("The number is greater than 3 but not greater than 10.")
```

## Else Statement
The else statement complements the if and elif statements by acting as their backup, executing if the preceding if and elif statement's conditions don't trigger. This helps round out the programming logic by ensuring that it can handle both positive and negative outcomes of its statements.

The logic of a combined if-else statement can be expressed as:

`If this condition is true, perform this action. If not, do this instead.`

Here's its actual syntax in Python:

```python
if condition:
    # Executed if condition is true
    code block
else:
    # Executed if condition otherwise
    code block
```

Here's an example of if else statements in action:

```python
Copy code
number = 2

if number > 3:
    print("The number is greater than 3.")
else:
    print("The number is not greater than 3.")
```
## While Loop

A while loop executes its code block as long as its condition is true. It's useful for repeating tasks until the condition changes.

The logic of a while statement can be expressed as:

`While this condition is true, keep performing this action.`

Here's its actual syntax in Python:

```python
while condition:
    code block
```


And here's an example of while statements in action:

```python
# Initialize a counter to hold to a value.
count = 0

#This code repeatedly adds 1 to count as long as it is less than 5.
while count < 5:
    count += 1
```

## For Loop

A for loop iterates over a sequence object (such a list, tuple, dictionary, set, or string), and executes its code block on each item in that sequence.

The logic of a for loop can be expressed as:

`Peform this action upon each item in this sequence`

Here's its actual syntax in Python:

```python
for item in sequence:
    code block
```

And here's an example of the for loop in action:

```python
fruits = ["apple", "banana", "cherry"]

# Print each item in the list
for fruit in fruits:
    print(fruit) #Outputs each item in fruits
```

## Break Statement

The break statement tells Python to stop and exit a loop when it sees it, effectively allowing you to exit a loop. It's useful for setting up conditions where you want to exit a loop.

Here's an example of the break statement in action:

```python
numbers=[1,3,5,7,9]

for number in numbers:
    if number==5:
        print('Number 5 found, breaking the loop')
        break
    print(number)
```

## Continue Statement

The continue statement tells Python to 'continue' on, effectively causing Python to skip over its current iteration and move onto the next one in a loop. It's useful for allowing you to skip past certain parts of a loop that you may not want the code block to execute on.

Here's an example of the continue statement in action:

```python
numbers=[1,2,3,4,5]

#This for loop won't print 2 because we used the continue statement to tell it to 'continue' on when it encounters 2.
for number in numbers:
    if number == 2:
        continue
    print(number)
```

## Pass Statement

The pass statement is a placeholder statement that doesn't do anything. It's most often used during code development or testing, when you're working on a control flow and don't have a code block for it. You can use the pass statement to allow the control flow to function, allowing you to continue testing without worries.

Here's an example of the pass statement in action:

```python
numbers=[1,2,3,4,5]

#This code will print all items in numbers.
for number in numbers:
    if number == 2:
        pass
    print(number)
```


## Try, Except, and Finally Statements

The try, except, and finally statements together form a powerful framework for managing any Python program. The try block allows you to test a block of code for errors, while the except block lets you handle the error. The finally clause executes after the try block and any except block have completed, regardless of whether an error was encountered or not. This ensures that the code within the finally block runs under all circumstances, making it invaluable for resource management and clean-up actions.

Alll together, the try, except, and finally statements essential for robust error handling and resource management in Python.


The logic of a try, except, and finally statement can be expressed as:

`Attempt to execute this code block. If something happens, except this other code block. Finally, execute this code block no matter the outcome of the two blocks.`


Here's its actual syntax in Python:

```python
try:
    # Code block to try
    code block
except:
    # Code block that triggers if its conditions are met.
    code block
finally:
    # Code block that will run after the try block, no matter what.
    code block
```

Here's an example of the try, except, and finally statements that highlight its ability to handle exceptions:

```python
try:
    # Attempt to divide a number by zero, which wouldn't be allowed.
    print(1/0)
except ZeroDivisionError:
    # Instead of raising the ZeroDivisionError, print the following instead.
    print("You can't divide by zero!")
```

And here's an example of a try and finally statement that highlights its ability to handle resource management:

```python
try:
    # Attempt to open and read from a file
    file = open("example.txt", "r")
    content = file.read()
    print(content)
finally:
    # Ensure the file is closed, no matter what happens in the try block
    file.close()
    print("File has been closed.")
```

## Conclusion

Whew! That's a lot of statements! These may seem like a lot, but as you become more familiar with these statements, you'll find yourself thinking more algorithmically, breaking down problems into discrete steps and conditions that can be systematically addressed using the appropriate control flow statement. This is a fundamental skill in programming, so it's definitely worth taking the time to learn them.