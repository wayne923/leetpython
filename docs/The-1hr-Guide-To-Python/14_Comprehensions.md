# Comprehensions

As you code and program with Python you'll often find yourself working with collections of data- lists of numbers, sets of unique items, dictionaries of key-value pairs, and even generating sequences on the fly with generators and you'll need to transform this data somehow.

While conditional statements such as if statements and for loops are the typical tools used for such tasks, Python provides an even more concise and efficient approach- comprehensions.

Comprehensions allow you to create new list/set/dictionary/generator objects by applying an opertion and/or a condition to the given iterable.

The beauty of comprehensions lie in their ability to replace multi-line conditional statements  with a single, clear line of code, making your code more Pythonic. It may take some time to get used to its syntax, but once you do you'll undoubtedly find them very valuable.

There are four types of comprehensions available in Python—list, set, dictionary, and generator expressions. They all share similar syntaxes and characteristics, so let's explore their commonalities before moving onto each individually.

## Comprehensions Explained

At its core comprehension are a more condensed way of writing conditional statements. Let's explore this by looking at a sample list comprehension and its syntax-

```python
#This list comprehension iterates through each item in iterable and returns it as an item in a new list.
[expression for item in iterable]
```

* Iterable: The iterable is a collection of items that you want to process, such as a list, tuple, or any object that supports iteration.

* Item: The item currently being operated upon by the expression.

* Expression: This is the operation applied to each item.

And here's its for loop equivalent-

```python
#This for loop iterates through each item in iterable and appends it to new_list
new_list = []
for item in iterable:
    new_list.append(expression)
```





Let's explore the four types of comprehensions available in Python—list, set, dictionary, and generator expressions—and see how each can be used to elegantly handle common data manipulation tasks. 


## List Comprehension


