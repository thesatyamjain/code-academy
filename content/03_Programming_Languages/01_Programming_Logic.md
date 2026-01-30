# 01. Programming Logic 🧠

Forget syntax. Forget semicolons.
Programming is about **Thinking**.
It's about breaking a big problem into tiny, stupid steps that a rock (the computer) can understand.

## 1. Variables: The Buckets
A variable is just a labeled bucket.
- `name = "Jain"` (This bucket holds text).
- `age = 25` (This bucket holds a number).
- `isAlive = True` (This bucket holds a Yes/No).

## 2. Control Flow: The Traffic Cop
Code reads from top to bottom. Unless you tell it to jump.
- **If / Else**: Decision making.
  "IF it is raining, take umbrella. ELSE, take sunglasses."
- **Loops**: Repetition.
  "WHILE I am hungry, eat pizza." (Be careful, if you never get full, you crash).

## 3. Functions: The Machines
Don't repeat yourself.
If you bake bread every day, build a Bread Machine.
- **Input**: Flour, Water, Yeast.
- **Machine**: Mix > Knead > Bake.
- **Output**: Bread.

```python
def make_bread(flour, water):
    return "Bread"
```

## 4. Debugging: The Detective Work
Your code *will* break.
Debugging isn't "fixing". It's "investigating".
- Read the Error Message (It usually tells you the line number).
- `print(variable)`: Put checkpoints in your code to see what the value is at that moment.
