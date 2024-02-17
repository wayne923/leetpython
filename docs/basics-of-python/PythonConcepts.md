---
sidebar_position: 6
---

# Class, Object, Function, and Method

Let’s begin by exploring what class, object, function, and method means and their relationship with one another.

## Class
Let’s start with class. The Python documentation states that classes “provides the means of bundling data and functionality together.” The ‘data’ here refers to objects, and ‘functionality’ refers to methods - “a function which is defined inside a class body”. Thus, a class defines an object and provides methods that can be used with that object.

## Object
Ok, then what is an object? The Python documentation states that an object is- “any data with state (attributes or values) and defined behaviors (methods). Also the ultimate base class of any new-style class.

That sounds complicated. A simpler way to put this may be that virtually any data in Python is, and can be treated as, an object. All objects have their own identity- its address in memory, its associated type, and/or its associated value. Objects whose value can change are said to be mutable. Objects whose value cannot change are said to be immutable.

Objects are the actual data types that you manipulate to program and create things in Python. Python provides a built-in set of objects, formally known as built-in types, which are also commonly referred to as ‘built-in data types’.

You can find the full list of built-in types here
Many of these are unnecessary for the purposes of writing simple, practical Python code, and so the list can be winnowed down to -

| Object/Type | Example |
| --- | --- |
| Numeric | int, float |
| Boolean | True or False |
| Text Sequence | str |
| Sequence | list, tuple, range |
| Set | set |
| Mapping | dictionary |

We’ll go over each of these types in the future.

## Function
The official Python documentation states that a Function is- “A series of statements which returns some value to a caller.” This may sound complicated, but it’s really not. Put another way- A function contains lines of code that you can call upon to perform a certain task or return some sort of value. Functions in Python follow this syntax-

```python
Function name(optional argument(s))
```

Let’s explore this with the print() function-
![My Photo](C:\Users\hhyle\Desktop\Python\LeetPy\Docusaurus\leetpython\docs\basics-of-python\Hello_World.PNG)

We will talk more in depth about functions and how they’re composed in the future. For now keep in mind how we call a function.

## Method
Now that we know what functions are, we can understand the Official Python definition of methods- they are functions that work for specific objects.

Now we know enough to understand the basic relationship between objects, classes, and functions. We build classes to define an object, and then use methods and functions to manipulate those objects and perform interesting tasks.

Python provides you with the tools to create your own class (and by extension your own objects), methods for that class, and your own functions.
