# 01. Big O Notation 📉

How do we measure "good" code?
Not by how clean it looks. By how it survives an avalanche of data.
**Big O** is the speedometer for algorithms.

## 1. Time Complexity: Racing Against Growth
If I give you 10 items, your code is fast.
If I give you 10,000,000 items, does your code freeze?

### O(1) - The Instant
Does not care about size.
Accessing an array index `arr[5]` takes the same time whether the array has 5 items or 5 billion.
*The Gold Standard.*

### O(n) - The Commuter
Linear growth.
Reading a book page-by-page. If the book is twice as thick, it takes twice as long.
*Acceptable.*

### O(n^2) - The Disaster (Nested Loops)
Quadratic growth.
Checking every person against every other person in a room.
If you double the people, the work quadruples.
*Avoid at scale.*

## 2. Space Complexity: The RAM Eater
It's not just about Time. It's about Memory.
- **O(1) Space**: Using a single variable to count a list. Efficient.
- **O(n) Space**: Copying a list into a new list. Expensive.

## 3. The Phonebook Analogy (O(log n))
Binary Search.
To find "Mike" in a phonebook, you don't read every name (O(n)).
You open the middle. "M" is after "G". You throw away the first half.
You repeat.
Massively efficient.
