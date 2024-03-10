# Integer and Floats

In Python numbers are their own data type, just like with lists and strings and so on. Python distinguishes between integers and floating-point numbers (called floats), as each serves different purposes in programming. Let's explore these two types of numbers.

## Integers (int)
Integers, or int, are whole numbers that include both positive and negative numbers and zero.

Here are some examples of ints:
```python
x = 10
y = -300
z = 0

print(x, y, z) #Outputs 10 -300 0
```

## Floating-Point Numbers (float)

Floating-point numbers, or float, are real numbers with decimal points that include both positive and negative numbers. They're called floating point numbers because the decimal point can 'float' to any point- 1.00000 is a float, for example, simply because it has a decimal point.

Here are some examples of floats:

```python
a = 10.5
b = -3.142
c = 0.0

print(a, b, c) #Outputs 10.5 -3.142 0.0
```

Both int and floats share the same operations, most of which can be seen in the table below. Feel free to use this as a resource whenever you need to remember what you can do with an int and or a float!

| Operation | Explanation | Example |
|-----------|-------------|---------|
| `x + y` | Adds `x` and `y`. | `print(1 + 2)`  # Outputs: 3 |
| `x - y` | Subtracts `y` from `x`. | `print(10 - 5)`  # Outputs: 5 |
| `x * y` | Multiplies `x` and `y`. | `print(5 * 2)`  # Outputs: 10 |
| `x / y` | Divides `x` by `y`, resulting in a float. | `print(10 / 2)`  # Outputs: 5.0 |
| `x // y` | Divides `x` by `y`, resulting in an integer (floor division). | `print(19 // 2)`  # Outputs: 9 because it always rounds down |
| `x % y` | Returns the remainder of `x` divided by `y`. | `print(25 % 10)`  # Outputs: 5 |
| `-x` | Negates `x`. | `print(-1)`  # Outputs: -1 |
| `+x` | Returns `x`, usually unchanged (unary plus). | `print(+1)`  # Outputs: 1 |
| `abs(x)` | Returns the absolute value of `x`. | `print(abs(-1))`  # Outputs: 1 |
| `int(x)` | Converts `x` to an integer. | `print(int(5.7))`  # Outputs: 5 |
| `float(x)` | Converts `x` to a float. | `print(float(5))`  # Outputs: 5.0 |
| `divmod(x, y)` | Returns a tuple `(quotient, remainder)` of dividing `x` by `y`. | `print(divmod(15, 10))`  # Outputs: (1, 5) |
| `pow(x, y)` | Raises `x` to the power of `y`. | `print(pow(2, 4))`  # Outputs: 16 |
| `x ** y` | Raises `x` to the power of `y` (equivalent to `pow(x, y)`). | `print(2 ** 4)`  # Outputs: 16 |