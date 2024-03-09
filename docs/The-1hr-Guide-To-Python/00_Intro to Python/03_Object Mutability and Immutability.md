# Object Mutability and Immutability

All Python objects are either mutable or immutable, which is just a fancy way of saying that some objects can change after you create them, while others cannot be changed once you create them. Understanding the difference the different between mutable and immutable objects is key to avoiding unexpected bugs or behavior in your code, and helps further your knowledge of Python coding and when to use certain objects.

Let's now dive deeper into this concept by looking at the difference between two common data types: lists and tuples.

Lists in Python are mutable, meaning you can change their contents after creating the list. Tuples, on the other hand, are immutable; once you create a tuple, you cannot alter its contents.

Let's see this in action-

```python

list1=[1,2,3,4,5]
list1[0]=22
print(list1) #Outputs: [22,2,3,4,5]


tuple1=1,2,3,4,5
tuple1[0]=22
print(tuple1) #Outputs: TypeError: 'tuple' object does not support item assignment
```

We can modify the first item in the list, while attempting the same modification on a tuple results in a TypeError that explicitly tells us that tuples objects do not support item assignment.

Understanding the difference between the two types helps inform when you want to use them- you may want to use a list when you plan on changing its contents frequently, whereas you may use a tuple when you don't ever want its contents to change.

