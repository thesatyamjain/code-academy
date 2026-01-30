# 03. Tailwind CSS 🍃

CSS has been broken for years.
We tried separating styles from structure, and we ended up with 5,000-line CSS files that everyone was afraid to touch.
**Tailwind** accepts the chaos and tames it.

## 1. The Concept: Utility First
Don't name things based on *what they are* (`.sidebar-wrapper`).
Name things based on *what they do* (`.w-64 .bg-gray-100`).

**Old CSS:**
```css
.alert {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
```

**Tailwind:**
```html
<div class="bg-red-500 text-white p-2 rounded">Error</div>
```

## 2. Why it Wins
- **No Context Switching**: You don't jump between `.js` and `.css` files 100 times a day.
- **Consistency**: You can't accidentally use `margin: 13px`. You must use the design system (p-2, p-3, p-4).
- **Smaller Files**: Tailwind scans your code and *deletes* every CSS class you aren't using.

## 3. Responsive Design: Mobile First
Making a site work on iPhone and Desktop used to be hard.
Tailwind makes it a prefix.

- `w-full`: "On Mobile, be 100% wide."
- `md:w-1/2`: "On Tablet and up, be 50% wide."
- `lg:w-1/3`: "On Desktop and up, be 33% wide."

```html
<div class="w-full md:w-1/2 lg:w-1/3">
    Adaptive Layout
</div>
```

## 4. States made Easy
Hover, Focus, Active... just add a prefix.
```html
<button class="bg-blue-500 hover:bg-blue-700 active:bg-blue-800">
  Click Me
</button>
```
