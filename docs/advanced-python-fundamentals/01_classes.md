---
title: "Classes"
description: "Dive into the world of object-oriented programming with Python classes. Learn how to define classes, create instances, and utilize class attributes, methods, inheritance, and special methods to build powerful and reusable code structures."
keywords: [Python classes, object-oriented programming, OOP, class definition, class instances, class attributes, class methods, inheritance, polymorphism, special methods, code reusability, code organization]
---

# Classes

## Class Basics with Buddy

Let's imagine a dog named Buddy. He's a medium sized Golden Retriever who barks when excited and likes to play.

How does this relate to Python Classes? Well, it's actually quite straightforward:

a dog represents a `class`, and Buddy is an `object`(or `instance`) of that `class`. A Dog `class` outlines the general attributes and behaviors and actions(or `methods`) that dogs can have, and Buddy is a unique `instance` of a dog `class`, with his own `attributes` (golden fur, medium-size) and his own `methods`(barks when excited, likes to play).

Here it is broken down into a table:

| Attribute/Method | `Class` (Dog) | `Instance` (Buddy) |
|-----------------------|-----------------------------|-------------------------------------|
| **Attribute**: Name | Defined as a class attribute (e.g., name) | Buddy |
| **Attribute**: Breed | Defined as a class attribute (e.g., breed) | Golden Retriever |
| **Attribute**: Fur | Defined as a class attribute (e.g., fur color) | Golden |
| **Attribute**: Size | Defined as a class attribute (e.g., size) | Medium |
| **Method**: Bark | Defined as a class method (e.g., bark behavior)| Barks when excited|
| **Method**: Play | Defined as a class method (e.g., play behavior)| Likes to play |

How might this look like in Python code?

### Explaining Class and Instance Attributes
```python
class Dog:  
    species = "Canis lupus familiaris"
    def __init__(self, name, breed, fur_color, size):
        self.name = name
        self.breed = breed
        self.fur_color = fur_color
        self.size = size

# Creating an instance of Dog representing Buddy
buddy = Dog("Buddy", "Golden Retriever", "Golden", "Medium")

# Accessing Buddy's attributes
print(f"{buddy.name} is a {buddy.size} sized {buddy.breed} with {buddy.fur_color} fur.")
#Outputs: Buddy is a Medium sized Golden Retriever with Golden fur.
```
This code defines a Dog `class` with class attribute `species` and instance attributes `name`, `breed`, `fur_color`, and `size`, which are initialized via the special method `__init__`, known as a constructor. This method allows us to create class instances with initial states or attributes as defined by the parameters (name, breed, fur_color, and size).

`self` serves as a reference to the instance of the class. It's used to define the instance's attributes (such as `self.name`, `self.breed`, `self.fur_color`, and `self.size`) and allow their values to be passed correctly from the instance creation to its attributes.

In comparison, the **species = "Canis lupus familiaris"** defines a class instance that is shared by all instances of the Dog class.

Actually creating Buddy the Golden Retriever is simple- similarly to function calls, we call the class (Dog) and then give an argument to each defined attribute.

It's important to be aware that each defined attribute is required, so when we create a Dog instance we need to define the dog's `name`, `breed`, `fur_color`, and `size`.

### Explaining Class Methods
Lets now create some class methods that creates behaviors and actions that our Dog class can perform. In our Dog class we have two methods: `bark()` and `play()` that allows Buddy to bark and play.

```python
class Dog:
    def __init__(self, name, breed, fur_color, size):
        self.name = name
        self.breed = breed
        self.fur_color = fur_color
        self.size = size

# Method to simulate the dog barking
    def bark(self): 
        return f"{self.name} is barking!"

# Method to simulate the dog playing
    def play(self):
        return f"{self.name} is playing!"

# Creating an instance of Dog representing Buddy
buddy = Dog("Buddy", "Golden Retriever", "Golden", "Medium")

# Buddy performing behaviors based on his methods
print(buddy.bark()) # Outputs: Buddy is barking!
print(buddy.play()) # Outputs: Buddy is playing!
```

Methods are essentially class-specific functions that define actions that objects of that class can perform. They're similar to functions, but come with a slight twist- since methods are class specific they take the instance (`self` in the above code) as its first parameter. This allows the method to know which instance it's operating on.

So, calling a method requires you to specify the exact instance you're working with. The syntax for this looks like this:
```instance.method()```

You can, of course, create methods that accept arguments:

```python
class Dog:
    def __init__(self, name, breed, fur_color, size):
        self.name = name
        self.breed = breed
        self.fur_color = fur_color
        self.size = size

# Method to simulate the dog barking
    def bark(self):
        return f"{self.name} is barking!"

# Method to simulate the dog playing
    def play(self):
        return f"{self.name} is playing!"

# Method to simulate how a dog responds to names
    def react_to_name(self, name_called):
        if name_called == self.name:
            
            return f"{self.name} wags tail happily."
        else:
            return f"{self.name} looks confused."

# Creating an instance of Dog representing Buddy
buddy = Dog("Buddy", "Golden Retriever", "Golden", "Medium")

# Buddy performing behaviors based on his methods
buddy.react_to_name("Goldie") #Outputs: Buddy looks confused.
```

##  Why Build Classes?
As we've seen with Buddy, classes provide a powerful framework for encapsulating attributes and behaviors within their own objects. But why does this matter? Couldn't we just use functions and global variables to accomplish the same task?

Yes, it's true, but classes offer certain advantages that make them indispensable for software development. These advantages fall under the concept of **Object Oriented Programming** or **OOP** for short.

OOP programming considers all data as objects, which can be manipulated and interacted with through their methods and attributes. Since virtually everything in Python are objects, Python is an OOP language, and classes are the backbone of Python's OOP paradigm.

This approach to programming not only models the real world more intuitively but also brings several key benefits that make classes and objects indispensable tools in software development:

* Encapsulation:
One of the key features of classes is their ability to encapsulate (or bundle) data together. This encapsulation allows us to create consistent internal states for our objects that will always remain constant.

Suppose we used a function to create a dog like Buddy. We'd need to store his attributes (name, breed, fur color, size, etc) in global or local variables instead of having them be specific to Buddy. Since global and local variables can be shared or modified by any number of things, any part of our program could change Buddy's attributes, potentially leading to inconsistent or unexpected behavior

And we wouldn't be able to create specific methods for Buddy either. Instead, we would have to rely on more general functions that operate on external data. This not only makes our code less secure and more prone to bugs but also significantly less organized.

By using a class to create Buddy, we ensure that his attributes are encapsulated within his instance. This means that Buddy's data is protected and can only be accessed or modified through his own methods. This level of control prevents accidental modification from outside code and makes the program more predictable and easier to debug.

* Reusability:
Since each class instance uses the same encapsulated data within the class, we get to reuse the code as much as we want. This makes classes a potent tool for reducing redundancy and also an object that can be used in other parts of the code, allowing us to have a more efficient and organized codebase.

* Inheritance:
Inheritance allows new classes to be defined based on existing classes, inheriting their attributes and methods. This feature of classes enables a hierarchical organization of related classes where shared functionality can be defined in a base class and specialized in derived classes. Inheritance promotes code reuse and simplifies the modification and extension of existing code.

* Polymorphism:
Classes enable polymorphism, the ability to call the same method on different objects and have each of them respond in their own way. This is a key part of OOP, allowing for a more dynamic and modular code.

## Additional Class Functionalities

Let's dive deeper into the crucial class concepts of inheritance and polymorphism:

### Inheritance

Inheritance allows us to define a class that inherits all all methods and properties from another class. The class being inherited from is called the **parent** or **base** class, and the class that inherits is called the **child** or **derived** class. This functionality allows us to build upon existing code without modifying it, promoting code reuse and the creation of hierarchically organized code.

Let's see how this looks by creating an Animal class with attributes `name` and method `make_sound`. This class will serve as a **parent** class:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        pass
```

As you may have noticed, `make_sound` doesn't do anything right now- it just contains a `pass` statement. We can fill this in in its **child** classes Dog and Cat.

```python
class Animal:
    def __init__(self, name):
      self.name = name

    def make_sound(self):
      pass

class Dog(Animal):
    def make_sound(self):
      return f"{self.name} says Woof!"

class Cat(Animal):
    def make_sound(self):
      return f"{self.name} says Meow!"

Woofy=Dog('Woofy')
Whiskers=Cat('Whiskers')
Woofy.make_sound() #Outputs: Woofy says Woof!
Whiskers.make_sound() #Outputs: Whiskers says Meow!
```

Since the Animal class already created the initial attribute `name`, we don't need to do this in the Dog and Cat class; as a **child** child they inherit this attribute from its **parent** class.

The same is true for the `make_sound` method. But we can further extend this functionality by implementing our own `make_sound` within the Dog and Cat class, essentially overwriting the base `make_sound` method.

### Polymorphism
Polymorphism refers to the idea that objects of different classes can respond to the same method call, provided that the method name is identical.

Let's explore what this means with our Dog and Cat classes. Both of them possess the `make_sound` method, which do slightly different things for Dogs(*"Woof"*) and Cats(*"Meow"*), so calling the `make_sound` method on them results in them both performing their actions:

```python
class Animal:
    def __init__(self, name):
      self.name = name

    def make_sound(self):
      pass

class Dog(Animal):
    def make_sound(self):
      return f"{self.name} says Woof!"

class Cat(Animal):
    def make_sound(self):
      return f"{self.name} says Meow!"

buddy = Dog("Buddy")
whiskers = Cat("Whiskers")

animals = [buddy, whiskers]

for animal in animals:
    print(animal.make_sound())
#Outputs:
"""
Buddy says Woof!
Whiskers says Meow!
"""
```

Polymorphism allows us to use the same `make_sound` method on different objects (Buddy the dog and Whiskers the cat) and have each object perform its own unique action. Simply put- we can use the same method name in different classes.

This simple idea is extremely powerful when we're looking to implement the same method across various classes and objects. Suppose we want to have a way to find the number of elements within an object type?
We can use the len() function for that purpose, but did you ever notice that we can use it on virtually every single built-in object type? This is polymorphism in action- each built-in object type implements its own len() method which is then called the len() function. This simple idea allows for consistent interaction with different object types, making our code more versatile and easier to manage.

## Special Methods
Python has its own mechanism for implementing polymorphism through what are known as **special** (or **magic** or **dunder**... yes, there's a lot of names) methods. These methods are defined through the use of double underscores at the beginning and end of their name (such as `__init__`), and work as methods that we can use within classes that enable them to interact with Python's built-in functions and other functionalities as if they're built-in types themselves.

`__init__` is a special method that allows you to initialize an object's attributes. That's why we've always started out classes with `__init__` so far- we've always wanted to initialize with attributes to replicate objects with defined states and attributes.

Another special method is `__len__`, which allows our class instances to respond to the len() function. Let's explore this with the following code:

```python
class BookCollection:
    def __init__(self, books):
        self.books = books
```

The BookCollection class creates an instance that represents a collection of books. Now, this isn't terribly useful on its own, because we can't really do anything with it so far. So how about we use the `__len__` special method to give the BookCollection class the ability to return how many books are within its collection:

```python
class BookCollection:
    def __init__(self, books):
        self.books = books

    def __len__(self):
        return len(self.books)

books=BookCollection(["Python","Perl","C++"])
print(len(books)) #Outputs 3
```

Let's next use the `__str__` special method to give the BookCollection class the ability to return its contents in string format:

```python
class BookCollection:
    def __init__(self, books):
        self.books = books

    def __len__(self):
        return len(self.books)

    def __str__(self):
        return ", ".join(self.books)


books=BookCollection(["Python","Perl","C++"])
print(books) #Outputs Python, Perl, C++
```

There are a lot of special methods, and you can find them all [here](https://docs.python.org/3/reference/datamodel.html#special-method-names), but unless you're planning to customize your classes extensively, you'll likely use just a handful of them regularly. Here are a couple of more commonly used special methods:


| Special Method           | Explanation                                                                                   | Example                                                                      |
|--------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `__init__(self, ...) `   | Called when a new instance of a class is created. Initializes the attributes of the class.   | `class Person: `<br />`def __init__(self, name):`<br />`self.name = name`    |
| `__str__(self)`          | Returns a string representation of the object, called by the str() built-in function.         | `class Person:`<br />`def __str__(self):`<br />`return self.name`            |
| `__len__(self)`          | Returns the length of the container. Called by the len() built-in function.                   | `class Inventory:`<br />`def __len__(self):`<br />`return len(self.items)`   |
| `__getitem__(self, key)` | Allows access to elements using the square brackets "[]".                                     | `class Inventory:`<br />`def __getitem__(self, key):`<br />`return self.items[key]` |
| `__setitem__(self, key, value)` | Assigns a value to a key/item in the container.                                             | `class Inventory:`<br />`def __setitem__(self, key, value):`<br />`self.items[key] = value` |
| `__delitem__(self, key)` | Deletes an item from the container.                                                           | `class Inventory:`<br />`def __delitem__(self, key):`<br />`del self.items[key]` |
| `__iter__(self)`         | Returns an iterator for the container. Called by the iter() built-in function.                | `class Inventory:`<br />`def __iter__(self):`<br />`return iter(self.items)` |
| `__next__(self)`         | Returns the next item from the container. Called by the next() built-in function.             | `class InventoryIterator:`<br />`def __next__(self):`<br />`...`             |
| `__contains__(self, item)` | Checks if the container contains an item. Called by the in operator.                         | `class Inventory:`<br />`def __contains__(self, item):`<br />`return item in self.items` |
| `__add__(self, other)`   | Defines behavior for the addition "+" operator.                                                | `class Vector:`<br />`def __add__(self, other):`<br />`...`                  |
| `__eq__(self, other)`    | Checks if two objects are equal. Called by the == operator.                                    | `class Person:`<br />`def __eq__(self, other):`<br />`return self.name == other.name` |
| `__call__(self, ...)`    | Allows the instance of the class to be called as a function.                                   | `class Logger:`<br />`def __call__(self, message):`<br />`...`               |

## Conclusion

And there you have it-our dive into Python classes! This is a lot of to take in, especially if this is your first programming language. Don't worry if you haven't memorized or understood every detail. The key takeaway here should be the foundational understanding of how classes work in Python and how they fit into the OOP paradigm.

In fact, we've barely just scratched the surface of Python classes- there are myriad of advanced topics and nuances waiting to be explored, such as multiple inheritance, metaclasses, abstract base classes, and more. Each of these areas opens up new possibilities for how we can design and organize our code, making it more reusable, scalable, and maintainable.

But you'll get to those in due time. For now, try out using classes in your own Python programs. Try changing your function-dominant code to use classes, play around with inheritance and special methods to see how you can create an accurate replica of real-world objects and ideas with classes. The more you practice, the more intuitive these concepts will become!