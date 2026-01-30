# 02. Data Structures 🧱

A Chef has knives, spoons, and ladles.
An Engineer has Arrays, Maps, and Sets.
Choosing the right tool changes an impossible problem into an easy one.

## 1. Arrays: The Row of Mailboxes
Best for: Ordered lists. Accessing by index.
- **Access**: Instant O(1).
- **Insert at Start**: Painful O(n). You have to scoot everyone over.

## 2. Linked Lists: The Treasure Hunt
Data scattered in memory, each holding a note pointing to the next one.
Best for: Inserting into the middle.
- **Insert**: Instant O(1). Just change the pointer.
- **Searching**: Slow O(n). You must follow the trail.

## 3. Stacks & Queues: Specific Rules
- **Stack (LIFO)**: Stack of Pancakes. You can only touch the top one. (Undo buttons use this).
- **Queue (FIFO)**: Line at Starbucks. First come, first served. (Printer jobs use this).

## 4. Hash Maps (Objects): The Cheat Code
Also called Dictionaries.
Key-Value pairs.
`{ "Jain": 123 }`

- **Finding "Jain"**: Instant O(1).
- **Inserting "Jain"**: Instant O(1).

If you are solving an interview problem and it feels slow, the answer is usually **"Use a Hash Map"**.
