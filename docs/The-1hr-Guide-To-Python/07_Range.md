# Range

Range differs from typical objects like lists and tuples in that it’s not actually an object that you can assign an ordered sequence of objects to, but rather a special object type that represents an immutable sequence of integers. It is created with the range() function and uses an identical syntax to slicing.

```Python
Range[start:stop:step]
```

The start parameter is at the index value to begin slicing from.

The stop parameter is the index value to stop slicing at.

The step parameter tells Python to return every ‘step’, so a value of 2 would mean “return every 2nd item”

But unlike slicing range must have the stop parameter. Therefore, range automatically assumes it has a stop parameter if it's only given one parameter, then a start:stop if given two parameters, and finally the start:stop:step if given all three parameters.

Ranges are more memory efficient than other sequence types like lists or tuples because it doesn't store all of its value in memory, instead generating them whenever they're needed. This makes ranges much better for code performance, particularly when the range() is storing a very large number.

## How to get values from a range

Since a range is a special object that represents an immutable sequence of integers, directly printing a range object won't display the sequence of integers as you might initially expect-
```Python
range1=range(10)
print(range1) # Outputs: range(0, 10)
```

Instead, it returns a representation of the range object itself.

There are several methods to retrieve and display the actual sequence of numbers in the range-

### Convert the value into a sequence type like a list or tuple
```Python
range1=range(10)
print(list(range1)) # Outputs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(tuple(range1)) # Outputs: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

### Access the range through sequence indexing and slicing
```Python
#Through sequence indexing
range1 = range(10)
print(range1[2])  # Outputs: 2 (Don't forget that indexes start at 0!)

#Through sequence slicing
range2 = range1[0:4]
print(list(range2))  # Outputs: [0, 1, 2, 3]
```
### Iterating over a range

```Python
range1 = range(10)
for number in range1:
    print(number, end=' ')  # Outputs: 0 1 2 3 4 5 6 7 8 9
```

Range supports the standard sequence operations, along with several built-in functions and its own built-in methods. All the possible operations supported by range objects can be seen in the table below. Feel free to use this as a resource whenever you need to remember what you can do with a range!

| Operation | Explanation | Example |
|-----------|-------------|---------|
| `num in range` | Returns True if the num exists in the range. Otherwise returns False. | `print(5 in range(10))`  # Outputs: True |
| `num not in range` | Returns True if the num doesn’t exist in the range. Otherwise returns False. | `print(15 not in range(10))`  # Outputs: True |
| `range[value]` | Returns the number located at the specified index value. | `print(range(10)[5])`  # Outputs: 5 |
| `range[value start:end]` | Returns a range containing numbers from the start index value up to, but not including, the end index value. | `print(list(range(10)[2:7]))`  # Outputs: [2, 3, 4, 5, 6] |
| `range[value start:end:step over]` | Returns a range containing the numbers from the start index up to, but not including, the end index, with a step value that tells it to return every 'step'. | `print(list(range(0, 20, 2)[2:7]))`  # Outputs: [4, 6, 8, 10, 12] |
| `len(range)` | Returns the total number of numbers within the range. | `print(len(range(10)))`  # Outputs: 10 |
| `min(range)` | Returns the smallest number within the range. | `print(min(range(5, 10)))`  # Outputs: 5 |
| `max(range)` | Returns the largest number within the range. | `print(max(range(5, 15)))`  # Outputs: 14 |