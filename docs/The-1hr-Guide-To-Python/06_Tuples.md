# Tuples

A tuple is an immutable object that contains an ordered sequence of objects (essentially making it an immutable list) and is formally defined by the use of commas. This means that this is perfectly fine Python code-

```Python
numbers=1,2,3,4,5
```

But you’ll always see tuples defined using parentheses (), and Python will always output tuples with (). This is to help clearly identify tuples, especially when the code becomes complex. Thus the above code can be considered identical to-

```Python
numbers=(1,2,3,4,5)
```

Tuples support all the standard immutable sequence operations, along with the standard built-in function and its own built-in methods. All the possible operations supported by tuple objects can be shown in the table below. Feel free to use this as a resource whenever you need to remember what you can do with a tuple!

| Operation | Explanation | Example |
|-----------|-------------|---------|
| `tuple1+tuple2` | Concatenates (combines) tuple1 and tuple2 together and returns a new tuple. Can combine multiple tuples. | `tuple1 = (1, 2, 3)`<br />`tuple2 = (4, 5, 6)`<br />`print(tuple1 + tuple2)`  # Outputs: `(1, 2, 3, 4, 5, 6)` |
| `tuple * number` or `number * tuple` | Returns a new tuple that has the items within the tuple repeated ‘number’ of times. | `tuple1 = (1, 2, 3)`<br />`print(tuple1 * 3)`  # Outputs: `(1, 2, 3, 1, 2, 3, 1, 2, 3)` |
| `Item in tuple` | Returns True if the item exists in the tuple. Otherwise returns False. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(3 in tuple1)`  # Outputs: True |
| `item not in tuple` | Returns True if the item doesn’t exist in the tuple. Otherwise returns False. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(6 not in tuple1)`  # Outputs: True |
| `tuple[index value]` | Returns the item located at the specified index value. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(tuple1[3])`  # Outputs: 4 |
| `tuple[index value start:end]` | Returns a tuple containing items from the start index value up to, but not including, the end index value. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(tuple1[1:4])`  # Outputs: (2, 3, 4) |
| `tuple[index value start:end:step over]` | Returns a tuple containing the index start value up to, but not including, the end index value. Step over value defines how many items to ‘step over’ | `tuple1 = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)`<br />`print(tuple1[1:9:2])`  # Outputs: (2, 4, 6, 8) |
| `tuple.index(item,index value start, end)` | Returns the index value of the first instance of item in the tuple. Optional parameters set the index value to start and end the search. | `tuple1 = (1, 2, 3, 4, 3, 6, 7, 8, 9, 10)`<br />`print(tuple1.index(3, 3, 8))`  # Outputs: 4 |
| `len(tuple)` | Returns the total number of items within the tuple. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(len(tuple1))`  # Outputs: 5 |
| `min(tuple)` | Returns the smallest item within the tuple. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(min(tuple1))`  # Outputs: 1 |
| `max(tuple)` | Returns the largest item within the tuple. | `tuple1 = (1, 2, 3, 4, 5)`<br />`print(max(tuple1))`  # Outputs: 5 |
| `tuple.count(item)` | Returns the total number of times the item appears in the tuple. | `tuple1 = (1, 2, 3, 2, 5, 2)`<br />`print(tuple1.count(2))`  # Outputs: 3 |