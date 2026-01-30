# 03. ORMs & Caching ⚡

Raw SQL is powerful, but it's ugly to write in JavaScript files.
And databases on a hard drive are "slow" (milliseconds).
We need tools to make coding faster and apps instant.

## 1. ORM: Talking to the DB in JavaScript
**ORM** (Object Relational Mapper) translates your code into SQL.
You write a function; it writes the query.

**Raw SQL (The Hard Way):**
```sql
SELECT * FROM users WHERE email = 'alice@example.com' LIMIT 1;
```

**Prisma ORM (The Easy Way):**
```javascript
const user = await prisma.user.findUnique({
  where: { email: 'alice@example.com' },
})
```
*Benefit*: **Type Safety**. If you misspell `email`, your code won't even compile. It catches bugs before you run them.

## 2. Caching (Redis): The Need for Speed
Your main database (Postgres/Mongo) lives on a **Disk** (SSD/HDD). Access time: ~50ms.
**Redis** lives in **RAM**. Access time: ~1ms.

### The Short-Term Memory Analogy
- **Database**: The text book in the library (Reliable, slow to find).
- **Redis**: The sticky note on your forehead (Instant, small capacity).

### How it works:
1. User asks: "Who is looking at this page?"
2. Check Redis? **Hit!** Return instantly.
3. Check Redis? **Miss.** Go to DB (slow), save result to Redis, then return.

### Use Cases
- Storing "Who is logged in?" (Sessions).
- Leaderboards (Updating score 100 times/sec).
- Caching expensive API results.
