# 04. TypeScript Guide 🔷

JavaScript is like a playful puppy. It lets you do anything (even things that generate errors).
TypeScript is the muzzle. It stops you from doing stupid things *before* you run the code.

## 1. Static Typing
`name` is a string. `age` is a number.
If you try `age = "hello"`, TypeScript shouts at you.
**Why?** Most bugs are just "Type Errors" (expecting a number, getting a string). TS kills these bugs forever.

## 2. Interfaces: The Blueprint
Define the shape of your data.

```typescript
interface User {
  id: number;
  username: string;
  isAdmin?: boolean; // Optional!
}

function login(user: User) {
  console.log(user.username);
}
```
Now, if you try to pass an object missing a `username` to the `login` function, the code won't compile.

## 3. Generics: Flexible Types
Sometimes you want a function to work with *any* type, but still be safe.
Think of it like a variable for types.

```typescript
// Box takes "Type T" and returns "Type T"
function box<T>(item: T): T {
  return item;
}

const num = box<number>(123); // T becomes number
const str = box<string>("Hi"); // T becomes string
```

## 4. The Compiler
Browsers don't speak TypeScript.
You must **Compile** (Transpile) it into JavaScript.
`tsc myFile.ts` -> creates `myFile.js`
In the modern world (Next.js/Vite), this happens automatically in the background.
