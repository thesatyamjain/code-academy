# 02. Next.js Mastery 🔼

React is a library (a tool). Next.js is a Framework (a toolbox).
It handles the boring stuff—Routing, SEO, API hosting—so you can just build.

## 1. File-Based Routing: Simplicity Itself
Forget complex router config files.
In Next.js, **Folders are Routes**.

- `app/page.js` → `example.com/` (Home)
- `app/about/page.js` → `example.com/about`
- `app/blog/[slug]/page.js` → `example.com/blog/anything-here`

## 2. Server vs Client: The Great Divide
This is the hardest concept to grasp, but the most powerful.

- **Server Components (Default)**: Rendered on the server. They send pure HTML to the phone. Fast. Perfect for SEO. But they cannot use `onClick` or `useState`.
- **Client Components**: Rendered on the User's device. Interactive. Standard React. Add `'use client'` to the top of the file.

*Rule of Thumb*: Use Server Components for **Content**. Use Client Components for **Interaction**.

## 3. Data Fetching: No More useEffect
In standard React, you show a loading spinner, fetch data, then show content.
In Next.js Server Components, you just... wait.

```javascript
// This runs on the SERVER, before the user even sees the page.
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData(); // Pause here until data arrives
  return <main>{data.title}</main>;
}
```

## 4. API Routes
You don't need a separate Backend project.
Just create `app/api/hello/route.js`. Boom, you have an API endpoint.
```javascript
export async function GET(request) {
  return Response.json({ message: "Hello from the same repo!" });
}
```
