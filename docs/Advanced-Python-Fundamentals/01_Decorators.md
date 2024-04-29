---
title: "Understanding Decorators in Python"
description: "Master the concept of decorators in Python with our comprehensive guide. Learn how decorators can enhance functionality, improve code readability, and promote reuse without altering the original function. Explore creating, applying, and using decorators with practical examples."
keywords: [Python decorators, function modification, code reusability, modular coding, Python programming, advanced Python techniques, decorator basics, decorator examples, Python code enhancement]
---

# Decorators

Decorators are a powerful tool that allows you to modify the behavior of a function by feeding it into another function, essentially 'wrapping' the original function with the decorator function.

Simply put, a decorator is a function that takes another function as its argument.

This can be extremely useful because:
*   **Code Reusability:** Decorators allow you to apply the same behavior to multiple functions or methods, reducing code duplication.
*   **Modularity:** Decorators help to keep code modular. You can add functionality to existing functions without changing their code.
*   **Readability and Maintainability:** Decorators can make the code more readable and easier to maintain by abstracting parts of the code onto a decorator, making the core function/method more readable

In this guide we'll go over how to create a decorator and how to use them. Let's get started!

## Decorator Basics

### Creating a Decorator

Let's begin by creating a basic decorator named **print_decorator**. This decorator enhances the functionality of any function it decorates by printing a message before and after the execution of the function:

```python
def print_decorator(func):
    def wrapper():
        print("Function is about to run...")
        func()
        print("Function has finished running.")
    return wrapper
```

* print_decorator() is our decorator function. It takes another function `func` as its argument- this is the function we want to modify.
* wrapper() is the function that "wraps" around `func()`. In the case of `print_decorator()`, `wrapper()` first prints **"Function is about to run..."**, executes `func()`, then prints **"Function has finished running"**
* Finally, `print_decorator()` returns `wrapper`, the function object, ready to be called.

### Applying the Decorator

To apply the decorator, we can place the @ syntax along with the decorator above the function we intend to "decorate":

```python
def print_decorator(func):
    def wrapper():
        print("Function is about to run...")
        func()
        print("Function has finished running.")
    return wrapper

@print_decorator
def greet():
    print("Hello there!")
```

This effectively "replaces" greet() with the wrapper() function defined inside print_decorator(). Now, when we call greet() it's actually invoking print_decorator() with greet() given as its argument.

### Invoking the Decorated Function

Now let's finally see what happens when we call greet():

```python
def print_decorator(func):
    def wrapper():
        print("Function is about to run...")
        func()
        print("Function has finished running.")
    return wrapper

@print_decorator
def greet():
    print("Hello there!")

greet() #Outputs:
"""
Function is about to run...
Hello there!
Function has finished running.
"""
```

## Decorators with Arguments
You may find that your decorators themselves need to be customizable. This is where decorators with arguments come in handy. They allow you to pass additional arguments to the decorator itself, making your decorators more flexible and dynamic.

To create a decorator that accepts arguments, you need to create what is called a **decorator factory**: a function that returns a decorator. Let's take a look at how this may look with the following example:

```python
def repeat_decorator(times):
    def decorator(func):
        def wrapper():
            for _ in range(times):
                func()
        return wrapper
    return decorator

@repeat_decorator(times=3)
def print_message():
    print("This message will be repeated.")

print_message()
#Outputs:
"""
This message will be repeated.
This message will be repeated.
This message will be repeated.
"""
```

In this example, `repeat_decorator` is a decorator factory that takes an argument `times`, which specifies how many times the decorated function should be executed. It then returns a decorator that wraps the original function in a wrapper function. The wrapper function executes the original function the specified number of times using a for loop.

By applying `@repeat_decorator(times=3)` to `print_message()`, we instruct Python to modify `print_message()` so that it runs three times in sequence whenever it's called, allowing us to print `This message will be repeated.` three times in a row.

## Decorating Functions with Arguments
The decorator we've been building so far unfortunately cannot decorate functions with arguments. Fortunately, we can easily adapt them to do so by providing **args and **kwargs in the wrapper function. This allows the decorator to handle functions with any number of positional and keyword arguments.

Let's explore this by revisiting an earlier decorator we created:

```python
def print_decorator(func):
    def wrapper():
        print("Function is about to run...")
        func()
        print("Function has finished running.")
    return wrapper
```

Attempting to use this decorator on:
```python
def addition(x,y):
    return x + y
```

Doesn't work because `print_decorator()` hasn't been setup to accept arguments:
```python
def print_decorator(func):
    def wrapper():
        print("Function is about to run...")
        func()
        print("Function has finished running.")
    return wrapper

def addition(x,y):
    return x + y

addition(1,2) #Outputs: TypeError: print_decorator.<locals>.wrapper() takes 0 positional arguments but 2 were given
```

We can fix this by adding **args and **kwargs to the wrapper function and changing it to return func() instead of simply running it:

```python
def print_decorator(func):
    def wrapper(*args, **kwargs):
        print("Function is about to run...")
        return func(*args, **kwargs)
        print("Function has finished running.")
    return wrapper

@print_decorator
def addition(x,y):
    return x + y

addition(1,2)
#Outputs:
"""
Function is about to run...
3
"""
```

It's not strictly necessary to add both *args and **kwargs into the wrapper function. In the above example we'd only need *args since we're not passing any keyword arguments to the decorator.

But there's no harm in setting up your decorator to accept both *args and **kwarg arguments- if no applicable arguments are provided then *args will be an empty tuple and **kwargs will be an empty dictionary, and thus the function will be called with no arguments.

This means it can be considered good practice to set up your decorator to accept *args and **kwargs to make it applicable to a broad range of functions!

## Stacking Decorators
In Python, you can "stack" multiple decorators on top of a single function. This means you can apply more than one decorator to a function, each adding its own layer of functionality.

Stacked decorators are applied from bottom up: the decorator closest to the function wraps around the function, then the decorator above it wraps around this decorator, and so on. Think of it as though the original function is the core of an onion, and each decorator wraps around it, one layer at a time.

This means that when the code finally executes we begin with the outermost decorator, then the one below that, and so on.

This might look a bit confusing, so let's explore this with the following example:

```python
def uppercase_decorator(func):
    def wrapper():
      return func().upper()
    return wrapper

def lowercase_decorator(func):
    def wrapper():
      return func().lower()
    return wrapper

@uppercase_decorator
@lowercase_decorator
def return_string():
  return("hello, world!")

return_string()
```
During `"decoration time"`(when the code is interpreted, but functions are not yet executed):
`lowercase_decorator` wraps around `return_string()`, and then `uppercase_decorator` wraps around `lowercase_decorator`.

During `"execution time"`:
* The call to `return_string()` initiates the execution of `uppercase_decorator's` wrapper function first because it's the outermost layer. This wrapper function anticipates executing its `func()`, which is now the wrapper from `lowercase_decorator`.
* When `uppercase_decorator's` wrapper invokes `func()`, it triggers the execution of `lowercase_decorator's` wrapper function. This function takes the original `return_string()` output, converts it to lowercase, and returns the result.
* After `lowercase_decorator's` wrapper completes, control returns to `uppercase_decorator's` wrapper, which then converts the now-lowercase string to uppercase and returns the final result.

Stacking decorators is a powerful way to compose functionality in Python, alowing you to layer modifications or enhancements in a clean and readable manner.


## Decorating Instance Methods
Decorators aren't limited to standalone functions; they can also be applied to instance methods within a class. Let's explore this with the following example:

```python
def method_decorator(func):
    def wrapper(self):
        print("Method is about to run...")
        result = func(self)
        print("Method has finished running.")
        return result
    return wrapper

class Greet:
    @method_decorator
    def method_greet(self):
        print("Hello from the method!")

greetings=Greet()
greetings.method_greet()
#Outputs:
"""
Method is about to run...
Hello from the method!
Method has finished running.
"""
```
In this example we're applying ``method_decorator()`` to the ``method_greet()`` method, "replacing" ``method_greet()`` with the wrapper() function defined within ``method_decorator()``. Instance decorators are essentially identical to regular decorators, but have an additional requirement that the wrapper function needs to take ``self`` as its first argument, ensuring that it behaves correctly as an instance method.

We can also use the ideas we learned in the **Decorating Functions with Arguments** section to around this requirement:

```python
def method_decorator(func):
    def wrapper(*args, **kwargs):
        print("Method is about to run...")
        result = func(*args, **kwargs)
        print("Method has finished running.")
        return result
    return wrapper

class Greet:
    @method_decorator
    def method_greet(self):
        print("Hello from the method!")

greetings=Greet()
greetings.method_greet()
#Outputs:
"""
Method is about to run...
Hello from the method!
Method has finished running.
"""
```

Since the ``*args`` automatically accepts arguments we don't need to specifically add ``self``

## Built in Decorators
Due to the power and usefulness of decorators, Python possesses its own suite of built-in decorators. Here we'll go over the two most common built-in decorates- ``@classmethod`` and ``@staticmethod``


### Class Method
Class methods are methods that are bound to the class rather than its instance, and can modify a class state that applies across all instance sof the class.

Class methods are defined by the ``@classmethod`` decorator and accepts a parameter that is conventionally named ``cls``.

Let's go through a beginner-friendly example to understand how class methods work:

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    @classmethod
    def from_string(cls, book_str):
        title, author = book_str.split(" by ")
        return cls(title, author)  # cls refers to the actual Book

# Creating a Book instance using the standard constructor
book1 = Book("Python Programming", "John Doe")
print(book1.title)  # Outputs Python Programming
print(book1.author) #Outputs John Doe

# Creating a Book instance using the class method
book2 = Book.from_string("Data Structures by Jane Doe")
print(book2.title)  # Outputs Data Structures
print(book2.author) # Outputs  Jane Doe
```

In this example, ``from_string`` is a class method that provides an alternative way to create a Book instance. Instead of creating a Book instance by specifying the title and author directly, you can pass a string in the format "Title by Author", and the class method will parse this string and create the object for you.

Class methods can also be used to modify the state of the class, which affects all instances of the class. Let's explore this with the following example:

```python
class Counter:
    count = 0  # This is a class variable shared by all instances of the Counter class

    def __init__(self):
        Counter.increase_count()

    @classmethod
    def increase_count(cls):
        cls.count += 1

    @classmethod
    def display_count(cls):
        print(f"Count: {cls.count}")

# Creating instances of Counter will increase the count
counter1 = Counter()
counter2 = Counter()

Counter.display_count()  # Outputs Count: 2
```

In this example, the class method ``increase_count`` is called every time an instance of Counter is created, increasing the ``count`` variable within the Counter class. This shows how class methods can modify class states shared amongst all instances of that class.

### Static Method
Static methods are similar to class methods in that they're related specifically to a class, but unlike class and instance methods they don't accept any parameters. This makes static methods useful at performing tasks related to the class without needing to access any class-specific data.

Static methods are defined with the ``@staticmethod`` decorator.

Static methods in Python are similar to class methods, but they don't take a self or cls parameter. They're essentially utility functions that perform a task useful to its associated class but don't need to access any class-specific data.

To define a static method, you use the @staticmethod decorator.

Here's a simple example to illustrate a static method:

```python
class Person:
    def __init__(self, name, age):
        if not self.validate_age(age):
            raise ValueError("Invalid age")
        self.name = name
        self.age = age

    @staticmethod
    def validate_age(age):
        return 0 < age < 150

try:
  person1 = Person("John Doe", 30)
  print(f"{person1.name} is {person1.age} years old.")

  person2 = Person("Jack Doe", 180)
  print(f"{person2.name} is {person2.age} years old.")

except ValueError as error:
    print(error)
```

This example creates a Person class. It looks fairly normal- it creates a person instance with attributes ``name`` and ``age``- but it also includes a static method named ``validate_age``. The ``validate_age`` method takes a single argument, ``age``, and returns True if ``age`` is between 0 and 150, and False otherwise. The __init__ parameters for the class then uses the Truthy and Falsyness of ``validate_age`` to determine whether the given age is valid or not.

This use of the static methods allows us to encapsulate logic to validate age directly within the Person class. It's a clean way to enforce that the age attribute of any Person instance falls within the desired range while directly linking the validation logic to the data it's related to.

This approach makes the code more modular and easier to maintain or modify, as the validation criteria for age are located in a single place.

Moreover, by using a static method for validation, we separate concerns within our class definition: __init__ focuses on instance creation and attribute initialization, while validate_age deals exclusively with checking whether the provided age is reasonable. This separation adheres to the single responsibility principle, one of the key principles of object-oriented design, which states that a class or module should have one, and only one, reason to change.


## Three Examples of Decorators in Action
Let's now dive into some simple and practical examples that showcase the usefulness of decorators. These examples involve common programming tasks or requirements that could be used on any programs and scripts, so placing them into the main function makes them unnecessarily wordy and bloated when we can simply use a decorator to simplify things.

### Example One: Timing a Function
Suppose we want to time how long it takes to execute a function. This is commonly done when we want to optimize code and determine which part of the overall program is taking the most time.

We can easily add timing functionality to any function with a decorator:

```python
import time

def timer_decorator(func):
    def wrapper():
        start_time = time.time()
        func()
        end_time = time.time()
        print(f"Function took {end_time - start_time} seconds to complete.")
    return wrapper

@timer_decorator
def function1():
    print("Executing a task...")
    time.sleep(5) #Simulating the time it takes to accomplish a task

function1() 
#Outputs:
"""
Executing a task...
Function took 5.005289554595947 seconds to complete.
"""
```

The timer_decorator() function uses the `time.time()` function from the `time` module to return the current time in seconds, both before and after the execution of a given function. By calculating the difference between these two timestamps, it determines the total time taken for the function to complete its tasks. 

This decorator is applied to `function1` using the `@timer_decorator` syntax, effectively wrapping `function1` within timer_decorator's internal wrapper function. 

Thus, when `function1` is called, it first prints a message indicating that a task is being executed, simulates a task with a 5-second delay using `time.sleep(5)`, and then finishes and prints how long the function took to finish.

### Example Two: Repeating a Function

Imagine we have a scenario where we need to execute a function multiple times in a row, such as sending a notification or performing a routine check. Instead of calling the function manually multiple times or using loops within each function, we can streamline this process with a decorator:

```python
def repeat_decorator(times):
    def decorator(func):
        def wrapper():
            for _ in range(times):
                func()
        return wrapper
    return decorator

@repeat_decorator(times=3)
def print_message():
    print("This message will be repeated.")

print_message()
#Outputs:
"""
This message will be repeated.
This message will be repeated.
This message will be repeated.
"""
```
In this example, repeat_decorator is a decorator factory that takes an argument `times`, which specifies how many times the decorated function should be executed. It then returns a decorator that wraps the original function in a wrapper function. The wrapper function executes the original function the specified number of times using a for loop.

By applying `@repeat_decorator(times=3)` to `print_message()`, we instruct Python to modify `print_message()` so that it runs three times in sequence whenever it's called, allowing us to print `This message will be repeated.` three times in a row.

### Example Three: Debugging a Function

Imagine you're debugging your program and want to track which functions are being called and when. It's helpful to have a simple message printed out every time a function starts execution. This technique can provide insights into the flow of your program, especially in complex applications where understanding the order of function calls is crucial.

We can achieve this with a straightforward debugging decorator:
```python
def debug_decorator(func):
    def wrapper():
        print(f"Now executing: {func.__name__}")
        func()
    return wrapper

@debug_decorator
def perform_task():
    print("Performing a task...")

perform_task()
#Outputs:
"""
Now executing: perform_task
Performing a task...
"""
```

The `debug_decorator` function enhances any function it wraps by printing out a message that includes the name of the function being executed. This is done using `func.__name__`, a special attribute that stores the name of the function.

By applying `debug_decorator` to `perform_task()` with the @debug_decorator syntax, we essentially wrap `perform_task()` inside debug_decorator's internal wrapper function.

Thus, when `perform_task()` is called, the decorator first prints a message indicating the function's name, followed by the execution of the original function's body.

## Conclusion

Hopefully these examples showed you how decorators can be a powerful tool in your ever expanding toolkit of Python functionality. When used appropriately, decorators offer a powerful and compartmentalized way to add functionality to functions, methods, and classes without directly modifying them.

Try out the decorators we've discussed here, or try creating your own that fits your needs! Remember, the best way to learn Python is to experiment and make things that suit your needs!