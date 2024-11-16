---
title: Linear Search
tags: [Searching Algorithms]
---

Ever wondered how programs search for things? They do so through the use of search algorithms- steps used to find the desired item in a list.

In this tutorial we’ll explore linear search- one of the simplest of the searching algorithms. It serves as a fundamental concept in computer science and is a stepping stone to more complex search algorithms.

## Learning Objectives
By the end of this tutorial, you will:
* Understand what linear search is and how it works.
* Be able to implement a basic linear search algorithm in Python.
* Know when and where to apply linear search in real-world scenarios.

Ready to learn? Let’s dive in!

## What is Linear Search?

Imagine that you’re searching for a specific book in a library. You’re not sure where that book is on the rows and rows of bookshelves, so you begin searching by starting at one end of the bookshelf and checking each book individually until you either find the specific book… or don’t.

That's linear search. It searches a list for a target element by checking each element one by one until it either finds the target element or searches through the entire list. It then returns the target element's position if found or a preset value or message indicating that the element isn't in the list.

Here’s how the algorithm logic works:
1. Start at the beginning: Begin at the first element of the list.
2. Compare each element: Check if the current element is the one you're searching for. If it is, return its index value to show its position in the list.
3. Move to the next: If it's not a match, move to the next element.
4. Repeat: Repeat step 2-3 until you find the match or reach the end of the list.

Now that we know how it works, let’s take a look at implementing it in Python.

## Linear Search Implementation
```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

Let’s break down how this works-


1. **Function Definition**: `def linear_search(arr, target):`
    * We define a function named `linear_search` that takes two parameters:
        * `arr`: The list (or array) in which we are searching.
        * `target`: The element we are looking for within the list.

2. **For Loop**: `for i in range(len(arr)):`
    * This loop sets up our search through the list:
        * `range(len(arr))` creates a sequence of numbers from 0 to the length of the list minus one. These numbers represent the indices of the list.
        * `i` is a variable that represents each index value in the list. This is how we access each specific element.

3. **Comparison**: `if arr[i] == target:`
    * Here, we perform the actual search:
        * `arr[i]`: This is the current element in the list being looked at.
        * `== target`: We compare the current element with our target element.
        * If this comparison is true, it means we have found the target in the list.

4. **Return Index**: `return i`
    * This line executes when the target is found:
        * It returns `i`, the current index value, indicating the target element’s position in the list.

5. **Return -1**: `return -1`
    * This line is executed if the loop completes without finding the target element:
        * `-1` is the standard way to indicate “not found” in search algorithms. This is because `-1` is not a valid index value in a list, clearly signaling that the target isn’t there.

Alright, now let's see this code in action by using the bookshelf example earlier! Follow through each step and see our Linear Search algorithm in action!

## Sample Usage

```python
def bookshelf_linear_search(bookshelf, target_book):
    for i in range(len(bookshelf)):
        if bookshelf[i] == target_book:
            return i
    return -1


bookshelf = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Moby Dick", "Pride and Prejudice"]
target_book = "Moby Dick"
result = linear_search(bookshelf, target_book)


print(f"Book found at index position: {result}" if result != -1 else "Book not found on the shelf")
```

1. **Initialization**:
    * `bookshelf = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Moby Dick", "Pride and Prejudice"]`
        * This line initializes our `bookshelf` array with a collection of book titles.
    * `target_book = "Moby Dick"`
        * Here, we define our target book title as "Moby Dick". This is the book we are trying to locate on the bookshelf.

2. **Calling the Linear Search Function**:
    * `result = bookshelf_linear_search(bookshelf, target_book)`
        * We call the `bookshelf_linear_search` function, passing our `bookshelf` array and the target book title "Moby Dick".

3. **Function Execution - Step by Step**:

    1. **For Loop Execution**: `for i in range(len(bookshelf)):`
        * `range(len(bookshelf))` creates a sequence of indices for the `bookshelf` array, from 0 to 4 (since the length of `bookshelf` is 5).
        * In each iteration, `i` represents the current index value in the `bookshelf` that we are checking.

    2. **Iteration 1**: `i = 0`
        * `bookshelf[0]` is "To Kill a Mockingbird", which is not "Moby Dick". The search continues.

    3. **Iteration 2**: `i = 1`
        * `bookshelf[1]` is "1984", which is not "Moby Dick". The search continues.

    4. **Iteration 3**: `i = 2`
        * `bookshelf[2]` is "The Great Gatsby", which is not "Moby Dick". The search continues.

    5. **Iteration 4**: `i = 3`
        * `bookshelf[3]` is "Moby Dick". The book is found! The function returns `3`, "Moby Dick's" index value in the `bookshelf`.

## Analyzing Linear Search
Now that we've seen linear search in action, let's now analyze its performance in terms of time and space complexity- the two standard metrics for evaluating an algorithm's efficiency and feasibility in different scenarios.

### Time Complexity

* **Best Case**: O(1) – This occurs when the target value is at the first position of the dataset, resulting in the target being found in the first comparison.
* **Average Case**: O(n) – On average, the algorithm needs to check about half of the elements before finding the target or determining its absence, leading to a linear number of steps proportional to the size of the dataset.
* **Worst Case**: O(n) – In the worst case, where the target is at the last position or not present at all, the algorithm has to check every element in the dataset.

### Space Complexity

* **Iterative Implementation**: O(1) – The iterative approach uses a constant amount of space, only requiring a variable to store the current index being checked. Linear search does not need additional memory that grows with the size of the dataset.
* **Recursive Implementation**: O(n) – If implemented recursively, the space complexity can increase due to the stack space used for recursive calls, which correlates with the number of elements in the dataset, resulting in linear space complexity.

## When to Use Linear Search

Linear search's time average case time complexity of O(n) makes it a potentially inefficient and time-consuming algorithm, especially when used with very large datasets, and there are certainly better search algorithms available.

Linear Search does have its advantages though-

* Small Datasets: When dealing with small datasets, more complex algorithms, such as binary search, may add unneeded complexity. Linear search can be more efficient due to its simplicity and lack of additional setup.
* Unsorted Data: Unlike algorithms like binary search, linear search does not require data to be sorted. This can be useful when the data cannot be efficiently sorted.
* Real-time or Streaming Data: Linear search can be useful when data is coming in on real time because it allows searching without waiting for the entire dataset to be available

As you can see, linear search definitely has its useful applications! The key to remember is that linear search is a tool in your algorithm toolbox. It may not be the fastest or most efficient, but it can be useful in the right place.

## Conclusion

In this tutorial, we've explored linear search, a basic yet crucial search algorithm. We discussed what it is and its logic, and walked through a step-by-step implementation with a sample example. We then finished off by touching on some practical use cases.

Now, you can confidently apply linear search in situations where its simplicity and straightforwardness are advantageous.

