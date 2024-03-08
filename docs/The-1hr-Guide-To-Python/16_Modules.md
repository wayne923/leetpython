# Modules and Libraries

## Modules
As you work more and more with Python, you may find yourself creating codes and programs that you want to reuse elsewhere. Functions already give us this ability, but what if we want to reuse a function in another Python file all together?

This is where modules come into play. Simply put, a module is a file containing Python code. It may include functions, variables, classes, and/or entire pieces of runnable code that accomplish similar tasks or can be grouped under a single idea.

This flexibility makes modules a key for organizing your code, allowing you to group related code and ideas into a file that can be used across multiple Python scripts. 

Python comes with a extensive standard library of modules that offer additional functionalities beyond the Python built-in functions and types. These standard modules are very powerful and greatly reduce the need to write your own code, making it a good idea to use them whenever you need.

There's far too many modules to cover in a single section, so let's use the random module, which provides tools for generating and working with random numbers, to explore how to work with modules.


### Importing and using a module

To use a module we need to first import it, which we can do with the import keyword along with the module name-

```python
import random
```

With random now imported, we have full access to its suite of functions. We can call a function within a module with this syntax-

```python
module_name.function()
```
Let's see this in action with random:

```python
import random

# Generate a random integer between 1 and 10
random_number = random.randint(1, 10)
print("Random number:", random_number)
```

You can also give the modules an alias by using the as keyword-
```python
import random as rnd

# Generate a random integer between 1 and 10
random_number = rnd.randint(1, 10)
print("Random number:", random_number)
```
Notice that we now call the random module by its alias `rnd` instead of its full name.

This can be useful when the module name is long or difficult to spell out, or when you want to easily differentiate between modules with similar names. It allows for cleaner and more readable code.

Modules can contain more than just functions; they also include variables, classes, and more. For example, let's call the variable `pi` from the math module.

```python
import math

# Accessing a variable from the math module
pi_value = math.pi
print("The value of pi is:", pi_value) #Outputs: The value of pi is: 3.141592653589793
```

We can also import specific parts of a module instead of the entire module, allowing you to utilize the imported parts without having to refer to the module directly. This can be very useful for avoiding naming conflicts between modules, by using the `from... import` syntax.

Let's explore this by importing just the pi variable from math:

```python
from math import pi

print("The value of pi is:", pi)
```

### Creating your own modules

It's easy to create your own modules- you simply need to create a new .py file (the python file extension)  that contains the functionalities you want to provide.

For example, let's create a custom module named mathmodule.py:

```python 
# mathmodule.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

You can then import and use your custom module just like any other modules:

```python
import mathmodule

print(mathmodule.add(10, 5))  # Outputs '15'
print(mathmodule.subtract(10, 5))  # Outputs '5'
```
Modules in Python are a foundational concept that enable efficient and organized code. By leveraging both Python's extensive standard library and creating your own custom modules, you can build more modular, reusable, and maintainable applications. As you progress, you'll find modules indispensable in your programming toolkit, facilitating code reuse and helping you to write less code while doing more.

## Libraries

If a module is a file containing Python code that can be grouped together, then a library is a collection of modules bundled together to provide functionality for specific tasks. Simply put- a library 

A library in Python is a collection of modules that perform a specific function or serve a certain purpose.

The random and math modules we saw earlier are a part of Python’s Standard Library- a vast collection of modules like file I/O, system calls, internet protocols, and more, that come preinstalled along with Python. Then there's the third party open-sourced libraries that you need to install yourself before you can use them.

Libraries are one of the reasons why Python is the fastest growing computer language- they allow you to utilize code written by others, saving you time and giving you vast capabilities that would take significant time and effort to develop from scratch.

There's a Python library for almost everything. If you want to handle CSV files, there's `csv`. If you need to do complex numerical computations, there’s `numpy`. If you want to extract data from the web, there's `beautifulsoup`. So it's more than fair to say knowing which libraries to use is an essential part of becoming proficient with Pythton- it allows you to build complex and functional programs in less time.

### Installing and using Libraries
Let's first explore how to install a third-party library. Python uses a package manager called pip for this purpose. pip comes pre-installed with Python, and it simplifies the process of installing, upgrading, and removing libraries.

To install a library using pip, you would typically use the following command in your computer's command line or terminal:

```
pip install library_name
```

For example, to install the popular numpy library, you would run this:

```
pip install numpy
```

After installation, you can import and use the library in your Python scripts just like you would with a standard module:

```python
import numpy

array = numpy.array([1, 2, 3])
print(array)  # Outputs: [1 2 3]
```

Libraries operate the same as modules, meaning you can do give them aliases and import specific things from them as you could with modules.

## Finding Libraries
Discovering libraries that can help solve your problem is a key skill in Python programming. Websites like PyPI (Python Package Index) are excellent resources for finding libraries. PyPI hosts thousands of third-party Python libraries, covering a wide range of functionalities from web development and data analysis to machine learning and scientific computing.

## Conclusion
Modules and libraries are fundamental to Python programming, enabling code reuse, efficient organization, and access to a vast ecosystem of pre-built functionalities. By understanding how to utilize these resources,you can significantly enhance your productivity and the quality of your Python projects. As you become more comfortable with Python, exploring new libraries and even contributing to them can be a rewarding way to engage with the Python community.