# 01. SQL & Relational Databases 🐘

**SQL** (Structured Query Language) isn't just a language; it's the bedrock of the internet.
From your bank account to your Facebook profile, if the data matters, it lives here.

## 1. Structure: The Excel Sheet Analogy
Imagine an Excel file where you lock the columns.
- **Rules are strict**: You cannot write "Hello" in a column meant for "Age".
- **Safety First**: If you try to break a rule, the database yells at you. This prevents bad data from corrupting your app.

## 2. Relationships: Connecting the Dots
The real magic is how tables talk to each other.
Instead of duplicating data, we link it.

- **One-to-One**: A User has exactly one Profile.
- **One-to-Many**: A User can have infinite Posts.
- **Many-to-Many**: A Student takes many Classes; A Class has many Students.

## 3. Basic Queries (CRUD)
You don't "ask" the database; you **Command** it.

```sql
-- Create (The "C" in CRUD)
INSERT INTO users (name, age) VALUES ('Alice', 25);

-- Read (The "R" in CRUD)
SELECT * FROM users WHERE age > 21;

-- Update (The "U" in CRUD)
UPDATE users SET age = 26 WHERE name = 'Alice';

-- Delete (The "D" in CRUD)
DELETE FROM users WHERE name = 'Alice';
```

## 4. Joins: The Superpower
Want to see who wrote which post? Don't run two queries. Run one.

```sql
SELECT users.name, posts.title
FROM users
JOIN posts ON users.id = posts.user_id;
```
*Translation*: "Match the ID tag on the User to the ID tag on the Post."

## 5. ACID: Why Banks Love SQL
SQL guarantees 4 things (ACID):
- **Atomicity**: All or nothing. If the power cuts out while transferring money, the money doesn't vanish. It bounces back to the sender.
- **Consistency**: The rules are never broken.
- **Isolation**: Two people buying the last ticket at the exact same millisecond won't cause a glitch.
- **Durability**: Once it says "Saved", it is written in stone (or hard drive).
