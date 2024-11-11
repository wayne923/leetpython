---
title: "Strings"
description: "Master the fundamentals of strings in Python. Learn how to define, format, and manipulate strings using various methods and operations."
keywords: [Python strings, string definition, string formatting, string manipulation, string methods, string operations, escape sequences, f-strings, Python programming basics]
---

# Strings

A string is an immutable object that contains a sequence of characters, where each character is its own object.

## Defining a String

In Python, strings can be defined in several ways, each with its unique advantages:

* Single quotes `' '` and double quotes `" "`are the two most common ways to define a string, and while there's no real functional difference between the two escape sequences mean it's typically easier to use `" "`

* Triple quotes `''' '''` or `""" """` allow your strings to span across multiple lines, including line breaks, without the need for an explicit newline character `\n`. This makes them useful in writing readable documentation in Python, and are commonly used for docstrings in Python functions, classes, and modules.

Here are some examples of these in action:


```python
# Single and double quotes
print('Hello, world!')
print("Python programming is fun.")

# Triple quotes for multi-line strings
print('''This is a multi-line string.

It spans more than one line.''')
```

## Escape Sequences

Suppose you want to print the following:

```python
print('How's your day going?') #Outputs SyntaxError: invalid character '‘'
```

The quotation mark `'` inside the print statement causes Python to think that it should be closing the string, causing it to output a syntax error. So then, how do we handle this? We can do so with escape sequences, and in this specific case `\`:

```python
print('How\'s your day going?')
```

If you want to include a backslash `\` into your code you can simply use `\\`:

There's in fact many kinds of escape sequence commands. Most of them perform specialized action for string formatting and so fall outside the scope of this tutorial. You can find them here if you're curious-
https://docs.python.org/3/reference/lexical_analysis.html#escape-sequences


## String Formatting

You may have situations where you want to be able to customize certain details within a string while keeping other parts generic. You can do so with string formatting- allowing you to construct dynamic strings by inserting values into them.

While there are several methods of string formatting, the two most modern and useful methods are:

### .format() Method
The .format() method uses curly braces `{}` as placeholders within the string for the values you want to pass into them with via .format().
 Here's an example:

```python
txt=’Welcome {} and {}!’
print(txt.format(‘John’,’Jane’)) #Outputs Welcome John and Jane!
```

The .format() method can take in any number of arguments, but keep in mind that the number of arguments inserted into .format() needs to match the number of arguments required within the string, otherwise you'll get an error.

### Formatted String Literals (f-strings)

Introduced first in Python 3.6,f-strings offer a more concise and readable way to include expressions inside string literals. It also uses curly braces `{}` to embed variables directly within the string. 

Here it is in action:

```python
name=’John’
print(f’Hello {name}!’)
returns Hello John!
```

Both methods are highly versatile and have their pros and cons.
* f-strings, while less versatile than .format(), creates more readable code, making it a popular choice for simple formatting tasks.
* .format(), while less readable and requiring more code, is much more versatile- allowing for complex value formatting and more reusable  code-making it ideal for creating data tables or applying the same format repeatedly to different data.

Which one you end up using will ultimately be about your preferences!

Most of the possible operations supported by dict objects can be seen in the table below. Feel free to use this as a resource whenever you need to remember what you can do with a dict!

| Operation | Explanation | Example |
|-----------|-------------|---------|
| `x in s` | Returns True if the character or substring `x` exists in the string `s`. Otherwise returns False. | `print('a' in 'apple')`  # Outputs: True |
| `x not in s` | Returns True if the character or substring `x` doesn’t exist in the string `s`. Otherwise returns False. | `print('b' not in 'apple')`  # Outputs: True |
| `s + t` | Concatenates strings `s` and `t` together. | `print('hello' + ' ' + 'world')`  # Outputs: 'hello world' |
| `s * n` | Repeats the string `s` `n` number of times. | `print('ha' * 3)`  # Outputs: 'hahaha' |
| `s[index value]` | Returns the character located at the specified `index value` in the string `s`. | `print('apple'[2])`  # Outputs: 'p' |
| `s[index value start:end]` | Returns a substring from the string `s` starting at `index value start` up to, but not including, `index value end`. | `print('hello world'[6:11])`  # Outputs: 'world' |
| `s[index value start:end:step over]` | Returns a substring from `s` starting at `index value start` up to, but not including, `index value end`, with characters selected at intervals of `step over`. | `print('hello world'[0:11:2])`  # Outputs: 'hlowrd' |
| `len(s)` | Returns the length of the string `s`. | `print(len('hello'))`  # Outputs: 5 |
| `min(s)` | Returns the smallest character in string `s` based on alphabetical order. | `print(min('banana'))`  # Outputs: 'a' |
| `max(s)` | Returns the largest character in string `s` based on alphabetical order. | `print(max('banana'))`  # Outputs: 'n' |
| `s.index(x[, i[, j]])` | Returns the lowest index in `s` where substring `x` is found, optionally within the slice `s[i:j]`. Raises ValueError if `x` is not found. | `print('hello'.index('e'))`  # Outputs: 1 |
| `s.count(x)` | Returns the number of non-overlapping occurrences of substring `x` in `s`. | `print('hello world'.count('l'))`  # Outputs: 3 |
| `str.capitalize()` | Returns a copy of `str` with its first character capitalized and the rest in lowercase. | `print('hello world'.capitalize())`  # Outputs: 'Hello world' |
| `str.casefold()` | Returns a case-folded copy of `str`, used for caseless matching. This is more aggressive than `str.lower()` and is intended to remove all case distinctions. | `print('Hello World'.casefold())`  # Outputs: 'hello world' |
| `str.center(width[, fillchar])` | Returns a centered string of length `width`. Padding is done using the specified `fillchar` (default is a space). | `print('apple'.center(10, '-'))`  # Outputs: '--apple---' |
| `str.count(sub[, start[, end]])` | Returns the number of non-overlapping occurrences of substring `sub` in the string, optionally restricted to a substring if `start` and `end` are provided. | `print('banana'.count('a'))`  # Outputs: 3 |
| `str.encode(encoding='utf-8', errors='strict')` | Encodes the string using the specified `encoding` scheme, with `errors` defining the error handling scheme. | `print('hello'.encode())`  # Outputs: b'hello' |
| `str.endswith(suffix[, start[, end]])` | Returns True if the string ends with the specified `suffix`, optionally restricted to a substring if `start` and `end` are provided. | `print('hello'.endswith('o'))`  # Outputs: True |
| `str.expandtabs(tabsize=8)` | Replaces tabs in the string with the number of spaces specified by `tabsize`. | `print('hello\\tworld'.expandtabs(4))`  # Outputs: 'hello\tworld' |
| `str.find(sub[, start[, end]])` | Returns the lowest index in the string where substring `sub` is found, such that `sub` is contained within `s[start:end]`. Returns -1 if `sub` is not found. | `print('hello world'.find('world'))`  # Outputs: 6 |
| `str.format(*args, **kwargs)` | Formats the string using `args` and `kwargs` based on the placeholders defined in the string. | `print('{name} is {age} years old.'.format(name='John', age=25))`  # Outputs: 'John is 25 years old.' |
| `str.format_map(mapping)` | Similar to `str.format(**mapping)`, it formats the string, but uses a dictionary instead of unpacking keyword arguments. | `print('{name} is {age} years old.'.format_map({'name': 'John', 'age': 25}))`  # Outputs: 'John is 25 years old.' |
| `str.index(sub[, start[, end]])` | Similar to `str.find()`, but raises `ValueError` when the substring `sub` is not found. | `print('hello world'.index('world'))`  # Outputs: 6 |
| `str.isalnum()` | Returns True if all characters in the string are alphanumeric (letters and numbers) and there is at least one character, False otherwise. | `print('hello123'.isalnum())`  # Outputs: True |
| `str.isalpha()` | Returns True if all characters in the string are alphabetic. Otherwise returns False. | `print('hello'.isalpha())`  # Outputs: True |
| `str.isascii()` | Returns True if all characters in the string are ASCII. Otherwise returns False. | `print('hello'.isascii())`  # Outputs: True |
| `str.isdecimal()` | Returns True if all characters in the string are decimal characters. Otherwise returns False. | `print('123'.isdecimal())`  # Outputs: True |
| `str.isdigit()` | Returns True if all characters in the string are digits. Otherwise returns False. | `print('123'.isdigit())`  # Outputs: True |
| `str.isidentifier()` | Returns True if the string is a valid identifier according to Python's naming rules. Otherwise returns False. | `print('var_1'.isidentifier())`  # Outputs: True |
| `str.islower()` | Returns True if all cased characters in the string are lowercase and there is at least one cased character. Otherwise returns False. | `print('hello'.islower())`  # Outputs: True |
| `str.isnumeric()` | Returns True if all characters in the string are numeric characters. Otherwise returns False. | `print('12345'.isnumeric())`  # Outputs: True |
| `str.isprintable()` | Returns True if all characters in the string are printable or the string is empty. Otherwise returns False. | `print('Hello!'.isprintable())`  # Outputs: True |
| `str.isspace()` | Returns True if there are only whitespace characters in the string and there is at least one character. Otherwise returns False. | `print('   '.isspace())`  # Outputs: True |
| `str.istitle()` | Returns True if the string is titled (every word starts with an uppercase letter, and all other letters in the word are lowercase). Otherwise returns False. | `print('Hello World'.istitle())`  # Outputs: True |
| `str.isupper()` | Returns True if all cased characters in the string are uppercase and there is at least one cased character. Otherwise returns False. | `print('HELLO'.isupper())`  # Outputs: True |
| `str.join(iterable)` | Concatenates an iterable of strings into a single string, separated by the string `str`. | `print(', '.join(['apple', 'banana', 'cherry']))`  # Outputs: 'apple, banana, cherry' |
| `str.ljust(width[, fillchar])` | Returns a left-justified version of the string `str` padded with `fillchar` to a total of `width` characters. | `print('left'.ljust(10, '-'))`  # Outputs: 'left------' |
| `str.lower()` | Converts all uppercase characters in `str` to lowercase. | `print('APPLE'.lower())`  # Outputs: 'apple' |
| `str.lstrip([chars])` | Returns a copy of `str` with leading characters removed (default whitespace characters if `chars` is not specified). | `print('   spacious   '.lstrip())`  # Outputs: 'spacious   ' |
| `str.maketrans(x[, y[, z]])` | Returns a translation table to be used in translations. | `translation_table = str.maketrans('aeiou', '12345')`<br /> `s = 'Hello, world!`<br />`print(s.translate(translation_table))` # Outputs: 'H2ll4, w4rld!' |
| `str.partition(sep)` | Splits `str` at the first occurrence of `sep`, and returns a 3-tuple containing the part before the separator, the separator itself, and the part after the separator. | `print('apple-pear'.partition('-'))`  # Outputs: ('apple', '-', 'pear') |
| `str.removeprefix(prefix, /)` | Removes the `prefix` from the start of `str` if present. | `print('HelloWorld!'.removeprefix('Hello'))`  # Outputs: 'World!' |
| `str.removesuffix(suffix, /)` | Removes the `suffix` from the end of `str` if present. | `print('HelloWorld!'.removesuffix('World!'))`  # Outputs: 'Hello' |
| `str.replace(old, new[, count])` | Replaces occurrences of `old` with `new` in `str`, replacing all occurrences unless `count` is given. | `print('hello world'.replace('world', 'Python'))`  # Outputs: 'hello Python' |
| `str.rfind(sub[, start[, end]])` | Returns the highest index of `str` where substring `sub` is found, such that `sub` is contained within `str[start:end]`. Returns -1 on failure. | `print('hello hello'.rfind('lo'))`  # Outputs: 9 |
| `str.rindex(sub[, start[, end]])` | Like `str.rfind()` but raises `ValueError` when the substring `sub` is not found. | `print('hello'.rindex('e'))`  # Outputs: 1 |
| `str.rjust(width[, fillchar])` | Returns a right-justified version of the string `str` padded with `fillchar` to a total of `width` characters. | `print('right'.rjust(10, '-'))`  # Outputs: '-----right' |
| `str.rpartition(sep)` | Splits `str` at the last occurrence of `sep`, and returns a 3-tuple containing the part before the separator, the separator itself, and the part after the separator. | `print('apple-pear-banana'.rpartition('-'))`  # Outputs: ('apple-pear', '-', 'banana') |
| `str.rsplit(sep=None, maxsplit=-1)` | Returns a list of the words in the string `str`, using `sep` as the delimiter string. If `maxsplit` is given, at most `maxsplit` splits are done. | `print('apple pear banana'.rsplit(' ', 1))`  # Outputs: ['apple pear', 'banana'] |
| `str.rstrip([chars])` | Returns a copy of `str` with trailing characters removed (default whitespace characters if `chars` is not specified). | `print('   Hello!   '.rstrip())`  # Outputs: '   Hello!' |
| `str.split(sep=None, maxsplit=-1)` | Returns a list of the words in the string `str`, using `sep` as the delimiter string. If `maxsplit` is given, at most `maxsplit` splits are done. | `print('one two three'.split(' ', 1))`  # Outputs: ['one', 'two three'] |
| `str.splitlines(keepends=False)` | Splits the string at line breaks and returns a list of the lines in the string. If `keepends` is True, line breaks are included in the resulting list. | `print('Hello\nWorld'.splitlines())`  # Outputs: ['Hello', 'World'] |
| `str.startswith(prefix[, start[, end]])` | Returns True if the string starts with the specified `prefix`. Optionally, checking can start from `start` and end at `end` index positions. | `print('Hello world'.startswith('He'))`  # Outputs: True |
| `str.strip([chars])` | Returns a copy of the string with the leading and trailing characters removed. The `chars` argument is a string specifying the set of characters to be removed. | `print('   hello   '.strip())`  # Outputs: 'hello' |
| `str.swapcase()` | Returns a copy of the string with uppercase characters converted to lowercase and vice versa. | `print('Hello World'.swapcase())`  # Outputs: 'hELLO wORLD' |
| `str.title()` | Returns a titlecased version of the string where the first character in each word is uppercase and remaining characters are lowercase. | `print('hello world'.title())`  # Outputs: 'Hello World' |
| `str.translate(table)` | Returns a copy of the string in which each character has been mapped through the given translation table. | `translation_table = str.maketrans('aeiou', '12345')`<br /> `s = 'Hello, world!`<br />`print(s.translate(translation_table))` # Outputs: 'H2ll4, w4rld!' |
| `str.upper()` | Converts all lowercase letters in the string to uppercase. | `print('hello'.upper())`  # Outputs: 'HELLO' |
| `str.zfill(width)` | Returns a copy of the string left filled with '0' digits to make a string of length `width`. | `print('24'.zfill(5))`  # Outputs: '00024' |