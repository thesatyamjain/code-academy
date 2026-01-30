# 01. HTML5 Deep Dive 💀

HTML is not "Code". It's **Structure**.
Just like a house has beams and studs before you paint the walls, a website has HTML.

## 1. Semantics: Meaning over Looks
In the old days, we just used `<div>` for everything.
Now, we tell the computer *what* the content is.
- `div` -> "A generic box." (Meaningless).
- `nav` -> "This is navigation."
- `article` -> "This is a blog post."
- `footer` -> "This is the bottom."

*Why?* Because Screen Readers (for the blind) and Google Bots need to know what is important.

## 2. The DOM Tree
HTML creates a family tree.
```html
<body>
    <div> <!-- Parent -->
        <p>Child</p>
    </div>
</body>
```
The browser reads this and builds the **Document Object Model (DOM)**. This is the map that JavaScript uses to find things later.

## 3. Forms & Inputs
The only way users talk back to you.
- `<input type="text">`: Standard box.
- `<input type="password">`: Hides the text (dots).
- `<input type="email">`: Validates that it has an "@" symbol automatically.

**Rule**: Always wrap inputs in a `<form>` tag. It handles the "Enter Key" submission for free.
