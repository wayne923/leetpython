# Objects and Variables

One of the key features and strengths of Python is that its data can be incredibly versatile. The key to this versatility lies in its object types- Python is an object-oriented programming language, meaning that virtually everything in Python is an object!

What does this mean? Simply put, all objects are defined pieces of data that come with a clearly defined set of attributes (which define what the object is and how it can change) and methods (their personal functions that allow them to perform specific tasks or actions).This object-oriented approach makes Python very intuitive, as it allows you to interact with it in a consistent and predictable manner.

Let’s show you the most commonly used object types in Python. These are the ones that you’ll most commonly use in your Python coding, and it’s good to be familiar with them-


## Built-in Object Types

- **Numeric:** `int`, `float`
- **Boolean:** `True` or `False`
- **Text Sequence:** `str`
- **Sequence:** `list`, `tuple`, `range`
- **Set:** `set`
- **Mapping:** `dictionary`
- **Function:** `function`

Notice that they’re broken down into their own object types. This is important because understanding what these categories mean can significantly simplify how you approach data manipulation in Python. Each object type has a clear purpose and comes with its own set of operations and methods, tailored to the nature and purpose of its data.

### Numeric Types

- **int**: Stands for integer. These are whole numbers, either positive or negative, without decimals. It is used primarily for, you guessed it, anything related to the use of integers in Python.
- **float**: Represents real numbers, meaning that it can be fractions or anything of that nature. It is essential for any calculations that require precision beyond whole numbers.

### Boolean Type

- **True or False**: The Boolean type handles boolean logics and forms the backbone for coding logics and control flow in programs.

### Text Sequence Type

- **str**: Short for string, this type is used to represent text in Python.

### Sequence Types

- **list**: Lists are ordered collections of items (which can be of varying types) that are mutable, allowing for its contents to change at will.
- **tuple**: Tuples are similar to lists in that they are ordered collections of items, but they are immutable. Once a tuple is created, it cannot be altered.
- **range**: The range type represents an immutable sequence of numbers.

### Set Type

- **set**: Sets are unordered collections of unique items. They are mutable and are especially useful for removing duplicate values from a sequence and performing mathematical operations like unions, intersections, and differences.

### Mapping Type

- **dictionary (dict)**: Dictionaries are collections of key-value pairs. They are mutable, which means you can add, remove, or modify elements. Dictionaries are key to storing and retrieving values that are easily identifiable by its key.

### Function Type

- **function**: Essentially a way to organize and easily define a set of executable instructions, functions are just like other objects in that it can be passed into other functions and be assigned to variables.

We’ll explore each of these types and what they can do in more detail in the future. First, let’s continue setting down some foundation by exploring what a variable is.

## What is a Variable?

A variable is simply a reference to an object and can be created by using the `=` operator. For example:

```python
a = 1  # integer object
b = 1.5  # float object
c = True  # boolean object
d = 'String'  # string object
e = [1, 2, 'three']  # list object
f = (1, 2, 'three')  # tuple object
g = {1, 2, 'three'}  # set object
h = {'a': 1, 'b': 2, 'c': 3}  # dictionary object
i = print  # function object
```

Think of them as labels or references to an object, allowing you to refer to that object without having to retype it over and over. This simplifies coding and allows you to consolidate and centralize the important data, which are critical for efficient Python programming.

## Cool Things We Can Do with Variables

```python
#Assign the same object to multiple variables:
a = b = 1
print(a)  # outputs 1
print(b)  # outputs 1
```

```python
#Reassign variables to a new object:
a = 1
a = 2
print(a)  # outputs 2
```

```python
#Unpack items from an object into multiple variables:
x, y, z = [1, 2, 3]
print(x)  # outputs 1
print(y)  # outputs 2
print(z)  # outputs 3
Swap objects between variables quickly:
```

```python
#Swap objects between variables quickly:
a = 5
b = 10
a, b = b, a
print("a:", a)  # outputs a: 10
print("b:", b)  # outputs b: 5
```

Understanding objects and variables and the relationship between them is essential in learning Python. As we move forward, we'll explore how to manipulate them to develop complex and efficient Python programs.

For now, let’s move onto the next topic- Operators!