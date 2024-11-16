---
title: Binary Search
tags: [Searching Algorithms]
---

Have you ever played the Guess the Number game, where you try to guess a number between two specific points, and with each guess you're told whether the correct number is higher or lower?
If you ever found that the best strategy is to halve the range of numbers with each guess then congratulations! You found the principle behind binary search!

In this tutorial, we'll explore binary search- one of the essential searching algorithms of computer science- by exploring what it is, how it works, why it’s useful, and its variations.

## Learning Objectives
By the end of this tutorial, you will:
* Understand what binary search is and the principle behind its operation.
* Be able to implement a basic binary search algorithm in Python.
* Know when and why to use binary search in real-world scenarios.

Excited to learn about this efficient searching technique? Let's jump right in!

## What is Binary Search?

Let’s go back to the Guess the Number game. Imagine you’re looking for the correct number between 1 and 100. Instead of picking numbers at random, you use a strategy to minimize the number of guesses you need to make:
1. Start in the Middle: You start by guessing the number right in the middle- 50
2. Evaluate the Hint: If you're told that the correct number is higher, you now know it's between 51 and 100. Conversely, if the correct number is lower, it lies between 1 and 49. 
3. Halve the Range: You then guess in the middle of this new range. For example, if you’re told the correct number is higher, your next guess would be 75 (the middle of 51 and 100).
4. Repeat Until Found: You continue this process, each time halving the range based on the feedback, until you guess the correct number.

Binary search follows the same strategy when looking for a value in a sorted array. By systematically eliminating half of the possible locations with each step, binary search efficiently narrows down where the target value can be found. 

Here’s the actual algorithm logic that we’ll be implementing:

1. Start in the Middle: Begin by examining the middle element of the entire array.
2. Compare the Target Element: Check if the middle element is the target you're searching for. If it is, congratulations! You've found your target, and you can return its index value, indicating its position in the array.
3. Halve the Search Space: If the middle element is not the target, decide which half of the array could contain the target:
    * If the target is less than the middle element, it must be in the left half of the array.
    * If the target is greater than the middle element, it must be in the right half of the array.
4. Narrow Down and Repeat: With the relevant half now identified, update your search boundaries to either the left or right half, excluding the middle element. This effectively narrows down your search space. Return to step 1 with this updated segment of the array, and perform the same operations. This process of elimination continues, each time halving the search space based on the comparison at the middle.
5. Find or Conclude the Search: This iterative narrowing down will lead to one of two outcomes:
The target element is found, in which case you return the index of the target element within the array.
The search space is reduced to zero, indicating the target element does not exist in the array. In this scenario, return a predetermined value (e.g., *1) to signify that the search concluded without finding the target.

Now, it’s important to note the critical limitation of binary search- it only works on a sorted array. 

Imagine that would happen if we were to use binary search on an unsorted array. Since the elements aren't in order, we can't effectively reduce the search space!

Let’s now get to implementing binary search in Python.

## Binary Search Implementation
```python
def binary_search(arr, target):
	left, right = 0, len(arr) - 1
    
	while left <= right:
    	mid = (left + right) // 2
    	if arr[mid] == target:
        	return mid
    	elif arr[mid] < target:
        	left = mid + 1
    	else:
        	right = mid - 1
    
	return -1
```

### Breaking It Down

1. **Function Definition**: `def binary_search(arr, target):`
  * We define a function named `binary_search` that takes two parameters:
    * `arr`: The sorted list (or array) we're searching through.
    * `target`: The element we are looking for.

2. **Initialize Search Boundaries**: `left, right = 0, len(arr) * 1`
  * The search starts with two pointers, `left` and `right`, representing the indices of the start and end of the array, respectively. `left` is set to `0`, marking the first element's index value, and `right` is set to `len(arr) * 1`, marking the index value of the last element.

3. **While Loop**: `while left <= right:`
  * This loop keeps the search going as long as `left` is less than or equal to `right`, indicating that there are still elements to be examined within the range.

4. **Calculate the Middle**: `mid = (left + right) // 2`
  * We calculate the middle index of the current search space by adding `left` and `right` and then dividing by 2 by integer division because we shouldn't have any decimals.

5. **Comparison**: 
  * `if arr[mid] == target:`
    * If the element at the middle index (`arr[mid]`) is the `target`, the target has been found.
    * **Return Index**: `return mid`
      * When the target is found, this line returns `mid`, which would be the index value of the target element in the list.
  * `elif arr[mid] < target:`
    * If the middle element is less than the target, this indicates that the target must be in the right half of the array.
    * **Update Left Boundary**: `left = mid + 1`
      * To search the right half, we update `left` to `mid + 1`, narrowing down the search space.
  * `else:`
    * If the middle element is greater than the target, the target must be in the left half of the array.
    * **Update Right Boundary**: `right = mid * 1`
      * We update `right` to `mid * 1` to search the left half, further narrowing down the search space.

6. **Return -1**: `return -1`
  * This line executes if the search concludes without finding the target element. Returning `-1` is a standard way to signify “not found” in search algorithms, as `-1` is not a valid index value in a list, which clearly indicates that the target isn’t there.

## Sample Usage with the Guess the Number Game

Alright, now let's see this code in action by going through the Guess the Number Game! Follow through each step and see our Linear Search algorithm in action!

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Range between 1-200
arr = list(range(1, 201))  # Creating an array with numbers from 1 to 200
target = 124  # Our target number

# Performing binary search to find the index of the target number
result = binary_search(arr, target)

if result != -1:
    print(f"Number found at index position: {result}")
else:
    print("Number not found in the array")

#Outputs Number found at index position: 123
```

### Initialization
* `arr = list(range(1, 201))`: Initializes our array with numbers from 1 to 200, providing a sorted array for our search.
* `target = 124`: Sets the target number we aim to find within the array.

### Calling the Binary Search Function
* `result = binary_search(arr, target)`: Calls the `binary_search` function with our sorted array `arr` and the target number `124`.

### Function Execution - Step by Step
* **Initial Search Space**: The entire array-index 0 to 199 (corresponding to numbers 1 to 200).

* **First Iteration**:
  * Calculate Midpoint: `mid = (0 + 199) // 2 = 99`
  * `arr[99]` is `100`, which is less than `124`. We discard the left half and continue with the right half.

* **Second Iteration**:
  * New `left` is `100`, `right` remains `199`.
  * Calculate Midpoint: `mid = (100 + 199) // 2 = 149`
  * `arr[149]` is `150`, which is greater than `124`. We discard the right half and continue with the left half.

* **Third Iteration**:
  * `left` remains `100`, new `right` is `148`.
  * Calculate Midpoint: `mid = (100 + 148) // 2 = 124`
  * `arr[124]` is `125`, which is greater than `124`. We discard the right half and continue with the left half.

* **Fourth Iteration**:
    * `left` remains `100`, new `right` is `123`.
  * Calculate Midpoint:`mid = (100 + 123) // 2 = 111`
  * `arr[111]` is `112`, which is less than `124`. We discard the left half and continue with the right half.

* **Fifth Iteration**:
  * New `left` is `112`, `right` remains `123`.
  * Calculate Midpoint: `mid = (112 + 123) // 2 = 117`
  * `arr[117]` is `118`, which is less than `124`. We discard the left half and continue with the right half.

* **Sixth Iteration**:
  * New `left` is `118`, `right` remains `123`.
  * Calculate Midpoint: `mid = (118 + 123) // 2 = 120`
  * `arr[120]` is `121`, which is less than `124`. We discard the left half and continue with the right half.

* **Seventh Iteration**:
  * New `left` is `121`, `right` remains `123`.
  * Calculate Midpoint: `mid = (121 + 123) // 2 = 122`
  * `arr[122]` is `123`, which is less than `124`. We discard the left half and continue with the right half.

* **Eighth Iteration**:
  * New `left` is `123`, `right` is `123`.
  * Calculate Midpoint: `mid = (123 + 123) // 2 = 123`
  * `arr[123]` is `124`, which matches our target. We've found the number at index `123`!

## Analyzing Binary Search
Now that we've seen binary search in action, let's now analyze its performance in terms of time and space complexity- the two standard metrics for evaluating an algorithm's efficiency and feasibility in different scenarios.

### Time Complexity

* Best Case: O(1) – This occurs when the target value is at the middle of the dataset, resulting in the target being found in the first comparison.
* Average Case: O(log n) – On average, the algorithm divides the search space in half with each iteration, leading to a logarithmic number of steps to find the target or determine its absence.
* Worst Case: O(log n) – Even in the worst case, where the target is not present or is at the start/end of the dataset, the search space's halving process leads to a logarithmic number of comparisons.

### Space Complexity

* Iterative Implementation: O(1) – The iterative approach uses a constant amount of space, only requiring variables to store the indices of the search boundaries and the midpoint.
* Recursive Implementation: O(log n) – If implemented recursively, the space complexity can increase due to the stack space used for recursive calls, which correlates with the depth of recursion, also logarithmic with respect to the size of the dataset.

## When to Use Binary Search

Binary search is a very efficient way to search and is indeed one of the most popular searching algorithms, but it's not always the best tool for every situation. Understanding when to use binary search can optimize your algorithms' performance and applicability.

### Situations Suited for Binary Search

* Sorted Arrays: The primary requirement for binary search is that the dataset must be sorted. If your data isn't sorted, you'll need to sort it before you can effectively use binary search, which can add overhead. For datasets that are already sorted or can be sorted once and searched many times, binary search is ideal.

* Large Datasets: Binary search is particularly effective for large datasets because of its time complexity O(log n), meaning the number of comparisons grows logarithmically with the size of the dataset.

* Searching with Random Access: Binary search is most effective on data structures that allow for random access, such as arrays. This is because binary search needs to be able to access the middle element of any subset of the dataset quickly. Data structures that do not allow efficient random access, like linked lists, are not well-suited for binary search without modifications.

* Performance-Critical Applications: In scenarios where performance and efficiency are critical, and the dataset is large and sorted, binary search can significantly reduce the time it takes to find elements compared to other search algorithms like linear search.

* Read-Heavy Operations: For applications that involve heavy read operations but infrequent writes (since writes may require re-sorting to maintain order), binary search offers an efficient searching mechanism.

### Situations Not Suited for Binary Search

While binary search is highly efficient under certain conditions, there are situations where other searching algorithms may be more appropriate:

* Unsorted Data: If the dataset is not sorted and cannot be efficiently sorted, then binary search is ineffective. In this case linear search or hashing might be more suitable.

* Frequent Data Modification: For datasets that undergo frequent additions or deletions, maintaining the sorted order required for binary search can be costly, making other search algorithms or data structures (like hash tables) more effective.

* Small Datasets: For very small datasets, the overhead of implementing binary search might not offer significant benefits over simpler search methods like linear search.

Understanding these scenarios will help you decide when binary search is the optimal choice for your needs, ensuring that you use the right tool for the right job.

## Conclusion

In this tutorial we explored binary search, a fundamental and highly efficient algorithm for searching sorted datasets. We broke down its logic, explored its implementation in Python, and demonstrated its application through a practical example. We then finished off by touching on some practical use cases.

Binary search stands out for its ability to drastically reduce the search space with each iteration, making it an indispensable tool in the algorithmic toolbox for handling large, sorted datasets. However, its efficiency comes with the precondition that data must be sorted, highlighting the importance of understanding the characteristics of the data you're working with.

As you continue to develop your programming and problem-solving skills, remember that choosing the right algorithm for the right task is as crucial as the implementation itself. Binary search is just one of many search algorithms, each with its unique advantages and best use cases. Exploring beyond binary search to understand linear search, hashing, and advanced data structures like binary search trees and hash tables will equip you with a versatile set of tools for tackling a wide range of problems.
