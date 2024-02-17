# Sequence Indexes and Slicing

## Sequence Indexing

Python, being the super flexible language it is, gives you the power to access virtually every element within a sequence object in a straightforward and intuitive manner. This is done through two concepts- sequence indexes and slicing. Let’s explore what these are.

An index refers to the position of a particular item within the sequence, and we can refer to that particular item through its index by following this syntax-

```python
Sequence Object[index value]
```

It's crucial to remember that indexing starts at 0 in Python. This means the first item in any sequence is accessed at index 0, setting the stage for the two indexing methods: positive and negative indexing. 

Positive indexing starts at the front of the sequence, with the first item as index 0.

Negative indexing starts at the end of the sequence, with the last item as index -1.

This may be quite difficult to visualize at first, so let’s use these handy visual guides to help!

## Sequences and Their Positive Index Positions

| Object Type | Content       | seq obj[0] | [1] | [2] | [3] | [4] | [5] |
|-------------|---------------|------------|-----|-----|-----|-----|-----|
| String      | "Python"      | P          | y   | t   | h   | o   | n   |
| List        | [0,1,2,3,4,5] | 0          | 1   | 2   | 3   | 4   | 5   |
| Tuple       | (0,1,2,3,4,5) | 0          | 1   | 2   | 3   | 4   | 5   |
| Range       |  range(0,6)   | 0          | 1   | 2   | 3   | 4   | 5   |

## Sequences and Their Negative Index Positions

| Object Type | Content       | seq obj[-6] | [-5] | [-4] | [-3] | [-2] | [-1] |
|-------------|---------------|-------------|------|------|------|------|------|
| String      | "Python"      | P           | y    | t    | h    | o    | n    |
| List        | [0,1,2,3,4,5] | 0           | 1    | 2    | 3    | 4    | 5    |
| Tuple       | (0,1,2,3,4,5) | 0           | 1    | 2    | 3    | 4    | 5    |
| Range       | (0,6)         | 0           | 1    | 2    | 3    | 4    | 5    |

We can select a portion of a sequence object by using the slice notation, which uses the following syntax-

```Python
Sequence Object[start:stop:step]
```

## Sequence Slicing

The start parameter is at the index value to begin slicing from.

The stop parameter is the index value to stop slicing at.

The step parameter tells Python to return every ‘step’, so a value of 2 would mean “return every 2nd item”

Slicing parameters can get quite confusing, so here is a quick cheat sheet-
* Slicing is inclusive of the start value and exclusive of the stop value. In simpler terms, this means that the item at the start value is included in the slice while the stop value is not included in the slice.
* You can omit any of the start:stop:step parameters you’d like.
    * Omitting the start parameter automatically starts at the slice at the beginning of the sequence
    * Omitted the stop parameter automatically extends the slice to the end of the sequence.
    * Omitting the step parameter defaults it to a value of 1- meaning that it doesn’t skip over anything.
* Negative Indices: Just as with individual indexing, negative values can be used in slicing, which can get really confusing real quick.

As with indexing, these can be quite difficult to visualize, so here's some more visual guides to help!

## Positive Slicing

| Object Type | Content    | Slicing     | Result   | seq obj[0] | [1] | [2] | [3] | [4] | [5] |
|-------------|------------|-------------|----------|------------|-----|-----|-----|-----|-----|
| String      | "Python"   | string[1:]  | ython         |       | y   | t   | h   | o   | n   |
| String      | "Python"   | string[:-1] | Pytho         | P     | y   | t   | h   | o   |     |
| String      | "Python"   | string[:-2] | Pto           | P     |     | t   |     | o   |     |
| List        | [0,1,2,3,4,5] | list[1:] | [1,2,3,4,5]   |       | 1   | 2   | 3   | 4   | 5   |
| List        | [0,1,2,3,4,5] | list[:-1] | [0,1,2,3,4]  | 0     | 1   | 2   | 3   | 4   |     |
| List        | [0,1,2,3,4,5] | list[:-2] | [0,2,4]      | 0     |     | 2   |     | 4   |     |
| Tuple       | (0,1,2,3,4,5) | tuple[1:] | (1,2,3,4,5)  |       | 1   | 2   | 3   | 4   | 5   |
| Tuple       | (0,1,2,3,4,5) | tuple[:-1] | (0,1,2,3,4) | 0     | 1   | 2   | 3   | 4   |     |
| Tuple       | (0,1,2,3,4,5) | tuple[:-2] | (0,2,4)     | 0     |     | 2   |     | 4   |     |

## Negative Slicing

| Object Type | Content       | Slicing      | Result     | seq obj[-6] | [-5] | [-4] | [-3] | [-2] | [-1] |
|-------------|---------------|--------------|------------|-------------|------|------|------|------|------|
| String      | "Python"      | string[-5:]  | ython      |             | y    | t    | h    | o    | n    |
| String      | "Python"      | string[:-1]  | Pytho      | P           | y    | t    | h    | o    |      |
| String      | "Python"      | string[::-2]  | nhy       |             | y    |      | h    |      | n    |
| List        | [0,1,2,3,4,5] | list[-5:]    | [1,2,3,4,5]|             | 1    | 2    | 3    | 4    | 5    |
| List        | [0,1,2,3,4,5] | list[:-1]    | [0,1,2,3,4]| 0           | 1    | 2    | 3    | 4    |      |
| List        | [0,1,2,3,4,5] | list[::-2]    | [5,3,1]   |             | 1    |      | 3    |      | 5    |
| Tuple       | (0,1,2,3,4,5) | tuple[-5:]   | (1,2,3,4,5)|             | 1    | 2    | 3    | 4    | 5    |
| Tuple       | (0,1,2,3,4,5) | tuple[:-1]   | (0,1,2,3,4)| 0           | 1    | 2    | 3    | 4    |      |
| Tuple       | (0,1,2,3,4,5) | tuple[::-2]   | (5,3,1)   |             | 1    |      | 3    |      | 5    |