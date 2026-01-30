# 02. NoSQL (MongoDB) 🍃

**NoSQL** stands for "Not Only SQL".
It was born from a need for speed and massive scale. Sometimes, strict rules just slow you down.

## 1. Tables vs Documents
In SQL, you fight to fit data into rows.
In MongoDB, you just save the **Object** as it is.

**SQL Row (Rigid):**
`id: 1` | `name: "Alice"` | `age: 25`

**Mongo Document (Flexible JSON):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Alice",
  "bio": "I love coding!",
  "hobbies": ["Chess", "Hiking"], 
  "address": { "city": "NYC", "zip": "10001" }
}
```
*So What?* You can save Arrays and nested Objects directly. No need for complex "Join" tables just to save a list of hobbies.

## 2. Freedom (Schema-less)
In SQL, adding a `phone_number` column to a 10-million-row table is a nightmare migration.
In Mongo, you just start sending the new field. Old data stays the same; new data has the phone number.
**Benefit**: You can iterate on your product features 10x faster.

## 3. Scaling: Horizontal vs Vertical
- **SQL (Vertical)**: Needs a bigger, stronger computer (More RAM/CPU). Expensive limits.
- **NoSQL (Horizontal)**: Just buy 100 cheap computers and split the data across them (Sharding). Unlimited scale.

## 4. Mongoose: Taming the Chaos
Comparing raw Mongo to **Mongoose** is like comparing raw metal to a car.
Mongoose gives you structure *inside* your code, without strict database rules.

```javascript
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
