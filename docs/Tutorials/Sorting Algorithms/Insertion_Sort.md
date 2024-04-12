---
title: Insertion Sort
tags: [Sorting Algorithms]
---

Have you ever wondered how to sort an array in Python? Sure, you can use the built-in sort() function, but understanding the mechanics of sorting algorithms can significantly enhance your programming skills and knowledge of Python. It's well worth it to take the time to learn how to code your own sorting algorithms.

There are many sorting algorithms, but few are as simple and intuitive as Insertion Sort—a basic sorting algorithm that sorts the array one item at a time. This method mirrors the natural process of sorting things in everyday life, such as organizing books on a shelf or arranging a hand of playing cards, making it an excellent starting point for understanding algorithmic sorting concepts.

In this tutorial we'll explore Insertion Sort and how this straightforward algorithm can be both a powerful tool for small datasets and a foundational learning block for more complex sorting techniques.

## Learning Objectives
By the end of this tutorial, you will:

* Understand what Insertion Sort is and the principles behind its operation.
* Be able to implement Insertion Sort in Python.
* Appreciate the comparative efficiency of Insertion Sort in relation to other sorting algorithms, knowing where it excels and where other algorithms might be preferred.
* Identify real-world applications and scenarios where Insertion Sort is particularly effective, making informed decisions about which sorting algorithm to use in different programming contexts.

Let's get started!

## What is Insertion Sort?
Imagine you are organizing a hand of cards to be in ascending order. You start with the assumption that the first card is already sorted. Then, you take the next card and compare it with the cards in the "sorted" portion of your hand, moving from right to left. You search for the correct place to insert this new card so that the sorted section remains in order. If the new card is smaller than the compared card, you move one step left and continue comparing until you find the correct spot. This process repeats for each new card, placing it into the existing sorted order.

This is essentially what Insertion Sort does. It is a comparison-based sorting algorithm that begins by treating the first element of the array as the sorted segment. The algorithm then iterates through the rest of the elements and rearranges each element by inserting it into its correct position within the sorted segment. This iterative process gradually builds up a sorted array, one element at a time, by determining the appropriate insertion point for each element based on comparisons.

Here’s the actual algorithm logic that we’ll be implementing:

1. Start with the Second Element: We assume the first element of the array is already sorted, so we begin sorting with the second element.
2. Compare with Previous Elements: Take the current element and compare it with the elements in the sorted part of the array (to its left). Identify the correct position in the sorted part where this element should be inserted.
3. Shift Larger Elements to the Right: If the current element is smaller than the compared element in the sorted section, shift the larger element one position to the right. This creates space where the current element can be inserted. Continue this process until you find the correct position for the current element.
4. Insert the Current Element: Once the correct position is identified (when the current element is larger than or equal to the element to its left or you've reached the beginning of the array), insert the current element into its correct position within the sorted section.
5. Repeat for Each Element: Move to the next element in the array and repeat steps 2 through 4 until you've processed all the elements in the array. Each iteration increases the length of the sorted section by one and decreases the length of the unsorted section by one, until the entire array is sorted.
6. Completion: The array is sorted when all elements have been processed and inserted into their correct positions within the sorted section. At this point, the algorithm terminates.

Now that we have an idea of how the logic looks like, let's dive into implementing it in Python!

## Insertion Sort Implementation

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        while i > 0 and arr[i] < arr[i - 1]:
            arr[i], arr[i - 1] = arr[i - 1], arr[i]
            i -= 1
    return arr
```

### Breaking Down the Insertion Sort Function

1. **Function Definition**: `def insertion_sort(arr):`
  * The function `insertion_sort` is defined with one parameter, `arr`- the array (or list) that we want to sort.

2. **Looping Through the Array**: `for i in range(1, len(arr)):`
  * This loop starts from the second element of the array (`i=1`) and iterates through to the last element (`len(arr)`). We start from the second element because we're assuming the first element is already sorted.

3. **The Sorting Condition**: `while i > 0 and arr[i] < arr[i - 1]:`
  * This condition checks two things:
    * `i > 0`: This ensures that the index `i` is not the first element of the array, as the first element is considered sorted and has no preceding element to compare with.
    * `arr[i] < arr[i - 1]`: This compares the current element `arr[i]` with the one before it `arr[i-1]`. If the current element `arr[i]` is smaller than the previous element `arr[i - 1]`, it indicates that a swap needs to occur to move the smaller element to its correct position.

4. **Swapping Elements**: `arr[i], arr[i - 1] = arr[i - 1], arr[i]`
  * When the sorting condition is met, the current element and the previous element are swapped. This moves the current element towards the beginning of the array, closer to its correct sorted position.

5. **Moving Backwards Through the Array**: `i -= 1`
  * After swapping, we decrement `i` by 1 to compare the now swapped element with its new preceding element. This continues until the current element is larger than the previous element or it becomes the first element of the array. This step is crucial as it ensures that each element is moved back to its correct position in the sorted portion of the array.

6. **Returning the Sorted Array**: `return arr`
  * After the outer loop completes (meaning all elements have been compared and moved to their correct positions), the sorted array is returned.


## Sample Usage
```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        while i > 0 and arr[i] < arr[i - 1]:
            arr[i], arr[i - 1] = arr[i - 1], arr[i]
            i -= 1
    return arr

arr = [5, 8, 1, 2, 7, 4, 3, 6,  9, 10]
insertion_sort(arr)
print(arr) #Outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Initialization
- `arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]`: This initializes our array with ten unsorted elements.

### Calling the Insertion Sort Function
- Executes `insertion_sort(arr)`: This starts the sorting process on the entire array.

### Function Execution - Step by Step

#### First Iteration (i=1)
- **Current Element**: `8` (No action needed as `8` > `5`).
- **Array State**: `[5, 8, 1, 2, 7, 4, 3, 6, 9, 10]`.

#### Second Iteration (i=2)
- **Current Element**: `1`.
- **Action**: Since `1` < `8`, and then `1` < `5`, `1` is moved back two positions.
- **Array State**: `[1, 5, 8, 2, 7, 4, 3, 6, 9, 10]`.

#### Third Iteration (i=3)
- **Current Element**: `2`.
- **Action**: `2` is moved back two positions (after `1` and before `5`).
- **Array State**: `[1, 2, 5, 8, 7, 4, 3, 6, 9, 10]`.

#### Fourth Iteration (i=4)
- **Current Element**: `7`.
- **Action**: Since `7` < `8`, it is moved back one position. There is no need to move it further because `7` > `5`.
- **Array State**: `[1, 2, 5, 7, 8, 4, 3, 6, 9, 10]`.

#### Fifth Iteration (i=5)
- **Current Element**: `4`.
- **Action**: `4` is smaller than `8`, `7`, and `5`, so it is moved back three positions to sit after `2`.
- **Array State**: `[1, 2, 4, 5, 7, 8, 3, 6, 9, 10]`.

#### Sixth Iteration (i=6)
- **Current Element**: `3`.
- **Action**: `3` needs to be moved back several positions as it is smaller than `8`, `7`, `5`, and `4`, but larger than `2`. Therefore, it is inserted between `2` and `4`.
- **Array State**: `[1, 2, 3, 4, 5, 7, 8, 6, 9, 10]`.

#### Seventh Iteration (i=7)
- **Current Element**: `6`.
- **Action**: The element `6` is smaller than `8` and `7` but larger than `5`. Thus, it is moved back two positions to sit after `5`.
- **Array State**: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

## Analyzing Insertion Sort
Now, let's delve into the time and space complexity of Insertion Sort.

### Time Complexity
* Best Case: O(n) – The best-case scenario occurs when the array is already sorted. In this case, each element only needs to be compared with its predecessor to confirm its correct position, resulting in a linear time complexity.
* Average Case: O(n²) – On average, each element may need to be compared and swapped with potentially every other element already sorted in the array. This nested loop of comparisons and swaps results in quadratic time complexity.
* Worst Case: O(n²) – The worst-case scenario happens when the array is sorted in reverse order. Each element needs to be moved all the way through the already sorted portion of the array, making the maximum number of comparisons and swaps.

### Space Complexity
* O(1) – Insertion Sort is an in-place sorting algorithm. As such, it doesn't require any additional storage proportional to the input size, leading to a constant space complexity. This makes it memory-efficient, especially for small arrays or datasets.

## When to Use Insertion Sort

Insertion Sort, with its best case time complexity of O(n), is not a particularly fast sorting algorithm. But it does have its advantages in specific scenarios.

### Situations Suited for Insertion Sort

* **Small Datasets**: One of the primary strengths of Insertion Sort lies in its efficiency with small datasets. Due to its low overhead, the algorithm can outperform more complex algorithms like QuickSort and MergeSort when dealing with a small number of elements.

* **Partially Sorted Data**: Insertion Sort excels when the data is already partially sorted. It adapts to the degree of sorting, performing fewer comparisons and shifts, which significantly increases its efficiency in such cases.

* **Online Sorting Applications**: Insertion Sort is an excellent choice for online algorithms, where data arrives in a stream or the full list of items is not known in advance. It can sort the items as they arrive and maintain a continually sorted list.

* **Situations Where Simplicity is Key**: Insertion Sort's straightforward and simple implementation can be advantageous in environments where implementation simplicity and code footprint is more critical than sorting speed.

### Situations Not Suited for Insertion Sort

* **Large Datasets**: For large datasets, the efficiency of Insertion Sort significantly decreases. Its average and worst-case time complexity are O(n²), making it less suitable for sorting large arrays or lists compared to algorithms with O(log n) average time complexity.

* **Data with High Discrepancy in Values**: Insert Sort can be inefficient when the dataset has a wide discrepancy in values and is very randomized, as it may require many comparisons and shifts to insert each element into its proper place.

* **High-Performance Requirements**: Insertion Sort's poor time efficiency makes it a poor choice in situations where time efficiency is critical.

* **Memory Usage is Not a Concern**: Insertion Sort is an in-place sorting algorithm with minimal memory overhead, but this advantage is less relevant in environments where space complexity is not a primary concern.

## Conclusion

In this tutorial, we explored Insertion Sort- a simple and intuitive sorting algorithm- by exploring its logic, implementation in Python, and its use-cases. Insertion Sort is far outshined by its much faster counterparts such as QuickSort and Merge Sort, but it does have its place in its ability to sort in-place, reinforcing the idea that no single sorting algorithm is best for all situations. The choice of sorting algorithm depends on the specific requirements of the application, including the size of the dataset, the nature of the data, and the computational resources available.

Most importantly for the purposes of this tutorial, Insertion Sort serves as a good starting point to learn about sorting algorithms. Its straightforward approach allows new programmers and Python coders to grasp fundamental concepts such as iterative processing and conditional swapping.

Furthermore, mastering Insertion Sort lays the groundwork for tackling more complex sorting algorithms. The insights gained from this simple algorithm form the basis for understanding more advanced algorithms that incorporate similar but more sophisticated techniques. For example, the idea of dividing data into sorted and unsorted portions is a stepping stone to understanding partition-based sorts like QuickSort or the merge operations in Merge Sort.

In conclusion, while Insertion Sort may not be the fastest sorting algorithm, it plays a crucial role in education and in scenarios where its particular strengths are aligned with the task's requirements. This tutorial has aimed to not only teach you how to implement Insertion Sort but also to instill a deeper understanding of sorting algorithms in general. As you continue to explore the vast world of algorithms, remember that the journey of learning and applying these concepts is as important as the destination. Each algorithm you study will add to your toolkit, making you a more proficient and thoughtful programmer.