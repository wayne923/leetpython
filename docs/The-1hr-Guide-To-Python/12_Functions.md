# Functions

Functions are in many ways the heart of Python programming, acting as reusable blocks of code designed to perform a specific task or return a value. There are many advantages to building a function-
* Reusability: Once you’ve written a specific function you can reuse it wherever you’d like, reducing the need to write duplicate code and greatly simplifying your code.
* Modularity: Functions allow you to break down complex code into smaller and more manageable pieces. Instead of writing one massive code, you can consolidate it into many functions that work cohesively, making your code more organized, easily readable, and easier to debug.
* Abstraction: Once written, you can generally safely ignore the inner workings of a function. This allows you to focus on the next task or piece of code instead of constantly checking whether your code is correct or not.
* Organization: Functions can be grouped up together into Python classes, modules, and libraries- making it much easier to maintain large programs.

Given all this, it’s safe to say that it’s very important to know how functions work and how to create one. In this section we’ll go over how to recognize a function and its parts and how to create one.

Let’s begin with something that may be familiar to you- the print() function. It’s a built-in function that allows you to directly print the arguments passed into it to the console.

```python
print('Hello World!')
```

| function_name | arguments* |
|---------------|------------|
| `print`       | `('Hello World')` |

In this example, print is the function name, and 'Hello World!' is the argument we pass to the function. The function then does its job, which is to display the text on your screen.

The function name declares the function and the () brackets hold the arguments that we pass into the function, or in this case the words we want print() to print out.

Let’s now take a look at how to create a function by taking a look at its syntax.-

```python
def function name():
  Executed block of code
```
* def is the Python keyword that begins the definition of a function, signaling to Python that you're creating a function.
* function_name is the name you're giving to your function. This name is how you'll refer to and call your function throughout your code.
* () holds any parameters your function might need. Parameters are like placeholders for the data your function can accept and work with.
* The colon : marks the end of the function header.
* The indented block of code following the definition is the body of the function, where you write what you want your function to do.

Here's an example to tie it all together:

```python
def greet():
 print("Hello there!")

greet() # This calls the function and prints "Hello there!"
```

In this case, greet is a function that takes no parameters and simply prints a greeting when called. It's a simple example, but it illustrates the essence of defining and using functions in Python.
By understanding and utilizing functions, you transform your code from a series of instructions into a collection of well-organized, reusable components. This not only makes your code more readable and efficient but also allows you to tackle more complex problems with ease.


## Return Keyword and None Value

The greet() function above is an example of a code that performs an action but doesn’t explicitly return a value. In Python, a function that doesn’t have a return statement returns a None value, a special data type used to denote the absence of a value or a null value.

### Function Without a Return Statement

When a function does not have a return statement, it performs its operations and completes its execution without providing any value back to the caller. This is common in functions that do something, like printing to the console, modifying a file, or updating an object in place, but don't need to send a value back. Our greet() function is an example of this. But what happens if we assign the value of greet() to a variable and print it?

```python
def greet():
 print("Hello there!")

result = greet()
print(result)  # Outputs None
```

While greet() definitely performs an action, it does not return a value.

### Function With a Return Statement

So how can we make a function return a value? With the return statement of course! The value returned can be anything from a simple data type like a string or a number, to more complex data structures like lists, dictionaries, or even other functions! This makes the return statement quite powerful (and also fulfills the earlier claim that functions are objects too!)

Here’s an example of a function with a return statement-

```python
def hello():
    return "Hello, world!"


greeting=hello()
print(greeting)  # Outputs Hello, world!
```

The function hello() returns an explicit value “Hello, world!” that we assign to greeting, which we then print.

### Why Use return?
So why does all of this matter? Why bother using return when we can just set up functions to do something?

The main answer is that having functions that can return a value allows your functions to be interactive with other functions and processes. You can use a function to calculate or perform a specific task, then pass its returned value into another function or part of your program. This is part of what allows programs to perform complex decisions and perform complex tasks. When functions return values, they can act as the building blocks of your program’s logic, contributing to a well-organized and flexible codebase.

Now that we got that out of the way, we can finally move onto talking about the real meat of functions- their parameters. Python functions possess a number of parameters that allow you to control how they interact with the arguments provided to them, enhancing the function's usability.

## Positional Parameters
Positional parameters are the most common way to pass arguments to a function. The arguments are passed in order, from left to right, and are matched with the parameters defined in the function's signature.

```python
def addition(x, y):
 return x + y

# Here, 3 is assigned to x, and 4 is assigned to y, based on their positions left to right.
print(addition(3, 4)) #Outputs 7
```

Positional parameters require that you pass arguments in the exact order they were defined, meaning that the first argument will always go into the first available parameters, and so on.

You can specify arguments by using the names of the parameters at the time of assignment, allowing you to manipulate positional parameters.

```python
def addition(x, y):
 return x + y

#We can further control how the function operates by explicitly assigning arguments to their positional parameters
print(addition(y=-5, x=4)) #Outputs -1
```

## Default Parameters
Default parameters allow you to assign default values to parameters, allowing you to avoid passing arguments. This can be very useful for two reasons-
By default a function will return an error when you fail to pass arguments to all possible parameters. Default parameters allow you to avoid this by setting up default values that will step in when there’s no appropriate argument.
It allows you to pre-program the function, essentially making it behave in a predictable manner, such as when it’s not necessary to pass an argument in for those specific parameters

Here’s an example of default parameters in action-

```python
def addition(x, y=4):
    return x + y

# Here, only x is provided, so y uses its default value of 4.
print(addition(3)) #Outputs 7
```

You can override the default parameters by simply giving arguments for them-

```python
def addition(x, y=4):
    return x + y

# Both x and y are provided here, so the default value of y is overridden.
print(addition(5, 6)) #Outputs 11
```

Before we move on, it’s important to note that default parameters must come after all the non-default parameters. This ordering ensures that Python can correctly interpret which values are meant for which parameters during a function call-

```python
def addition(x=4, y):
    return x + y

print(addition(3)) # This returns a SyntaxError: non-default argument follows default argument
```

## Variable Length Parameters
Variable length parameters allow the function to accept a variable number of arguments instead of the fixed number that is defined by the function itself. 

There are two types of variable length parameters- 
variable length positional arguments. Also called *args, this converts the arguments into objects held within a tuple object. It’s defined by a single *.
Variable length keyword arguments. Also called **kwargs, this converts the arguments into key-value pairs held within a dictionary object. It’s defined by two **.

Let’s see them in action-

```python
def sum_numbers(*numbers):
    return sum(numbers)  # The sum() function adds up all items in the tuple.

print(sum_numbers(1, 2, 3))  # Outputs: 6
print(sum_numbers(10, 20))   # Outputs: 30
```

```python
def print_details(**key-pairs):
    message = "Name: {name}, Age: {age}".format(**kwargs) # The format() function used in conjunction with **kwargs allows us to unpack the key-value pairs directly into the string.
    print(message)

# Using the function
print_details(name="Alice", age=30) # Outputs Name: Alice, Age: 30
```

##Conclusion

And that wraps up our section on parameters! Don’t worry if you don’t have all of these memorized, it’s definitely the longest section we’ve had thus far and contains an awful lot of information. As with the rest, think of this as a resource that you can always turn to if you don’t remember something. What’s important is that you keep on with the rest of the guide!