# Operators

Python possesses a number of operators, or symbols, that are used to perform various operations on objects. Many of them are very important for efficient Python programming, so in this section we’ll go over the ones that everyone should be familiar with. Don’t worry about memorizing all of them. Use this as an opportunity to see what exists and use this page as a reference to remind yourself!

## Arithmetic Operators

Arithmetic operators perform the typical mathematical operations you may be familiar with when used with integer and float. Certain operators can also perform operations with certain other types. This functionality can be very useful, and we’ll discuss which operators work on which object type in their respective segments.

| Arithmetic Operator | Description                                          | Example                   |
|---------------------|------------------------------------------------------|---------------------------|
| `a + b`             | Adds a and b together                                | `1 + 2 = 3`               |
| `a - b`             | Subtracts b from a                                   | `1 - 2 = -1`              |
| `a * b`             | Multiples a and b together                           | `1 * 2 = 2`               |
| `a / b`             | Divides a by b                                       | `1 / 2 = 0.5`             |
| `a % b`             | Performs a modulo division of a by b                 | `7 % 3 = 1`               |
| `a ** b`            | Raises a to the power of b                           | `2 ** 3 = 8`              |
| `a // b`            | Performs a floor division of a by b                  | `1 // 2 = 0`              |

## Logical Operators

Logical operators perform logical operations on values and return a boolean value (True or False). They're fundamental in decision making, helping you create code that operates based on whether certain conditions are met.

| Logical Operator | Description                                                                   | Example                             |
|------------------|-------------------------------------------------------------------------------|-------------------------------------|
| `A and B`        | Returns True if both given statements are True. Otherwise, it returns False.  | `x = 5` <br /> `print(x > 4 and x < 8)` <br /> #Outputs True|
| `A or B`         | Returns True if at least one of the given statements is True.                 | `x = 5` <br />  `print(x > 4 or x < 8)` <br /> #Outputs True|
| `A not B`        | Reverses the statement.                                                       | `x = 5` <br /> `print(x > 4 not x < 8)` <br /> #Outputs False <br /> `x=1` <br /> `print(not(x>1 and x<8))` <br /> #Outputs True|

## Comparison Operators

Comparison operators perform comparison operations on values and return a boolean value (True or False). They help you create codes that operate based on the relationship between objects.

| Comparison Operator | Description | Example |
|---------------------|-------------|---------|
| `A == B` | Returns True if A equals B. Otherwise, it returns False. | `x = 5`<br />`print(x == 5)` # Outputs True<br />`print(x == 4)` # Outputs False |
| `A != B` | Returns True if A does not equal B. Otherwise, it returns False. | `x = 5`<br />`print(x != 5)` # Outputs False<br />`print(x != 4)` # Outputs True |
| `A > B` | Returns True if A is greater than B. Otherwise, it returns False. | `x = 5`<br />`print(x > 3)` # Outputs True<br />`print(x > 6)` # Outputs False |
| `A < B` | Returns True if A is less than B. Otherwise, it returns False. | `x = 5`<br />`print(x < 3)` # Outputs False<br />`print(x < 6)` # Outputs True |
| `A >= B` | Returns True if A is greater than or equal to B. Otherwise, it returns False. | `x = 5`<br />`print(x >= 5)` # Outputs True<br />`print(x >= 6)` # Outputs False |
| `A <= B` | Returns True if A is less than or equal to B. Otherwise, it returns False. | `x = 5`<br />`print(x <= 5)` # Outputs True<br />`print(x <= 6)` # Outputs True |

## Identity Operators

Identity operators perform identity operations on values and return a boolean value (True or False).

| Identity Operators | Description | Example |
|--------------------|-------------|---------|
| `A is B` | Returns True if A is the same exact object as B. Otherwise, it returns False. | `x = 5`<br />`print(x is 5)` # Outputs True |
| `A is not B` | Returns True if A is not the same object as B. Otherwise, it returns False. | `x = 5`<br />`print(x is not 5)` # Outputs True |

It’s important to note that the == operator and is operator are not the same. The == operator compares the values of two objects, while the is operator compares the identities of the two objects. Here’s a good example-

```python
list1=[1,2,3]
list2=[1,2,3]
print(list1 is list2)#Outputs False
print(list1==list2) #Outputs True
```

list1==list2 outputs True because both lists contain the same values, while list1 is list2 outputs False because the two lists are two distinct objects, which we know because they’re assigned to different variables.

## Membership Operators

Membership operators perform membership operations on values and return a boolean value (True or False). They’re very important when working with data structures such as lists and strings, allowing for concise and readable code that checks whether certain objects are in those data structures.

| Membership Operator | Description | Example |
|---------------------|-------------|---------|
| `A in B` | Returns True if A is inside sequence type object B. Otherwise, it returns False. | `x = 1`<br />`list1 = [1, 2, 3]`<br />`print(1 in list1)`<br /># Outputs True |
| `A not in B` | Returns True if A is not inside sequence type object B. Otherwise, it returns False. | `x = 5`<br />`list1 = [1, 2, 3]`<br />`print(5 not in list1)`<br /># Outputs True |

"Whew, that's a lot of operators! This may seem overwhelming right now, but don't worry! As you start working through examples and applying these operators in different scenarios, their uses and nuances will become much clearer. Think of each operator as a tool in your programming toolkit, each with its own purpose and best use case.
So, take a deep breath, and let’s continue our journey! Next up is Object Mutability and Immutability!