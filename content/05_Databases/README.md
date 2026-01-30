# 05. Databases & Storage 💾

Data needs a permanent home.

## 🎯 Learning Objectives
- [ ] Design a database schema (Data Modeling).
- [ ] Write SQL Queries.
- [ ] Understand Document Stores (NoSQL).

## 🗺️ The Path

### [1. SQL (Relational Databases)](./01_SQL_Relational.md)
*PostgreSQL / MySQL*
- **Structure**: Tables with rigid columns.
- **Relationships**: One-to-One, One-to-Many, Many-to-Many.
- **Joins**: Combining data from two tables.
- **ACID**: Atomicity, Consistency, Isolation, Durability.

### [2. NoSQL (Document Databases)](./02_NoSQL_Mongo.md)
*MongoDB*
- **Structure**: JSON-like documents. Flexible schemas.
- **Use Case**: Fast prototyping, massive scale, unstructured data.

### [3. ORMs & Caching](./03_ORMs_and_Caching.md)
- Interacting with the DB using code instead of raw SQL strings.
- Examples: Prisma (TS), TypeORM, Mongoose (Mongo).
- **Redis**: Saving frequently accessed data in RAM for lightning speed.

## 🛠️ Project: "Library Catalog"
Design a database for a library.
- **Books Table**: Title, Author, ISBN, Published Date.
- **Users Table**: Name, Email.
- **Loans Table**: Links a User to a Book with a Due Date.
- Write queries to find "All books currently borrowed by User X".
