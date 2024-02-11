# Objects and Variables

One of the key features and strengths of Python is that its data can be incredibly versatile. The key to this is its object types. Objects are anything in Python that can be assigned to a variable or passed into a function as an argument. This essentially means that almost everything in Python is an object!

## Built-in Object Types

Let’s first go over the built-in objects with defined types in Python. These are the most commonly used ones you’ll interact with:

- **Numeric:** `int`, `float`
- **Boolean:** `True` or `False`
- **Text Sequence:** `str`
- **Sequence:** `list`, `tuple`, `range`
- **Set:** `set`
- **Mapping:** `dictionary`
- **Function:** `function`

We’ll explore each of these types shortly, but first let’s continue setting down the foundation by exploring what a variable is.

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