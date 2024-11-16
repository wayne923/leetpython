---
title: Merge Sort
tags: [Sorting Algorithms]
---

Sorting is an essential operation in programming and computer science, allowing us to order data in a way that increases its usefulness for analysis, searching, and presentation. So it's no wonder that there's a lot of sorting algorithms out there.

If you've been following our tutorials for sorting algorithms then you're probably familiar with bubble sort and insertion sort- two simple and intuitive sorting algorithms that work well as educational foundations for learning the more complicated and faster sorting algorithms.

In this tutorial we'll explore merge sort, one of the most popular sorting algorithms due to its great time complexity.

## Learning Objectives
By the end of this tutorial, you will:

* Understand what merge sort is and the principle behind its operation.
* Be able to implement a top-down version of merge sort in Python.
* Know when and why to use QuickSort in real-world scenarios.

Ready to dive into one of the most popular sorting techniques? Let's get started!

## What is Merge Sort?
Imagine you're tasked with organizing a deck of playing cards. Instead of sorting each card one by one, or organizing them around chosen cards, you split the deck into two halves. You then continue to split each half into smaller and smaller groups until you are left with individual cards. Finally, you begin merging these smaller groups back together systemically in a way that the deck is fully sorted by the end.

This approach is the essence of merge sort. It recursively divides the array into smaller halves until its left with the smallest possible list (typically containing just a single element), then merges the sublists together into a single sorted list. While is a more complicated method than the other sorting algorithms we've seen so far, this method is highly efficient and scales well, especially with larger datasets.

There are many implementations of merge sort, each with its own nuances and optimizations that helps address a specific need. In this tutorial we'll explore the top-down implementation.

Here’s how the algorithm logic works:

1. Recursively Divide the Array: Split the array into two halves by calculating its middle index. Each resultant halves are then recursively called again by the merge sort algorithm, splitting it again into halves. This recursive call continues until it reaches the base case- wehre the sub-array length is either one or zero, and thus inherently sorted.

2. Merge Sorted Sub-arrays: Once the base cases are reached and each sub-array is sorted, the real magic of merge sort comes into play. The merge process takes two sorted sub-arrays and combines them into one sorted array. This step involves:

    * Initialize Pointers: Initialize two pointers, one for each sub-array, starting at the beginning of these sub-arrays.

    * Compare and Combine: Compare the elements are the pointer indices. The smaller element (or the equal element, to maintain stability) is placed into a new array that becomes the merged sorted array. The pointer of the sub-array from which the element was taken is moved one step forward.

    * Exhaust Remaining Elements: After one of the sub-arrays is completely copied into the merged array, any remaining elements in the other sub-array are copied over. This ensures that no elements are left behind.

3. Recombine to Form Sorted Array: The merged arrays from step 2 are successively recombined up the call stack of the recursion, forming larger sorted arrays at each level of recursion until the entire array is sorted and the recursion unwinds completely.

4. Result: The final sorted array is then returned from the initial call to the merge sort function, providing a fully sorted array as output.

One of the notable features of MergeSort is its stability. Stability in sorting algorithms means that two records with equal keys appear in the same order in sorted output as they appear in the input unsorted array. This characteristic is crucial in scenarios where the relative order of equal elements carries meaning or when sorting is part of a multi-tiered sorting process (e.g., sorting a list of employees first by department and then by name).

MergeSort maintains stability as it merges sub-arrays. During the merge process, if two elements are equal, the element from the left sub-array is always chosen first. This ensures that the original order of equal elements is preserved through to the sorted output. This stability makes MergeSort a preferred choice in systems where this order preservation is important.


Now that we have a high-level understanding of top-down merge sort, let’s dive into its implementation details.

## Top-Down Merge Sort Implementation

Here's how you can implement a top-down merge sort in Python:

```python
def top_down_merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = top_down_merge_sort(arr[:mid])
    right_half = top_down_merge_sort(arr[mid:])

    i, j, sorted_array = 0, 0, []
    while i < len(left_half) and j < len(right_half):
        if left_half[i] <= right_half[j]:
            sorted_array.append(left_half[i])
            i += 1
        else:
            sorted_array.append(right_half[j])
            j += 1
    sorted_array.extend(left_half[i:])
    sorted_array.extend(right_half[j:])

    return sorted_array
```

### Breaking Down the Top-Down Merge Sort Function

### Breaking Down the MergeSort Function

1. **Function Definition**: `def top_down_merge_sort(arr):`
   - This function, named `top_down_merge_sort`, takes a single parameter:
     * `arr`: The array that needs to be sorted.

2. **Determining the Base Case**: `if len(arr) <= 1:`
   - The base case for recursion is when the array length is one or less, meaning the array is inherently sorted and the function can return the array as is. This condition prevents further unnecessary recursion.

3. **Recursive Division**: 
   - **Midpoint Calculation**: `mid = len(arr) // 2`
     - The array is split into two halves by calculating the midpoint. This ensures the array is divided evenly for balanced sorting, where possible.
   - **Recursive Calls**: 
     - `left_half = top_down_merge_sort(arr[:mid])`
     - `right_half = top_down_merge_sort(arr[mid:])`
     - These recursive calls continue to divide the array until the base case is reached for each half, ensuring each segment is broken down to one or zero elements before beginning the merge.

4. **Merging Sorted Arrays**: 
   - **Initialize Pointers and Array**: 
     - `i, j, sorted_array = 0, 0, []`
     - Two pointers, `i` and `j`, are initialized at the start of the two sorted halves respectively, and `sorted_array` is initialized to build the merged array.
   - **Merge Process**:
     - **Compare and Append**: While loops iterate through both halves `i` and `j`:
       - If `left_half[i] <= right_half[j]`: The element from the left half is appended to `sorted_array`, and `i` is incremented.
       - Else: The element from the right half is appended, and `j` is incremented.
     - **Exhaust Remaining Elements**:
       - `sorted_array.extend(left_half[i:])` and `sorted_array.extend(right_half[j:])`
       - These lines handle the case where one half is exhausted before the other. Remaining elements from the non-exhausted half are appended to the `sorted_array`.

5. **Return the Sorted Array**:
   - The merged and sorted array `sorted_array` is returned from each recursive call, gradually building up the sorted array from the smallest sorted pairs to the fully sorted array.

Alright, now let's see this code in action by using it to sort an array of 10 numbers!

## Sample Usage
```python
def top_down_merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = top_down_merge_sort(arr[:mid])
    right_half = top_down_merge_sort(arr[mid:])

    i, j, sorted_array = 0, 0, []
    while i < len(left_half) and j < len(right_half):
        if left_half[i] <= right_half[j]:
            sorted_array.append(left_half[i])
            i += 1
        else:
            sorted_array.append(right_half[j])
            j += 1
    sorted_array.extend(left_half[i:])
    sorted_array.extend(right_half[j:])

    return sorted_array

arr = [5, 8, 1, 2, 7, 4, 3, 6,  9, 10]
sorted_arr = top_down_merge_sort(arr)
print(sorted_arr) #Outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Initialization
- `arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]`: Initializes our array with ten unsorted elements.

### Calling the MergeSort Function
- Executes `top_down_merge_sort(arr)`: Initiates the sorting process for the entire array.

### Function Execution - Step by Step

1. **First Call to MergeSort**:
   - **Input Array**: `[5, 8, 1, 2, 7, 4, 3, 6, 9, 10]`
   - **Divide Step**:
     - Splits into two halves: `[5, 8, 1, 2, 7]` and `[4, 3, 6, 9, 10]`.

2. **Recursive Splitting of the First Half** `[5, 8, 1, 2, 7]`:
   - Splits into `[5, 8]` and `[1, 2, 7]`.
   - **Further Splitting**:
     - `[5, 8]` splits into `[5]` and `[8]`, both of which are single elements and thus considered sorted.
     - `[1, 2, 7]` splits into `[1]` and `[2, 7]`.
       - `[2, 7]` further splits into `[2]` and `[7]`.

3. **Recursive Splitting of the Second Half** `[4, 3, 6, 9, 10]`:
   - Splits into `[4, 3]` and `[6, 9, 10]`.
   - **Further Splitting**:
     - `[4, 3]` splits into `[4]` and `[3]`.
     - `[6, 9, 10]` splits into `[6]` and `[9, 10]`.
       - `[9, 10]` further splits into `[9]` and `[10]`.

4. **Merging Process**:
   - Start merging back the smallest sorted arrays:
     - **Merge `[5]` and `[8]`**: Results in `[5, 8]`.
     - **Merge `[2]` and `[7]`**: Results in `[2, 7]`.
     - **Merge `[2, 7]` with `[1]`**: Results in `[1, 2, 7]`.
     - **Merge `[1, 2, 7]` with `[5, 8]`**: Results in `[1, 2, 5, 7, 8]`.

5. **Merging Second Half**:
   - **Merge `[4]` and `[3]`**: Results in `[3, 4]`.
   - **Merge `[9]` and `[10]`**: Results in `[9, 10]`.
   - **Merge `[6]` with `[9, 10]`**: Results in `[6, 9, 10]`.
   - **Merge `[3, 4]` with `[6, 9, 10]`**: Results in `[3, 4, 6, 9, 10]`.

6. **Final Merging**:
   - **Merge `[1, 2, 5, 7, 8]` with `[3, 4, 6, 9, 10]`**:
     - Starts by comparing `1` from the first half with `3` from the second half and then appending the smaller of the two elements.
     - Continues by systematically comparing and appending the smallest element available from either half.
     - Results in the sorted array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

## Analyzing Merge Sort

Now that we've explored merge sort in detail, let's analyze its performance in terms of time and space complexity—key metrics for assessing an algorithm's efficiency and suitability for various applications.

### Time Complexity

- **Best Case: 𝑂(𝑛 log 𝑛)** – In the best-case scenario, each split divides the array into two nearly equal halves, leading to a balanced binary tree of recursive calls. This results in a logarithmic number of levels of recursion (log n), each level processing n elements in total.
- **Average Case: 𝑂(𝑛 log 𝑛)** – On average, the recursive splits of the array will be reasonably balanced, and the depth of the recursion tree remains logarithmic, similar to the best case. This balanced division ensures that the average time complexity also remains O(n log n).
- **Worst Case: 𝑂(𝑛 log 𝑛)** – Unlike some other algorithms like QuickSort, merge sort maintains a time complexity of O(n log n) even in the worst case. This consistency arises because the algorithm always divides the array into two halves and fully processes every element through merge operations at each level of recursion, regardless of the initial order of the input.

### Space Complexity

- **Top-Down Implementation: O(n)** – merge sort requires additional space proportional to the size of the array due to the temporary arrays used for merging. At each level of recursion, new subarrays are created to hold the sorted elements as they are merged back together, culminating in space requirements linear with the array size.
- **Bottom-Up Approach: O(n)** – While not shown in our example, a non-recursive, iterative or bottom-up version of MergeSort can be implemented. It also requires O(n) space to manage the merged elements across the various stages of the algorithm.

This analysis shows merge sort's reliability and predictability, with its consistent O(n log n) time complexity across best, average, and worst cases. However, its space complexity can be a drawback, especially in environments where memory is at a premium. Despite this, merge sort remains a preferred choice for scenarios where stability is critical and a predictable execution time is more valuable than space efficiency.

## When to Use merge sort

Merge sort is a robust and reliable sorting algorithm that excels in maintaining a consistent performance across different scenarios. Understanding the specific advantages and limitations of merge sort can help you decide when it is the best choice for your sorting needs.

### Situations Suited for Merge Sort

* **Stable Sorting Required**: Merge sort is a stable sort, which means that identical elements retain their relative order post-sorting. This property is crucial in scenarios where the order of equal elements carries meaning, such as when sorting records based on multiple fields.

* **Predictable Performance**: Merge sort offers a guaranteed time complexity of O(n log n) in the best, average, and worst cases. This predictability makes it well-suited for applications where consistent performance is critical, such as time-sensitive computing where fluctuations in sorting time could be problematic.

* **Handling Large Datasets**: Although not as space-efficient as some other algorithms, merge sort's divide and conquer approach handles large datasets effectively. It breaks the data into smaller, more manageable pieces, sorting each one individually and merging them back together, which can be efficiently managed with multi-threading or across distributed systems.

* **Linked Lists**: Merge sort can be implemented in a way that does not require random access to elements, making it ideal for sorting linked lists. Unlike array-based sorts that require index-based access, merge sort navigates through pointers, which is naturally suited to the sequential access model of linked lists.

### Situations Not Suited for Merge Sort

* **Limited Memory Environment**: Due to its use of additional space proportional to the array size for the temporary arrays during the merge steps, merge sort may not be the best choice in environments where memory is highly constrained.

* **Real-Time Systems**: While merge sort is predictable and stable, its requirement for additional space and slightly slower performance compared to more complex algorithms like QuickSort under certain conditions might make it less suitable for high-frequency, real-time systems where both space and time efficiency are at a premium.

* **In-Place Sorting Requirements**: If an application requires in-place sorting where no additional memory should be used, merge sort might not be suitable. In-place sorting algorithms like QuickSort or heapsort might be preferable in these cases.

Understanding these conditions will help you make an informed decision about when to use merge sort, ensuring that you utilize its strengths while avoiding scenarios where its limitations might impact performance or feasibility.


## Conclusion

In this tutorial we explored merge sort, a highly efficient and predictable sorting algorithm perfect for various data sorting needs. We've broken down its divide-and-conquer strategy, provided a detailed explanation of its implementation in Python, and illustrated its process through an step-by-step example. Additionally, we've discussed the specific situations where merge sort excels in performance and where it may be less ideal compared to other sorting algorithms.

Merge sort distinguishes itself with its stable sorting capability and its consistent O(n log n) performance across all cases—best, average, and worst. This makes it an excellent choice for applications where predictability and stability are crucial. However, its relatively high space complexity and the non-in-place nature of its traditional implementation mean that it might not be the best fit in memory-constrained environments.

As you continue to explore and master algorithms and data structures, remember the importance of selecting the right sorting algorithm for your specific needs. merge sort, with its methodical and reliable sorting process, is a valuable tool in your algorithmic toolkit. Yet, the world of sorting algorithms is vast and diverse. Exploring beyond merge sort to understand other algorithms like QuickSort, heapsort, or even non-comparison-based sorts like radixsort will equip you with a broad array of tools. Each algorithm offers unique strengths and caters to specific scenarios, ensuring you're well-prepared to choose the most effective sorting technique based on the characteristics of your data and the demands of your applications.

By arming yourself with knowledge about various sorting techniques, you ensure that you are always ready to deploy the most efficient solution for any given problem, enhancing both your understanding and your ability to tackle complex data-oriented challenges effectively.

## Appendix: Merge Sort Variations

While the standard top-down merge sort is highly efficient and stable, it can be modified to further optimize performance or address specific challenges related to the nature of the input data and operational constraints. These include:

1. **Space Complexity**: Top-down merge sort requires additional space proportional to the size of the array. This can be a significant drawback in environments where memory is limited.

2. **Non-Parallel Processing**: Top-down merge sort does not take advantage of modern multi-core processors. As a result, it does not natively support parallel processing, which could speed up the sorting process considerably on large datasets.

3. **Handling Large Data Sets**: While top down merge sort is excellent for large data sets due to its stable and predictable performance, it can be further optimized to handle very large datasets, particularly those with naturally ocurring sets of sorted data within the dataset itself.

4. **Recursive Overhead**: Like any recursive algorithm, top-down merge sort incurs overhead due to recursive calls. This can be particularly problematic in environments with limited stack depth available.

To address these issues, various optimizations and variations of merge sort have been developed over the years, each intended to address a specific weakness of the top-down variation.

In this section we'll explore some of the notable variations of merge sort, discussing their mechanisms, advantages and drawbacks, and typical use cases.

### In-Place merge sort

#### Addresses 
Space Complexity

#### Overview 
In-Place merge sort modifies the traditional merge sort algorithm to sort the array without using additional space for auxiliary arrays. This variation integrates merging directly within the original array, adjusting elements to their sorted positions without extra storage.

#### Benefits
* Reduces space complexity by not requiring additional storage proportional to the size of the array.
* Maintains the stability and predictable time complexity (O(n log n)) of traditional merge sort.

#### Drawbacks
* More complex to implement correctly, especially the merging phase, which is more intricate when done in-place.
* Potentially slower due to the additional operations needed to manage elements within the same array space.

#### Use Cases 
Ideal for scenarios where memory usage is critical, such as embedded systems or applications with significant memory constraints.

#### Time Complexity

- **Best Case: 𝑂(𝑛 log 𝑛)**
- **Average Case: 𝑂(𝑛 log 𝑛)**
- **Worst Case: 𝑂(𝑛 log 𝑛)**

In-place merge sort maintains the same time complexity across all cases, as the sorting mechanism remains fundamentally the same, though operations are done within the original array space.

### Space Complexity

- **All Cases: 𝑂(1)**

In-place merge sort does not require additional space proportional to the input size for merging, as it works directly within the input array.


#### Implementation
```python
def in_place_merge_sort(arr):
    def merge(arr, start, mid, end):
        if start >= end or mid < start or mid >= end:
            return
        
        first, second = start, mid + 1

        while first <= mid and second <= end:
            if arr[first] <= arr[second]:
                first += 1
            else:
                value = arr[second]
                index = second

                while index != first:
                    arr[index] = arr[index - 1]
                    index -= 1

                arr[first] = value

                first += 1
                mid += 1
                second += 1

    def sort(arr, l, r):
        if l < r:
            m = l + (r - l) // 2

            sort(arr, l, m)
            sort(arr, m + 1, r)
            merge(arr, l, m, r)

    sort(arr, 0, len(arr) - 1)

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
in_place_merge_sort(arr)
print(arr)
```

### Parallel Merge Sort

#### Addresses 
Non-Parallel Processing

#### Overview 
Parallel merge sort enhances the traditional merge sort algorithm by using modern multi-core processors to perform sorting tasks concurrently. This variation divides the array into subarrays which are then sorted in parallel threads, significantly speeding up the sorting process, especially for large datasets.

#### Benefits
* Greatly reduces the time complexity on multi-core systems by parallelizing the divide and conquer steps.
* Particularly effective for sorting large datasets where the overhead of parallel task management is offset by performance gains from concurrent processing.

#### Drawbacks
* More complex to implement and manage due to the concurrency involved.
* Overhead from thread management and synchronization can reduce efficiency on smaller datasets or systems with fewer cores.
* Potential issues with thread safety if not managed correctly.

#### Use Cases 
Highly beneficial in scenarios involving large data volumes that need to be processed quickly or when the application runs on systems with multiple processing cores.

#### Time Complexity

- **Best Case: O(n log n / p)**
- **Average Case: O(n log n / p)**
- **Worst Case: O(n log n / p)**

Where p=the number of processors.

​Parallel processing can significantly decrease the time complexity depending on the number of processors used, as parts of the array are sorted concurrently.

#### Space Complexity
- **All Cases: 𝑂(n)**

Each processor may require a portion of the array to be stored temporarily for merging, depending on how the data is divided and managed across processors.

#### Implementation
```python
from concurrent.futures import ThreadPoolExecutor

def parallel_merge_sort(arr):
    if len(arr) < 2:
        return arr
    else:
        mid = len(arr) // 2
        with ThreadPoolExecutor() as executor:
            left = executor.submit(parallel_merge_sort, arr[:mid])
            right = executor.submit(parallel_merge_sort, arr[mid:])
            left_result = left.result()
            right_result = right.result()
            return merge(left_result, right_result)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
sorted_arr = parallel_merge_sort(arr)
print(sorted_arr)
```

### Natural Merge Sort

#### Addresses 
Handling Large Data Sets

#### Overview 
Natural merge sort is an adaptive sorting algorithm that takes advantage of existing ordered sequences (known as "runs") within the dataset. It identifies naturally occurring sorted subsequences, merges them in each pass, and progressively reduces the number of total runs until the entire array is sorted. This approach minimizes the number of comparisons and merge operations required, making it efficient for data that already contains partially sorted sequences.

#### Benefits
* Efficiently processes datasets with pre-sorted sequences, reducing the time complexity in practical scenarios.
* Minimizes the need for comparisons and movements compared to traditional merge sort when the input array contains significant ordered segments.

#### Drawbacks
* If the array is randomly ordered with few or no runs, the performance reverts to that of regular merge sort, offering no substantial benefit in such cases.
* Slightly more complex logic to identify and manage runs compared to straightforward recursive sorting algorithms.

#### Use Cases 
Especially useful for sorting data that is expected to have large sections already sorted, such as time-stamped log data that accumulates sequentially but may get out of order due to concurrent logging processes or merging of multiple sources.

#### Time Complexity
- **Best Case: O(n)**- This occurs when the input array is already sorted, as natural merge sort will only need to pass through the array once to recognize it's sorted.
- **Average Case: 𝑂(𝑛 log 𝑛)**
- **Worst Case: 𝑂(𝑛 log 𝑛)**- Even with unsorted or inversely sorted data, the natural merge sort exploits any existing natural runs in the data, which can reduce the number of merge passes needed.

#### Space Complexity
- **All Cases: O(n)** 

Similar to traditional merge sort, it requires space for merging, although it optimizes the number of merges by utilizing naturally occurring runs.

#### Implementation
```python
def natural_merge_sort(arr):
    if len(arr) < 2:
        return arr

    runs, sorted_runs = [], []
    lowered = 0
    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            runs.append(arr[lowered:i])
            lowered = i
    runs.append(arr[lowered:]) 

    while len(runs) > 1:
        sorted_runs = []
        for i in range(0, len(runs), 2):
            if i + 1 < len(runs):
                sorted_run = merge(runs[i], runs[i + 1])
                sorted_runs.append(sorted_run)
            else:
                sorted_runs.append(runs[i])
        runs = sorted_runs

    return runs[0]

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
sorted_arr = natural_merge_sort(arr)
print(sorted_arr)
```

### Bottom-Up Merge Sort

#### Addresses 
Recursive Overhead

#### Overview 
Bottom-up merge sort uses an iterative approach that eliminates the recursive calls used in the standard top-down merge sort. It sorts the array by successively merging subarrays of increasing size. Initially, it considers individual elements as sorted subarrays, then pairs of elements, and so forth, doubling the size of subarrays in each pass until the whole array is merged and sorted.

#### Benefits
* Eliminates recursive overhead, making it more suitable for environments with limited stack depth.
* Can be more intuitive to understand and implement in an iterative format, particularly for developers more comfortable with non-recursive logic.

#### Drawbacks
* Like traditional merge sort, it still requires additional space for the merging process, although it does not use additional stack space.
* The iterative process may be slightly less efficient than the recursive approach due to the rigid structure of the merging phases.

#### Use Cases 
Particularly beneficial in systems where the call stack size is a limiting factor, such as in embedded systems with strict memory constraints or languages/environments with limited recursion capabilities.

#### Time Complexity
- **Best Case: 𝑂(𝑛 log 𝑛)**
- **Average Case: 𝑂(𝑛 log 𝑛)**
- **Worst Case: 𝑂(𝑛 log 𝑛)**

The bottom-up approach uses a non-recursive method but follows the same merge procedure that requires the array to be processed in log n levels, each involving O(n) operations.

#### Space Complexity

- **All Cases: O(n)**

Although it avoids the use of stack space because it's not recursive, bottom-up merge sort still requires additional space for storing temporary arrays used during the merging process.

#### Implementation
```python
def bottom_up_merge_sort(arr):
    def merge(low, mid, high):
        left = arr[low:mid+1]
        right = arr[mid+1:high+1]
        i = j = 0
        k = low
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
    
    width = 1
    while width < len(arr):
        l = 0
        while l < len(arr) - width:
            mid = l + width - 1
            high = min(l + width * 2 - 1, len(arr) - 1)
            merge(l, mid, high)
            l += width * 2
        width *= 2
    return arr

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
sorted_arr = bottom_up_merge_sort(arr)
print(sorted_arr)
```