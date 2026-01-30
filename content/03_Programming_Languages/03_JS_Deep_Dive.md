# 03. JavaScript Deep Dive 🟨

You know standard JS. Now let's learn *Modern* JS (ES6+).
This is what professional React developers write.

## 1. Template Literals
Stop using `+` to combine strings. It's ugly and error-prone.
Use Backticks `` ` ``.

```javascript
// Old
var greeting = "Hello " + name + ", welcome to " + city;

// New
const greeting = `Hello ${name}, welcome to ${city}`;
```

## 2. Arrow Functions
Shorter. Cleaner. And they handle `this` better.
```javascript
// Old
function add(a, b) {
    return a + b;
}

// New
const add = (a, b) => a + b;
```

## 3. Destructuring
Unpacking data from boxes instantly.
```javascript
const user = { name: "Alice", age: 25, role: "Admin" };

// Extract name and role into variables
const { name, role } = user;
console.log(name); // "Alice"
```

## 4. Async / Await (The Game Changer)
JavaScript is single-threaded. It can only do one thing at a time.
Fetches used to be "Callback Hell".
Now, we just tell JS to `await` the result.

```javascript
async function getUser() {
    const response = await fetch('/api/user'); // Pause here.
    const data = await response.json();        // Pause here.
    console.log(data);
}
```
It reads like synchronous code, but runs asynchronously.
