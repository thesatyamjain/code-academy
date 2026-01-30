# 02. Python Essentials 🐍

Python is famous for one thing: **Readability**.
It reads almost like English.
That's why it's the language of Choice for AI, Data Science, and Beginners.

## 1. Syntax: Whitespace Matters
In other languages, you use `{}` to group code.
In Python, you use **Indentation** (Spaces).
If your indentation is messy, your code breaks. It forces you to be neat.

```python
if user_is_logged_in:
    print("Welcome") # Indented! This belongs to the IF.
print("Finished")    # Not indented. Run this regardless.
```

## 2. Lists & Dictionaries
Data usually comes in groups.
- **List (Array)**: Ordered items. `shop_list = ["Eggs", "Milk"]`.
- **Dictionary (Hash Map)**: Labeled data. `user = { "name": "Alice", "id": 1 }`.
  *Analogy*: List is a To-Do list. Dictionary is a Phonebook.

## 3. Modules: Batteries Included
Python comes with a toolbox.
- `import math`: Advanced math functions.
- `import random`: Generate random numbers.
- `import os`: Talk to your operating system.

Don't write what you can import.

## 4. List Comprehensions: The Python One-Liner
The "Pythonic" way to write code.
```python
# Old Way
squares = []
for x in range(10):
    squares.append(x**2)

# Python Way
squares = [x**2 for x in range(10)]
```
It's elegant. It's concise. It makes you feel like a wizard.
