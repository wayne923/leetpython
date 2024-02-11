# List

A list is a mutable object that contains an ordered sequence of objects and is defined by square brackets.

Here's an example-

```python
numbers=[1,2,3,4,5]
```

## Operations

Lists support all the standard mutable sequence operations, along with the standard built-in functions and its own built-in methods. All the possible operations supported by list objects can be shown in the table below. Feel free to use this as a resource whenever you need to remember what you can do with a list!


| Operation | Explanation | Example |
|-----------|-------------|---------|
| `list1+list2` | Concatenates (combines) list1 and list2 together and returns a new list. Can combine multiple lists. | `list1 = [1, 2, 3]`<br />`list2 = [4, 5, 6]`<br />`print(list1 + list2)`  # Outputs: [1, 2, 3, 4, 5, 6] |
| `list * number` or `number * list` | Returns a new list that has the items within the list repeated ‘number’ of times. | `list1 = [1, 2, 3]`<br />`print(list1 * 3)`  # Outputs: [1, 2, 3, 1, 2, 3, 1, 2, 3] |
| `list*=number` | Updates the list by repeating its items ‘number’ of times. | `list1 = [1, 2, 3]`<br />`list1 *= 2`<br />`print(list1)`  # Outputs: [1, 2, 3, 1, 2, 3] |
| `list1+=list2` | Appends the items in list2 to list1. It is functionally the same as using list.append() | `list1 = [1, 2, 3]`<br />`list2 = [4, 5, 6]`<br />`list1 += list2`<br />`print(list1)`  # Outputs: [1, 2, 3, 4, 5, 6] |
| `Item in list` | Returns True if the item exists in the list. Otherwise returns False. | `list1 = [1, 2, 3, 4, 5]`<br />`print(3 in list1)`  # Outputs: True |
| `item not in list` | Returns True if the item doesn’t exist in the list. Otherwise returns False. | `list1 = [1, 2, 3, 4, 5]`<br />`print(6 not in list1)`  # Outputs: True |
| `list[index value]` | Returns the item located at the specified index value. | `list1 = [1, 2, 3, 4, 5]`<br />`print(list1[3])`  # Outputs: 4 |
| `list[index value start:end]` | Returns a list containing items from the start index value up to, but not including, the end index value. | `list1 = [1, 2, 3, 4, 5]`<br />`print(list1[1:4])`  # Outputs: [2, 3, 4] |
| `List[index value start:end:step over]` | Returns a list containing the index start value up to, but not including, the end index value. Step over value defines how many items to ‘step over’ | `list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`<br />`print(list1[1:9:2])`  # Outputs: [2, 4, 6, 8] |
| `list.index(item,index value start, end)` | Returns the index value of the first instance of item in the list. Optional parameters set the index value to start and end the search. | `list1 = [1, 2, 3, 4, 3, 6, 7, 8, 9, 10]`<br />`print(list1.index(3, 3, 8))`  # Outputs: 4 |
| `list[index value]=item` | Replaces the item located at the specified index value with the new item. | `list1 = [1, 2, 3, 4, 5]`<br />`list1[2] = 7`<br />`print(list1)`  # Outputs: [1, 2, 7, 4, 5] |
| `List[index value start:end]=iterable` | Replaces the items located at the index start value up to, but not including, the end index value with the items within the iterable. | `list1 = [1, 2, 3, 4, 5]`<br />`list1[1:4] = ['a', 'b', 'c']`<br />`print(list1)`  # Outputs: [1, 'a', 'b', 'c', 5] |
| `List[index value start:end:step over]=iterable` | Replaces the items located at the index start value up to, but not including, the end index value with the items within the iterable. Step over value defines how many items to ‘step over’. | `list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`<br />`list1[1:9:2] = ['a', 'b', 'c', 'd']`<br />`print(list1)`  # Outputs: [1, 'a', 3, 'b', 5, 'c', 7, 'd', 9, 10] |
| `Del list[index value start:end]` | Removes the items located at the index start value up to, but not including, the end index value. | `list1 = [1, 2, 3, 4, 5]`<br />`del list1[1:4]`<br />`print(list1)`  # Outputs: [1, 5] |
| `Del list[index value start:end:step over]` | Removes the items located at the index start value up to, but not including, the end index value. Step over value defines how many items to ‘step over’. | `list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`<br />`del list1[1:9:2]`<br />`print(list1)`  # Outputs: [1, 3, 5, 7, 9, 10] |
| `len(list)` | Returns the total number of items within the list. | `list1 = [1, 2, 3, 4, 5]`<br />`print(len(list1))`  # Outputs: 5 |
| `min(list)` | Returns the smallest item within the list. | `list1 =[1, 2, 3, 4, 5]`<br />`print(min(list1))`  # Outputs: 1 |
| `max(list)` | Returns the largest item within the list. | `list1 = [1, 2, 3, 4, 5]`<br />`print(max(list1))`  # Outputs: 5 |
| `list.count(item)` | Returns the total number of times the item appears in the list. | `list1 = [1, 2, 3, 2, 5]`<br />`print(list1.count(2))`  # Outputs: 3 |
| `list.append(item)` | Append the item to the back of the list. | `list1 = [1, 2, 3, 4, 5]`<br />`list1.append(6)`<br />`print(list1)`  # Outputs: [1, 2, 3, 4, 5, 6] |
| `list.clear()` | Remove all items from the list. | `list1 = [1, 2, 3, 4, 5]`<br />`list1.clear()`<br />`print(list1)`  # Outputs: [] |
| `list.copy()` | Returns a new list that contains the same items as the original list. | `list1 = [1, 2, 3, 4, 5]`<br />`list2 = list1.copy()`<br />`print(list2)`  # Outputs: [1, 2, 3, 4, 5] |
| `list.extend(iterable)` | Appends all the items in iterable to the back of the list. | `list1 = [1, 2, 3]`<br />`list1.extend([4, 5, 6])`<br />`print(list1)`  # Outputs: [1, 2, 3, 4, 5, 6] |
| `item.insert(index value, item)` | Updates the list by inserting the item at the given index value. | `list1=[1,2,3,4,5]`<br />`list1.insert(0,6)`<br />`print(list1)` #Outputs: [6, 1, 2, 3, 4, 5] |
| `list.pop(index value)` | Updates the list by removing the item associated with the inputted index value and returning that item. | `list1=[1,2,3,4,5]`<br />`list2=list1.pop(0)`<br />`print(list1)` #Outputs: [2, 3, 4, 5]<br />`print(list2)` #Outputs: 1 |
| `list.remove(item)` | Removes the first instance of the item encountered in the list. | `list1=[1,2,3,4,5,1]`<br />`list1.remove(1)`<br />`print(list1)` #Outputs: [2, 3, 4, 5, 1] |
| `list.reverse()` | Updates the list by reversing the order of its items. | `list1=[1,2,3,4,5]`<br />`list1.reverse()`<br />`print(list1)` #Outputs: [5, 4, 3, 2, 1] |
| `list.sort(key=None,reverse=False)` | Updates the list by sorting its items in ascending order. | `list1=[1,5,2,4,3]`<br />`list1.sort()`<br />`print(list1)` #Outputs [1,2,3,4,5] |