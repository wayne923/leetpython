# Dictionary
A dictionary in Python is a mutable object that stores an unordered pair of keys and values, called key-value pairs, where each key is mapped to a specific value. It is defined using curly braces `{}`, with keys and values separated by a colon `:`.

Here's an example:

```python
person = {"name": "John", "age": 30, "city": "New York"}
```
Dictionaries may look slightly more daunting than the other types, but once you get a hang of it they're quite easy to understand. Here's a nifty table to explain the key:value pairs in the above example-

| Key  | Value    |
|------|----------|
| name | John     |
| age  | 30       |
| city | New York |

Each key must be unique within a dictionary, but you can have the same value associated with multiple keys. Think of dictionaries as being key oriented- you're using the key to make it easy to find a certain value.

Dictionaries are primarily used for storing and accessing data through unique keys, making data retrieval efficient and straightforward. That's why they're:

* Unordered: The order of items in a dictionary does not affect how it's used or its efficiency. This allows Python to optimize how it stores and retrieves data from dictionaries, focusing on the key-value relationship rather than the order of items.

* Keys must be unique: Each key in a dictionary must be distinct. This uniqueness ensures that each key maps to a specific value, allowing for quick data access. If you try to add a key that already exists, the dictionary will update the existing key with the new value, maintaining the principle of key uniqueness.

* Mutable: Dictionaries allow you to change their content after creation. You can add new key-value pairs, modify the value of existing keys, or delete keys from the dictionary. This mutability makes dictionaries highly flexible for storing and managing data, where the relationships or data itself might change over time.

Most of the possible operations supported by dict objects can be seen in the table below. Feel free to use this as a resource whenever you need to remember what you can do with a dict!

| Operation | Explanation | Example |
|-----------|-------------|---------|
| `list(d)` | Returns a list of all the keys in the dictionary. | `d = {'a': 1, 'b': 2}`<br />`print(list(d)) # Outputs: ['a', 'b']` |
| `len(d)` | Returns the total number of key-value pairs within the dictionary. | `d = {'a': 1, 'b': 2, 'c': 3}`<br />`print(len(d)) # Outputs: 3` |
| `iter(d)` | Returns an iterator over the keys of the dictionary. | `d = {'a': 1, 'b': 2}`<br />`for key in iter(d): print(key)# Outputs: 'a' 'b'` |
| `reversed(d)` | Returns an iterator over the keys of the dictionary in reverse order. Only works if the dictionary is of a type that maintains order, such as collections.OrderedDict or Python 3.7+ standard dictionaries. | `d = {'a': 1, 'b': 2, 'c': 3}`<br />`for key in reversed(d): print(key)# Outputs: 'c' 'b' 'a'` |
| `del d[key]` | Removes a key-value pair from the dictionary. Raises a KeyError if the key is not found. | `d = {'a': 1, 'b': 2}`<br />`del d['a']`<br />`print(d) # Outputs: {'b': 2}` |
| `all(d)` | Returns True if all keys of the dictionary are true (or if the dictionary is empty). | `d = {'a': True, 'b': False}`<br />`print(all(d)) # Outputs: False` |
| `any(d)` | Returns True if any key of the dictionary is true. If the dictionary is empty, return False. | `d = {'a': False, 'b': True}`<br />`print(any(d)) # Outputs: True` |
| `sorted(d)` | Returns a new sorted list of the dictionary’s keys. | `d = {'b': 2, 'c': 3, 'a': 1}`<br />`print(sorted(d)) # Outputs: ['a', 'b', 'c']` |
| `d[key] = value` | Adds a new key-value pair to the dictionary or updates the value if the key already exists. | `d = {'a': 1}`<br />`d['b'] = 2`<br />`print(d) # Outputs: {'a': 1, 'b': 2}` |
| `key in d` | Returns True if the dictionary contains the given key, otherwise returns False. | `d = {'a': 1, 'b': 2}`<br />`print('a' in d) # Outputs: True` |
| `key not in d` | Returns True if the dictionary does not contain the given key, otherwise returns False. | `d = {'a': 1, 'b': 2}`<br />`print('c' not in d) # Outputs: True` |
| `d \| other` | Returns a new dictionary with the merged contents of d and other. If keys overlap, the values from other will be used. | `d1 = {'a': 1}`<br />`d2 = {'b': 2, 'a': 3}`<br />`print(d1 \| d2) # Outputs: {'a': 3, 'b': 2}` |
| `d \|= other` | Updates the dictionary d with the contents of other. If keys overlap, the values from other will be used. | `d1 = {'a': 1}`<br />`d1 \|= {'b': 2, 'a': 3}`<br />`print(d1) # Outputs: {'a': 3, 'b': 2}` |
| `d1 == d2` | Returns True if d1 and d2 have the same key-value pairs, otherwise returns False. | `d1 = {'a': 1, 'b': 2}`<br />`d2 = {'b': 2, 'a': 1}`<br />`print(d1 == d2) # Outputs: True` |
| `d1 != d2` | Returns True if d1 and d2 do not have exactly the same key-value pairs, otherwise returns False. | `d1 = {'a': 1, 'b': 2}`<br />`d2 = {'a': 1, 'b': 3}`<br />`print(d1 != d2) # Outputs: True` |
| `clear()` | Removes all items from the dictionary. | `d = {'a': 1, 'b': 2}`<br />`d.clear()`<br />`print(d) # Outputs: {} (an empty dict)` |
| `copy()` | Returns a shallow copy of the dictionary. | `d = {'a': 1, 'b': 2}`<br />`d2 = d.copy()`<br />`print(d2) # Outputs: {'a': 1, 'b': 2}` |
| `get(key[, default])` | Returns the value for key if key is in the dictionary, else default. If default is not given, it defaults to None. | `d = {'a': 1, 'b': 2}`<br />`print(d.get('c', 3)) # Outputs: 3` |
| `items()` | Returns a view object that displays a list of dictionary's key-value tuple pairs. | `d = {'a': 1, 'b': 2}`<br />`print(list(d.items())) # Outputs: [('a', 1), ('b', 2)]` |
| `keys()` | Returns a view object that displays a list of all the keys in the dictionary. | `d = {'a': 1, 'b': 2}`<br />`print(list(d.keys())) # Outputs: ['a', 'b']` |
| `pop(key[, default])` | Removes the specified key and returns the corresponding value. If key is not found, default is returned if provided, else KeyError is raised. | `d = {'a': 1, 'b': 2}`<br />`print(d.pop('a')) # Outputs: 1`<br />`print(d) # Outputs: {'b': 2}` |
| `popitem()` | Removes and returns a (key, value) pair as a 2-tuple. Pairs are returned in LIFO order if dictionary is 3.7+ or an ordered dictionary. | `d = {'a': 1, 'b': 2}`<br />`print(d.popitem()) # Outputs: ('b', 2)`<br />`print(d) # Outputs: {'a': 1}` |
| `setdefault(key[, default])` | If key is in the dictionary, return its value. If not, insert key with a value of default and return default. default defaults to None. | `d = {'a': 1, 'b': 2}`<br />`print(d.setdefault('c', 3)) # Outputs: 3`<br />`print(d) # Outputs: {'a': 1, 'b': 2, 'c': 3}` |
| `update([other])` | Updates the dictionary with the key-value pairs from other, overwriting existing keys. other can be another dictionary or any iterable of key-value pairs. | `d = {'a': 1}`<br />`d.update({'b': 2, 'a': 3})`<br />`print(d) # Outputs: {'a': 3, 'b': 2}` |
| `values()` | Returns a view object that displays a list of all the values in the dictionary. | `d = {'a': 1, 'b': 2}`<br />`print(list(d.values())) # Outputs: [1, 2]` |