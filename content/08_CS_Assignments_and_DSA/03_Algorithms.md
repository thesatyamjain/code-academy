# 03. Algorithms ⚙️

Data Structures are the ingredients. Algorithms are the recipes.

## 1. Sorting: Creating Order from Chaos
Why study sorting? Because it teaches you trade-offs.

- **Bubble Sort**: Compares neighbors. Slow. O(n^2). Only used for teaching.
- **Merge Sort**: "Divide and Conquer". Splits the list until it's tiny, then rebuilds it in order. Fast. O(n log n).

## 2. Searching: Finding the Needle
- **Linear Search**: Looking at every straw of hay. O(n).
- **Binary Search**: Only works if the hay is already sorted. Eliminates half the pile in one guess. O(log n).

## 3. Recursion: The Loopless Loop
A function that calls itself.
It's elegant, but dangerous.

```javascript
function factorial(n) {
  // BASE CASE: The Emergency Brake
  if (n === 1) return 1; 
  
  return n * factorial(n - 1);
}
```

**⚠️ Warning: Stack Overflow**
If you forget the Base Case, the function calls itself forever until the computer runs out of RAM and crashes your program.
