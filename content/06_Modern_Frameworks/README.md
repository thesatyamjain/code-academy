# 06. Modern Frameworks 🚀

Writing raw HTML/JS is slow for big apps. Frameworks give us speed and component reusability.

## 🎯 Learning Objectives
- [ ] Build Single Page Applications (SPAs) with React.
- [ ] Understand Server Side Rendering (SSR) with Next.js.
- [ ] Style rapidly with Utility-First CSS.

## 🗺️ The Path

### [1. React.js](./01_React_Essentials.md)
- **Components**: UI is built of Lego blocks.
- **State (useState)**: Data that changes over time.
- **Effects (useEffect)**: Reacting to changes (fetching data when component loads).
- **Props**: Passing data down from parent to child.

### [2. Next.js (The React Meta-Framework)](./02_NextJS_Mastery.md)
- **Routing**: File-based routing (`/pages/about.js` -> `/about`).
- **Rendering**: Static Site Generation (SSG) vs Server Side Rendering (SSR).
- **API Routes**: Writing backend code inside the frontend project.

### [3. Tailwind CSS](./03_Tailwind_CSS.md)
- Writing CSS classes directly in HTML.
- Example: `<div class="bg-red-500 text-white p-4 rounded">Error</div>`
- Benefits: Speed, consistency, no jumping between files.

## 🛠️ Project: "E-Commerce Frontend"
Build a product browsing page.
- Fetch products from a fake API.
- Display them in a grid.
- Add a "Cart" state that persists even if you refresh (using LocalStorage).
