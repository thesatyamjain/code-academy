# 02. CSS Mastery 🎨

HTML is ugly. Plain text on a white background.
CSS (Cascading Style Sheets) is the makeup, the paint, and the fashion.

## 1. The Box Model: Everything is a Box
This is the #1 concept to learn. Every single thing on a website is a rectangle.
It has four layers (From inside out):
1.  **Content**: The text/image itself.
2.  **Padding**: The space *inside* the border (The bubble wrap).
3.  **Border**: The edge (The cardboard box).
4.  **Margin**: The space *outside* the box (Distance to other packages).

*Pro Tip*: Set `box-sizing: border-box` globally. It makes math sane again.

## 2. Flexbox: 1D Layout
Alignment used to be a nightmare of `float: left`.
**Flexbox** fixed it.
- `display: flex`: "Okay children, get in a line."
- `justify-content: center`: "Move to the middle."
- `gap: 20px`: "Don't touch each other."

## 3. Grid: 2D Layout
Flexbox is for a row of buttons. **Grid** is for the whole page layout.
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Sidebar fixed, Content fills rest */
}
```

## 4. Specificity wars
If you say "All Layouts are Blue" but "This Layout is Red", who wins?
The more specific selector wins.
`#id` > `.class` > `tag`.
*Avoid IDs for styling.* They are too powerful and hard to override. Stick to classes.
