---
title: Quicksort
tags: [Sorting Algorithms]
---

Sorting is an essential operation in programming and computer science, allowing us to order data in a way that increases its usefulness for analysis, searching, and presentation. So it's no wonder that there's a lot of sorting algorithms out there.

If you've been following our tutorials for sorting algorithms then you're probably familiar with bubble sort and insertion sort- two simple and intuitive sorting algorithms that work well as educational foundations for learning the more complicated and faster sorting algorithms. 

In this tutorial we'll explore QuickSort, one of the most popular sorting algorithms that stands out for its efficiency and versatility, especially with large datasets.

## Learning Objectives
By the end of this tutorial, you will:

* Understand what QuickSort is and the principle behind its operation.
* Be able to implement the Hoare Partition Scheme version of the QuickSort algorithm in Python.
* Know when and why to use QuickSort in real-world scenarios.

Ready to dive into one of the most popular sorting techniques? Let's get started!

## What is QuickSort?
Imagine you're organizing a large bookshelf with hundreds of books alphabetically. Instead of sorting through the books one by one, or comparing each book against every other, you start by selecting one book as a reference point. You then decide the placement of all other books based on whether they should come before or after this reference point in alphabetical order.

This decision divides the books into two groups: those that precede the reference book and those that follow it. You then apply the same organizing principle to each group, continuously dividing them until every book is in its rightful place.

This is essentially the strategy employed by QuickSort. A single element from the array, typically referred to as the 'pivot', is selected as the reference point. The array is then partitioned around this pivot, organizing elements into those less than the pivot and those greater than it. This process is recursively applied to the resulting sub-arrays, continuously dividing and organizing the elements until the entire array is sorted. QuickSort uses this efficient divide and conquer approach, which is particularly effective for sorting large datasets rapidly and systematically.

QuickSort can be implemented in various ways, each with its own unique characteristics. In this tutorial we'll explore the Hoare Partition Scheme, named after its creator Tony Hoare.

The process involves these high-level steps:

1.  Select a Pivot: The pivot is the element around which the partitioning occurs. The choice of pivot can be very important to the time efficiency of the algorithm, as significantly influences the number of partitions needed to sort the array. For educational purposes, we choose the first element of the array as the pivot in our example.
2.  Initialize Pointers: Two pointers are initialized at both ends of the array (or sub-array), that are typically called ``left`` and ``right``.
3.  Scan and Swap: The left pointer moves right until an element greater than the pivot is found, and the right pointer moves left until an element less than the pivot is found. These elements are out of place and are swapped. This process continues until the pointers cross.
4.  Partition Point: The position where the pointers cross becomes the new partition point, and is where the array is split for the recursive steps.
5.  Recursion: QuickSort recursively applies these steps to the left and right segments of the array divided at the partition point, efficiently sorting the entire array.

Now that we have a high-level understanding of QuickSort, let’s dive into its implementation details.

## QuickSort Implementation using the Hoare Partition Scheme

Here’s how you can implement QuickSort using the Hoare Partition Scheme in Python:

```python
def quicksort(arr, low=None, high=None):
    if low is None:
        low = 0
      
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quicksort(arr, low, pi)
        quicksort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[low]
    i = low - 1
    j = high + 1

    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        
        arr[i], arr[j] = arr[j], arr[i]
```

### Breaking Down the QuickSort Function

1. **Function Definition**: `def quicksort(arr, low, high):`
 * We define a funct named `quicksort` that takes three parameters:
     * `arr`: The array that needs sorting.
     * `low`: The starting index value of the segment that needs to be sorted.
     * `high`: The ending index value of the segment that needs to be sorted.
     * Both deliberately have a default parameter `None`, allowing us to call `quicksort` without giving the `low` and `high` values.

2. **Determining the Base Case**: `if low < high:`
   * The recursion continues as long as the segment has more than one element, ensuring the function only tries to sort segments with more than one item. This condition prevents infinite recursion and acts as a stopping criterion for the sorting process.

3. **Partitioning the Array**: `pi = partition(arr, low, high)`
   * This divides the array segment into two parts. One part has elements less than the pivot value, and the other has elements greater than the pivot value. The `partition` function returns the index `pi`, indicating the boundary between these two newly formed segments.

4. **Recursive Calls**:
   * **Left Segment Sorting**: `quicksort(arr, low, pi)` - Sorts the left portion of the array, which contains elements lower than the pivot value.
   * **Right Segment Sorting**: `quicksort(arr, pi + 1, high)` - Sorts the right portion of the array, which contains elements higher than the pivot value.

### Breaking Down the Partition Function

1. **Selecting the Pivot**: `pivot = arr[low]`
   * In this case we're choosing the first element of the segment as the pivot value. This acts as the reference point for partitioning the array into two halves.

2. **Initializing Pointers**: 
   * `i = low - 1`: Initialized just before the start of the segment to scan forward.
   * `j = high + 1`: Initialized just after the end of the segment to scan backward.

3. **Locating Elements to Swap**:
   * The inner loops move `i` forward and `j` backward to find elements that are out of place relative to the pivot value. Specifically, it looks for an element greater than or equal to the pivot from the left side and an element less than or equal to the pivot from the right side.

4. **Swapping Elements**: `arr[i], arr[j] = arr[j], arr[i]`
   * Once out-of-place elements are identified, they are swapped. This action moves elements closer to their correct position in relation to the pivot, aiding in the partitioning process.

5. **Termination Condition**: `if i >= j:`
   * The process continues until the pointers `i` and `j` cross each other, marking the end of the partitioning for this segment. At this point, `j` is returned as the partition index, signifying where the array is divided for further sorting steps.

This might be a little confusing to understand just by looking at the code, so let's see it in action.

## Sample Usage
```python
def quicksort(arr, low=None, high=None):
    if low is None:
        low = 0
      
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quicksort(arr, low, pi)
        quicksort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[low]
    i = low - 1
    j = high + 1

    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        
        arr[i], arr[j] = arr[j], arr[i]

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
quicksort(arr)
print(arr) #Outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Initialization
- `arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]`: This initializes our array with ten unsorted elements.

### Calling the QuickSort Function
- Executes `quicksort(arr)`: This starts the sorting process on the entire array.

### Function Execution - Step by Step

1. **First Call to QuickSort**:
   - **Pivot**: The first element `5` is chosen as the pivot.
   - **Initial Setup**:
     - `i` starts from the left end of the array, one position before the first element.
     - `j` starts from the right end of the array, one position after the last element.
   - **Partitioning Process**:
     1. `i` moves right past `5` (pivot) and stops at `8` because `8` > `5`.
     2. `j` moves left and stops at `4` because `4` < `5`.
     3. `arr[i]` (8) and `arr[j]` (4) are swapped. The array now looks like `[5, 4, 1, 2, 7, 8, 3, 6, 9, 10]`.
     4. This process continues, `i` and `j` move and swap `7` and `3`. The array now becomes `[5, 4, 1, 2, 3, 8, 7, 6, 9, 10]`.
     5. Finally, `i` and `j` converge where `i` has traversed past all elements less than `5`, and `j` stands at the position where elements greater than `5` begin.
   - **Concluding the Partition**:
     - The pivot `5` is now in its correct position, as all elements to its left are less than `5`, and all elements to its right are greater than `5`.
     - The final position of `j` indicates the boundary between these two groups. `i` and `j` have effectively partitioned the array with respect to the pivot.
   - **Outcome**:
     - The array is now partitioned into `[3, 4, 1, 2]` and `[8, 7, 6, 9, 10]` with respect to the pivot `5`, which finds its correct sorted position.
     - This step sets the stage for further recursive calls to sort the left and right sub-arrays.

2. **Recursive QuickSort on Left Sub-array** `[3, 4, 1, 2]`:
   - **Pivot**: `3` is selected.
   - **Partitioning**: Results in `[1, 2]` (less than `3`) and `[4]` (greater than `3`). `3` finds its sorted position.
   - **Further Recursion**: The sub-array `[1, 2]` is easily sorted due to its order, requiring minimal swaps.

3. **Recursive QuickSort on Right Sub-array** `[8, 7, 6, 9, 10]`:
   - **Pivot**: `8` is chosen.
   - **Partitioning**: Splits into `[7, 6]` (less than `8`) and `[9, 10]` (greater than `8`). `8` is now in its correct position.
   - **Sorting Sub-arrays**:
     - **Left Sub-array** `[7, 6]`: QuickSort sorts this into `[6, 7]`.
     - **Right Sub-array** `[9, 10]`: Already in order, so QuickSort confirms their positions with minimal effort.

4. **Combining Results**:
   - The recursive calls and partitioning eventually sort the entire array into `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

## Analyzing QuickSort

Now that we've seen QuickSort in action, let's now analyze its performance in terms of time and space complexity- the two standard metrics for evaluating an algorithm's efficiency and feasibility in different scenarios.

### Time Complexity

- **Best Case: 𝑂(𝑛 log 𝑛)** – The best-case scenario occurs when the partition process divides the array into two equal halves, leading to a balanced tree in the recursion. This results in a logarithmic number of levels of recursion, each processing n elements in total.
- **Average Case: 𝑂(𝑛 log 𝑛)** – On average, the pivot divides the array into parts that are not necessarily equal, yet sufficiently balanced to achieve the same logarithmic depth as the best case, making the average time complexity also O(n log n).
- **Worst Case: O(n²)** – The worst-case scenario happens when the partition process ends up with one part as all the elements except the pivot, leading to a recursion tree that is as deep as the number of elements in the array. This scenario typically occurs when the array is already sorted or nearly sorted, and the pivot is chosen as the smallest or largest element of the array.

### Space Complexity

- **Recursive Implementation: O(log n)** – The recursive version of QuickSort requires space for the call stack. In the best and average cases, where the partition is relatively balanced, the depth of the recursive call stack will be logarithmic relative to the size of the array. However, in the worst case, the space complexity can degrade to O(n), corresponding to the recursion depth.

This analysis highlights QuickSort's efficiency and practicality, especially in scenarios where average-case performance is most common. Despite its worst-case scenario, QuickSort remains a popular choice due to its superior average-case performance and simplicity of implementation.

## When to Use QuickSort

QuickSort is a versatile and powerful sorting algorithm known for its efficiency and speed in a wide range of scenarios. However, like any tool, it has situations where it excels and others where alternative approaches might be preferable. Understanding when to utilize QuickSort can greatly enhance the performance and effectiveness of your sorting needs.

### Situations Suited for QuickSort

* **Large Datasets**: QuickSort is highly effective for large datasets. Its average and best-case time complexity of O(n log n) means it can quickly sort even very large arrays or lists.

* **Random Access Data Structures**: QuickSort is particularly well-suited for data structures that allow random access, such as arrays. This is because QuickSort requires the ability to quickly access and swap elements across the dataset.

* **Applications Requiring Quick Sorts**: In scenarios where quick, efficient sorting is critical, such as in database query optimizations or when preparing data for further processing like binary search, QuickSort can provide the necessary speed and efficiency.

* **When Average Case Performance is Critical**: Given that its worst-case performance is rarely encountered in practice due to techniques like random pivot selection, QuickSort is a reliable choice for most practical applications.

### Situations Not Suited for QuickSort

* **Data That is Mostly or Completely Sorted**: In cases where the data is already sorted or nearly sorted, QuickSort's performance can degrade to O(n²), especially if the pivot selection strategy does not adapt to the data's existing order.

* **Systems with Limited Stack Space**: QuickSort's recursive nature means it requires stack space proportional to the depth of the recursive calls. In environments where memory or stack space is at a premium, the potential for a deep recursion stack might pose problems.

* **Real-Time Systems**: For systems that require guaranteed response times, QuickSort's worst-case performance of O(n²) makes it a risky choice, as it cannot guarantee the consistent performance needed in real-time applications.

* **Stability is Required**: QuickSort is not a stable sort; identical elements may not retain their original order post-sorting. If maintaining the order of equal elements is necessary, a stable sorting algorithm should be used instead.

Understanding these scenarios will help you make an informed decision about when to apply QuickSort, ensuring that you leverage its strengths while avoiding situations where it might not be the best fit.

## Conclusion

In this tutorial, we explored QuickSort, one of the most efficient and widely used sorting algorithms. We explained its divide-and-conquer strategy, explored its implementation in Python, and walked through its operation with a practical array sorting example. Additionally, we've analyzed when Quicksort shines in terms of performance and when it might be prudent to consider other sorting algorithms.

Quicksort distinguishes itself with its impressive average and best-case performance, making it an excellent choice for sorting large datasets. Its efficiency, however, is closely tied to the choice of pivot and the data's initial order, showing that one sorting algorithm doesn't fit in every use-case.

As you progress in your journey of mastering algorithms and data structures, remember that the selection of an appropriate sorting algorithm is as critical as its correct implementation. Quicksort, with its rapid sorting capability, is a valuable asset in your algorithmic toolkit. Yet, the realm of sorting is vast and varied. Venturing beyond QuickSort to explore other algorithms like merge sort, heapSort, or even non-comparison-based sorts like radixSort, opens up a broad spectrum of tools tailored to specific scenarios, each with its unique strengths and use cases.

Equipping yourself with knowledge about a diverse array of sorting techniques ensures you're well-prepared to select the most efficient algorithm based on the characteristics of your dataset and the requirements of your application. QuickSort is a fundamental part of this collection, offering a powerful solution for a wide range of sorting needs.

## Appendix: Pivot Selection Strategies

As mentioned in the **What is QuickSort** section earlier, the choice of pivot can drastically change the performance of QuickSort by influencing its average and worst-case time complexities because it influences the number of partitions needed to sort the array.

In this appendix we'll explore why the choice of pivot matters and the resulting pivot selection strategies, their implementation, and their impact on the time complexity.

### Why Does the Pivot Selection Matter?

The choice of the pivot in QuickSort is pivotal—no pun intended—in determining the algorithm's efficiency. This is because the pivot's position after each partitioning significantly influences the number of recursive calls QuickSort must make to sort the entire array. 

* Balanced Partitions: A good pivot choice leads to balanced partitions where each recursive call processes approximately half of the array from the previous step. This balance is crucial for achieving QuickSort's optimal time complexity.
* Unbalanced Partitions: Poor pivot choices lead to highly unbalanced partitions where one side contains significantly more elements than the other. This imbalance increases the depth of the recursion, potentially to O(n), making the overall complexity degenerate to O(n2). This scenario is particularly common when the pivot is consistently the smallest or largest element in the partition, a likely case in nearly sorted or inversely sorted arrays.

Ideally, the pivot would divide the array into two equal parts each time, ensuring the minimal depth of recursive calls, thereby optimizing the time complexity to O(nlogn).

As a result, there are several pivot strategies that are commonly employed, each with its own pros and cons. Let's now briefly go over them.

### Fixed Point (First/Last Element)
####  How it Works
This strategy involves choosing the first or last element of the array as the pivot. It's the simplest form of pivot selection.

#### Pros and Cons
* Pros: Implementation is straightforward and requires minimal overhead.
* Cons: Leads to poor performance in already sorted or nearly sorted arrays, as it does not adapt to the data's inherent order, risking worst-case 
O(n2) time complexity.

#### Time Complexity Analysis
* Best Case: O(n log(n))
* Average Case: O(n log(n))
* Worst Case: O(n²)

#### Implementation in Python:
We used this code in our main tutorial.

### Fixed Point (Middle Element)

#### How it Works
The pivot is selected as the middle element of the array, providing a moderate improvement over the first/last element strategy by potentially avoiding some imbalances.

#### Pros and Cons
* Pros: More likely to achieve a balanced split compared to the first or last elements in certain scenarios.
* Cons: Does not consistently prevent worst-case performance and may still degrade to O(n²) in specially ordered arrays.

#### Time Complexity Analysis
* Best Case: O(n log(n))
* Average Case: O(n log(n))
* Worst Case: O(n²)

#### Implementation
```python
def quicksort_middle_element(arr, low=None, high=None):
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition_middle_element(arr, low, high)
        quicksort_middle_element(arr, low, pi)
        quicksort_middle_element(arr, pi + 1, high)

def partition_middle_element(arr, low, high):
    mid = low + (high - low) // 2
    arr[mid], arr[low] = arr[low], arr[mid]
    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

arr = [5, 8, 1, 2, 7, 4, 3, 6,  9, 10]
quicksort_middle_element(arr)
print(arr)
```

### Random Element

#### How it Works
A pivot is randomly chosen from the array, which helps mitigate the risk of hitting the worst-case scenario by reducing the predictability of the pivot's position.

#### Pros and Cons
* Pros: Reduces the likelihood of degenerate cases, generally providing good performance across a wide range of scenarios.
* Cons: Random choice does not guarantee a balanced partition.

#### Time Complexity Analysis
* Best Case: O(n log(n))
* Average Case: O(n log(n))
* Worst Case: O(n²), but significantly less likely than fixed pivot strategies.

#### Implementation
```python
import random

def quicksort_random_element(arr, low=None, high=None):
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition_random_element(arr, low, high)
        quicksort_random_element(arr, low, pi)
        quicksort_random_element(arr, pi + 1, high)

def partition_random_element(arr, low, high):
    rand_index = random.randint(low, high)
    arr[rand_index], arr[low] = arr[low], arr[rand_index]
    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]


arr = [5, 8, 1, 2, 7, 4, 3, 6,  9, 10]
quicksort_random_element(arr)
print(arr)
```

### Median-of-Three
#### How it Works
The pivot is chosen as the median of the first, middle, and last elements of the array, aiming to more closely approximate the true median and achieve a balanced split.

#### Pros and Cons
* Pros: Often avoids worst-case scenarios and leads to more consistent O(n log(n)) performance by better approximating the median.
* Cons: Slightly more overhead due to the calculation of the median.

#### Time Complexity Analysis

* Best Case: O(n log(n))
* Average Case: O(n log(n))
* Worst Case: O(n²), but significantly rarer.

#### Implementation
```python
def quicksort_median_of_three(arr, low=None, high=None):
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition_median_of_three(arr, low, high)
        quicksort_median_of_three(arr, low, pi)
        quicksort_median_of_three(arr, pi + 1, high)

def partition_median_of_three(arr, low, high):
    mid = low + (high - low) // 2
    if arr[mid] < arr[low]:
        arr[mid], arr[low] = arr[low], arr[mid]
    if arr[high] < arr[low]:
        arr[high], arr[low] = arr[low], arr[high]
    if arr[high] < arr[mid]:
        arr[high], arr[mid] = arr[mid], arr[high]
    arr[mid], arr[low] = arr[low], arr[mid]
    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

arr = [5, 8, 1, 2, 7, 4, 3, 6,  9, 10]
quicksort_median_of_three(arr)
print(arr)
```

### Median of Medians
#### How it Works
This method selects a "good" pivot by finding the median of medians of groups of elements (often groups of five). It's particularly designed to ensure a pivot close to the true median, ensuring balanced partitions.

#### Pros and Cons
* Pros: Almost always avoids worst-case scenarios, therefore almost guaranteeing O(n log(n)) performance.
* Cons: More complex and slower in practice due to overhead of calculating the median of medians.

#### Time Complexity Analysis
Best Case: O(n log(n))
Average Case: O(n log(n))
Worst Case: O(n log(n)), making it the most reliable but complex strategy.

#### Implementation
```python
def quicksort_median_of_medians(arr, low=None, high=None):
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition_median_of_medians(arr, low, high)
        quicksort_median_of_medians(arr, low, pi)
        quicksort_median_of_medians(arr, pi + 1, high)

def partition_median_of_medians(arr, low, high):
    def median_of_medians(a, l, h):
        if h - l + 1 <= 5:
            sorted_segment = sorted(a[l:h+1])
            return sorted_segment[len(sorted_segment) // 2]
        
        medians = []
        for i in range(l, h + 1, 5):
            sub_right = min(i + 4, h)
            sub_list = sorted(a[i:sub_right + 1])
            medians.append(sub_list[len(sub_list) // 2])
        
        mid = len(medians) // 2
        return median_of_medians(medians, 0, len(medians) - 1)


    pivot = median_of_medians(arr, low, high)
    pivot_index = arr.index(pivot, low, high+1)  
    arr[low], arr[pivot_index] = arr[pivot_index], arr[low]  

    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
quicksort_median_of_medians(arr)
print(arr) 
```

### So Which is Best?
Among the discussed strategies, Median of Medians is generally considered the most superior in terms of ensuring consistently high performance across all types of data distributions. While it comes with a higher computational overhead, its ability to reliably prevent worst-case scenario of O(n²) justifies its use in environments where data variability is high and performance consistency is crucial.

But if performance is not critical, then randomized element QuickSort is a good choice. Randomizing the pivot selection effectively means the average-case time complexity is O(n log(n)), making it ideal for a broad use case.

By understanding these pivot selection strategies, developers can better tailor QuickSort's implementation to meet specific data characteristics and performance requirements to achieve optimal sorting results.

## Appendix: QuickSort Variations

Despite its effectiveness, the basic implementation of QuickSort can encounter performance inefficiencies depending on the nature of the input data and operational constraints. These inefficiencies typically arise from:

1. **Poor Pivot Selection**: The choice of the pivot can greatly affect the algorithm's efficiency. Poor pivot selection may lead to highly unbalanced partitions, especially in nearly sorted arrays or arrays with many duplicate elements, resulting in performance degradation close to O(n²)

2. **Recursion Overheads**: QuickSort is inherently recursive. Deep recursion stacks, particularly in the worst-case scenario, can lead to considerable overheads and even stack overflow in systems with limited stack memory.

3. **Handling Duplicates**: The classic QuickSort does not efficiently handle arrays with many duplicate elements, as duplicates are treated the same as unique elements, which can lead to unnecessary partitioning operations.

4. **Utilization of Modern Hardware**: QuickSort's recursive, single-threaded nature doesn't automatically exploit modern multi-core processors, which can parallelize tasks to achieve faster processing times.

Over the years developers created variations of Quicksort that addresses these challenges, optimizing Quicksort for specific scenarios. These variations aim to enhance performance by improving pivot selection, reducing recursion depth, efficiently handling duplicates, and utilizing multi-core architectures for parallel computation. Each variation is designed with specific use cases in mind, providing tailored solutions that extend the applicability and efficiency of QuickSort across different environments and requirements.

In this section we'll explore some of the notable variations of QuickSort, discussing their mechanisms, advantages, and typical use cases to understand why and how they update the classic Hoare Partition Scheme QuickSort algorithm for their own use.

### Introspective QuickSort (Introsort)

#### Addresses 
Poor Pivot Selection

#### Overview 
Introsort begins with the typical QuickSort algorithm but monitors the depth of the recursion. If it detects that the recursion depth is becoming too deep, which often indicates poor pivot choices leading to unbalanced partitions, it switches to HeapSort. This hybrid approach ensures that the sorting process does not degrade to O(n²) performance

#### Benefits
* Guarantees 𝑂(𝑛 log 𝑛) worst-case time complexity.
* Prevents deep recursion stacks, thus avoiding stack overflow in environments with limited stack memory.

#### Use Cases 
Particularly useful in scenarios where data might be structured in a way that traditionally leads to poor pivot selections, such as datasets with hidden ordered patterns or certain types of real-world data that aren't completely random.

#### Time Complexity

- **Best Case: 𝑂(𝑛 log 𝑛)**
- **Average Case: 𝑂(𝑛 log 𝑛)**
- **Worst Case: 𝑂(𝑛 log 𝑛)**– Introsort switches to HeapSort, which guarantees 𝑂(𝑛 log 𝑛) complexity, preventing the usual worst-case O(n²) performance of QuickSort.

#### Space Complexity
- **All Cases: 𝑂(𝑛 log 𝑛)**

The space complexity is dominated by the stack space used in the worst case. HeapSort used in introsort also complies with O(1) additional space, keeping overall space usage minimal.

#### Implementation
```python
import heapq  # For HeapSort in case of depth limit breach

def introsort(arr, low=None, high=None, depth_limit=None):
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    if depth_limit is None:
        depth_limit = 2 * (high - low).bit_length()  # Set the maximum allowed depth

    if low < high:
        if depth_limit == 0:
            # If the depth limit is reached, perform a heapsort on the remaining elements
            heapq.heapify(arr[low:high+1])
            for i in range(low, high+1):
                arr[i] = heapq.heappop(arr[low:high+1])
        else:
            pi = partition(arr, low, high)  # Hoare partition
            introsort(arr, low, pi, depth_limit - 1)
            introsort(arr, pi + 1, high, depth_limit - 1)

def partition(arr, low, high):
    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
introsort(arr)
print(arr)
```

### Non-Recursive QuickSort

#### Addresses: 
Recursion Overheads

#### Overview 
This variation of QuickSort eliminates the use of the system's call stack by managing the partitioning process through an explicit stack data structure. By doing so, it turns the recursive sorting process into an iterative one, thereby reducing the overhead associated with recursive function calls.

#### Benefits
* Eliminates the risk of stack overflow due to deep recursion.
* Often provides performance benefits in environments with non-optimized recursion handling.

#### Use Cases 
Ideal for systems with limited stack space or where recursion handling is not optimal, such as certain embedded systems.

#### Time Complexity
- **Best Case: 𝑂(𝑛 log 𝑛)**
- **Average Case: 𝑂(𝑛 log 𝑛)**
- **Worst Case: O(n²)** -  Similar to the traditional recursive QuickSort, the performance can degrade without careful pivot selection.

#### Space Complexity
- **All Cases:: O(log n)** - Non-recursive QuickSort uses an explicit stack to manage subarray indices that need sorting, which limits the space used to the depth of the stack, equivalent to the depth of recursion in the recursive version.

#### Implementation
```python

def non_recursive_quicksort(arr):
    stack = [(0, len(arr) - 1)]
    while stack:
        low, high = stack.pop()
        if low < high:
            pi = partition(arr, low, high)
            stack.extend([(low, pi), (pi + 1, high)])

def partition(arr, low, high):
    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
non_recursive_quicksort(arr)
print(arr)
```

### 3-Way QuickSort (Dutch National Flag)

#### Addresses 
Handling Duplicates

#### Overview 
Developed by Edsger Dijkstra, the 3-Way QuickSort enhances the basic algorithm to efficiently handle arrays with numerous duplicate elements. It partitions the array into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot.

#### Benefits
* Reduces unnecessary comparisons and swaps when there are many duplicates.
* Performs well on datasets with high repetition rates of elements, leading to significant efficiency improvements in such cases.

#### Use Cases
Extremely effective for sorting databases or datasets where some values occur with high frequency, such as sorting of categorical data with limited unique categories.

#### Time Complexity
- **Best Case: O(n)** - Occurs when all elements are the same, or nearly all elements are equal, significantly reducing the number of comparisons needed.
- **Average Case: 𝑂(𝑛 log 𝑛)**
- **Worst Case: 𝑂(𝑛 log 𝑛)** - Better handles arrays with many duplicate keys by partitioning elements into three groups (less than, equal to, and greater than the pivot), which avoids redundant comparisons and reduces time complexity.

#### Space Complexity
- **All Cases:: O(log n)**

#### Implementation
```python
def three_way_quicksort(arr, low=None, high=None):
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    if low < high:
        lt, gt = three_way_partition(arr, low, high)
        three_way_quicksort(arr, low, lt - 1)
        three_way_quicksort(arr, gt + 1, high)

def three_way_partition(arr, low, high):
    pivot = arr[low]
    lt = low  # Less than pivot
    gt = high  # Greater than pivot
    i = low
    while i <= gt:
        if arr[i] < pivot:
            arr[lt], arr[i] = arr[i], arr[lt]
            lt += 1
            i += 1
        elif arr[i] > pivot:
            arr[gt], arr[i] = arr[i], arr[gt]
            gt -= 1
        else:
            i += 1
    return lt, gt

arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
three_way_quicksort(arr)
print(arr)
```

### Parallel QuickSort

#### Addresses 
Utilization of Modern Hardware

#### Overview 
Parallel QuickSort takes advantage of multi-threading capabilities of modern processors to perform sorting operations in parallel. This approach can significantly reduce the sorting time by simultaneously processing multiple partitions of the array.

#### Benefits
* Utilizes multi-core architectures effectively to speed up the sorting process.
* Scalable performance gains that align with the increase in the number of available processing cores.

#### Use Cases 
Highly beneficial for large-scale sorting tasks in multi-core environments, such as in data centers or for high-performance computing applications where time efficiency is critical.

#### Time Complexity

- **Best Case: O(n log n / p)**
- **Average Case: O(n log n / p)**
- **Worst Case: O(n log n / p)**

Where p=the number of processors.

​Parallel processing can significantly decrease the time complexity depending on the number of processors used, as parts of the array are sorted concurrently.

#### Space Complexity
- **All Cases: 𝑂(𝑛 log 𝑛)**

Each processor may require a portion of the array to be stored temporarily for merging, depending on how the data is divided and managed across processors.

#### Implementation
```python
from concurrent.futures import ThreadPoolExecutor

def parallel_quicksort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1

    if low < high:
        pi = partition(arr, low, high)
        with ThreadPoolExecutor() as executor:
            futures = [
                executor.submit(parallel_quicksort, arr, low, pi),
                executor.submit(parallel_quicksort, arr, pi + 1, high)
            ]
            for future in futures:
                future.result()  # Wait for all threads to complete

def partition(arr, low, high):
    pivot = arr[low]
    i = low - 1
    j = high + 1
    while True:
        i += 1
        while arr[i] < pivot:
            i += 1
        j -= 1
        while arr[j] > pivot:
            j -= 1
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]
  
arr = [5, 8, 1, 2, 7, 4, 3, 6, 9, 10]
parallel_quicksort(arr)
print(arr)
```