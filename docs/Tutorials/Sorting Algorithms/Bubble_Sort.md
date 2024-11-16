---
title: Bubble Sort
tags: [Sorting Algorithms]
---

Have you ever wondered how to sort an array in Python? Sure, you can use the built-in sort() function, but understanding the mechanics behind sorting algorithms can significantly enhance your programming skills and knowledge of Python. Learning to code your own sorting algorithms is well worth the effort.

There are many sorting algorithms, but few are as simple and intuitive as Bubble Sort—a basic sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This method is straightforward and can be thought of as "bubbling" the largest unsorted element to its correct position with each pass through the list. Bubble sort is akin to repeatedly walking through a line of people and swapping places with anyone who is shorter than you, ensuring that taller people gradually "bubble up" to the end of the line. 

In this tutorial, we will explore bubble sort, exploring its principles, implementation, and use cases, setting a strong foundation for your journey into the world of sorting algorithms.

## Learning Objectives
By the end of this tutorial, you will:

* Understand what bubble sort is and the principle behind its operation.
* Be able to implement the bubble sort algorithm in Python.
Learn about the time complexity and space complexity of bubble sort.
* Know when and why to use bubble sort in real-world scenarios.


Ready to dive into one of the most straightforward sorting techniques? Let's get started!

## What is Bubble Sort?
Bubble sort is a simple sorting algorithm that repeatedly compares pair of adjacent items and swaps them if they're in the wrong order. It repeats this process until the sort is fully sorted.

Here's an analogy that may illustrate this: Imagine you are standing in a line with a group of people of varying heights, and your goal is to arrange everyone from shortest to tallest. Here’s how you would do it using the Bubble Sort approach:

1. Start at the beginning of the line.
2. Compare the height of the first person with the height of the next person in line.
If the first person is taller than the next person, swap places with them.
3. Move one position forward and repeat the comparison and swapping process.
4. Continue this process until you reach the end of the line.
5. At this point, the tallest person in the group will have "bubbled up" to the end of the line. Now you repeat the entire process for the remaining people in line while excluding the last person because they're already sorted.
6. Continue these passes through the line until no more swaps are needed.
By the end of this process, all the shorter people will have gradually moved to the front of the line, and all the taller people will have moved to the back, resulting in a fully sorted line from shortest to tallest.

The bubble sort algorithm essentially works identically to this. So let's get to implementing it in Python!

## Bubble Sort Implementation

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```
### Breaking Down Bubble Sort
1. **Function Definition**: `def bubble_sort(arr):`
   * The function `bubble_sort` is defined with one parameter, `arr` - the array (or list) that we want to sort.

2. **Getting the Length of the Array**: `n = len(arr)`
   * We store the length of the array in the variable `n` to use it in the loops.

3. **Outer Loop**: `for i in range(n):`
   * This outer loop runs `n` times, where `n` is the length of the array. Each iteration represents a pass through the entire array.

4. **Swapped Flag**: `swapped = False`
   * We set a flag `swapped` before the inner loop starts to help track if any elements were swapped during the  inner loop iteration.

5. **Inner Loop**: `for j in range(0, n - i - 1):`
   * This inner loop iterates from the start of the array to the last unsorted element. The `-i` part ensures that we don't compare the already sorted elements at the end of the array, reducing the number of comparisons with each pass.

6. **Comparison and Swapping**: `if arr[j] > arr[j + 1]: arr[j], arr[j + 1] = arr[j + 1], arr[j]; swapped = True`
   * Within the inner loop, we compare the current element `arr[j]` with the next element `arr[j + 1]`.
   * If the current element is greater than the next element, they are swapped. This swap operation places the larger element further towards the end of the array.
   * The `swapped` flag is set to `True` to indicate that a swap has occurred.

7. **Break Condition**: `if not swapped: break`
   * After the inner loop, if no elements were swapped (`swapped` is `False`), the array is already sorted, and the outer loop breaks early to avoid unnecessary iterations.

8. **Returning the Sorted Array**: `return arr`
   * After the outer loop completes, meaning all elements have been compared and moved to their correct positions, the sorted array is returned.


## Sample Usage

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
sorted_arr = bubble_sort(arr)
print(sorted_arr) # Outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Initialization
* `arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]`: This initializes our array with ten unsorted elements.

### Calling the Bubble Sort Function
* Executes `bubble_sort(arr)`: This starts the sorting process on the entire array.

### Function Execution - Step by Step

#### First Pass (i=0)

* **Compare 5 and 8**: No swap needed.
* **Compare 8 and 1**: Swap to get `[5, 1, 8, 2, 7, 4, 3, 6, 9, 10]`.
* **Compare 8 and 2**: Swap to get `[5, 1, 2, 8, 7, 4, 3, 6, 9, 10]`.
* **Compare 8 and 7**: Swap to get `[5, 1, 2, 7, 8, 4, 3, 6, 9, 10]`.
* **Compare 8 and 4**: Swap to get `[5, 1, 2, 7, 4, 8, 3, 6, 9, 10]`.
* **Compare 8 and 3**: Swap to get `[5, 1, 2, 7, 4, 3, 8, 6, 9, 10]`.
* **Compare 8 and 6**: Swap to get `[5, 1, 2, 7, 4, 3, 6, 8, 9, 10]`.
* **Compare 8 and 9**: No swap needed.
* **Compare 9 and 10**: No swap needed.
* **Array State**: `[5, 1, 2, 7, 4, 3, 6, 8, 9, 10]`.

#### Second Pass (i=1)

* **Compare 5 and 1**: Swap to get `[1, 5, 2, 7, 4, 3, 6, 8, 9, 10]`.
* **Compare 5 and 2**: Swap to get `[1, 2, 5, 7, 4, 3, 6, 8, 9, 10]`.
* **Compare 5 and 7**: No swap needed.
* **Compare 7 and 4**: Swap to get `[1, 2, 5, 4, 7, 3, 6, 8, 9, 10]`.
* **Compare 7 and 3**: Swap to get `[1, 2, 5, 4, 3, 7, 6, 8, 9, 10]`.
* **Compare 7 and 6**: Swap to get `[1, 2, 5, 4, 3, 6, 7, 8, 9, 10]`.
* **Array State**: `[1, 2, 5, 4, 3, 6, 7, 8, 9, 10]`.

#### Third Pass (i=2)

* **Compare 2 and 5**: No swap needed.
* **Compare 5 and 4**: Swap to get `[1, 2, 4, 5, 3, 6, 7, 8, 9, 10]`.
* **Compare 5 and 3**: Swap to get `[1, 2, 4, 3, 5, 6, 7, 8, 9, 10]`.
* **Compare 5 and 6**: No swap needed.
* **Array State**: `[1, 2, 4, 3, 5, 6, 7, 8, 9, 10]`.

#### Fourth Pass (i=3)

* **Compare 4 and 3**: Swap to get `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
* **Compare 4 and 5**: No swap needed.
* **Array State**: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

At this point, the array is already sorted, so the subsequent passes will not result in any swaps.

### Final Output

* **Sorted Array**: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

## Analyzing Bubble Sort
Now that we've seen bubble sort in action, let's now analyze its performance in terms of time and space complexity- the two standard metrics for evaluating an algorithm's efficiency and feasibility in different scenarios.

### Time Complexity
* Best Case: O(n) - The best-case scenario occurs when the array is already sorted. In this case, the algorithm only needs one pass through the array to verify that no swaps are needed, resulting in a linear time complexity.
* Average Case: O(n²) - On average, each element may need to be compared and swapped with multiple elements. This nested loop of comparisons and swaps results in quadratic time complexity.
* Worst Case: O(n²) - The worst-case scenario happens when the array is sorted in reverse order. Each element needs to be compared and swapped through the entire array, making the maximum number of comparisons and swaps.

### Space Complexity
* O(1) - bubble sort is an in-place sorting algorithm. It doesn't require any additional storage proportional to the input size, leading to a constant space complexity. This makes it memory-efficient, especially for small arrays or datasets.

## When to Use Bubble Sort

Bubble sort, with its simple implementation and best-case time complexity of O(n), is not a particularly fast sorting algorithm. However, it does have its advantages in specific scenarios.

### Situations Suited for Bubble Sort
* **Small Datasets**:Due to its low overhead, the algorithm can be easily implemented and can perform adequately when dealing with a small number of elements.

* **Partially Sorted Data**: Bubble sort excels when the data is already partially sorted. In such cases, it adapts quickly and can sort the data with minimal comparisons and swaps, allowing it to operate in O(n)

* **Educational Purposes**: Bubble sort's straightforward and intuitive process makes it an excellent choice for teaching fundamental concepts of sorting algorithms. Its simplicity helps beginners understand the basic mechanisms of comparison and swapping.

* **Situations Where Simplicity is Key**: Bubble sort's simple implementation can be advantageous in environments where implementation simplicity and code footprint are more critical than sorting speed.

### Situations Not Suited for Bubble Sort
* **Large Datasets**: Bubble sort's efficiency drops significantely with large datasets. Its average and worst-case time complexity of O(n²) makes it less suitable for sorting large arrays or lists compared to more efficient algorithms like QuickSort or merge sort.

* **Highly Unsorted Data**: Bubble sort is inefficient when the data is highly unsorted, as it may require many passes through the list to sort all elements, resulting in numerous comparisons and swaps.

* **High-Performance Requirements**: Bubble sort's poor time efficiency makes it a poor choice in situations where time efficiency is critical, such as in performance-sensitive applications.

* **Memory Usage is Not a Concern**: Although bubble sort is an in-place sorting algorithm with minimal memory overhead, this advantage is less relevant in environments where space complexity is not a primary concern and more efficient sorting algorithms can be used instead.

## Conclusion

In this tutorial, we explored bubble sort- a straightforward sorting algorithm- by exploring its logic, implementation in Python, and its use-cases.

Bubble sort is rarely used, especially when compared to its much faster brethern such as QuickSort and merge sort, but it is a valuable sorting algorithm to learn nonetheless for its educational value as a stepping stone towards more complicated sorting algorithms. Its straightforward approach allows new programmers and Python coders to understand how to implement basic sorting algorithms and logic with Python.