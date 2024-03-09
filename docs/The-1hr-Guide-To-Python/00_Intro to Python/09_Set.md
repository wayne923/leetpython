# Set

A set is a mutable object that contains an unordered collection of unique objects that is defined by the use of curly braces `{}`. Since dictionaries also use curly braces, Python defines an empty set with its built-in function definition `set()`.

```python
numbers = {1, 2, 3, 4, 5}
```

Sets are primarily used for membership testing between different collections of objects. This is what they're-

* unordered- orders don't matter if you're comparing whether certain objects exist in one set vs another.
* cannot contain duplicates- comparing duplicates can waste valuable resources.
* mutable- this allows you to update sets and reuse them as needed.

Another important distinction between sets and lists or tuples is that sets can only contain immutable objects. This restriction is tied to the intended use case of sets: since sets are collections of unique objects, they need a reliable way to ensure each object within them remains unique. This is only possible if the objects do not change over time, meaning they must be immutable. Immutable objects provide a consistent identity that the set can use to maintain uniqueness, as their state cannot be altered once created. In contrast, mutable objects could change after being added to the set, potentially leading to duplicates or issues in determining uniqueness, which contradicts the fundamental principle of sets.

Sets support all the standard sequence operations, along with several built-in functions and its own built-in methods. Most of the possible operations supported by set objects can be seen in the table below. Feel free to use this as a resource whenever you need to remember what you can do with a set!

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
