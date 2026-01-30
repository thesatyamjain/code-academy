# 03. JavaScript DOM Interaction ⚡

HTML sits there. CSS makes it pretty.
JavaScript makes it **Dance**.

## 1. Selecting Elements (The Hook)
Before you can change an element, you have to grab it.
- `document.getElementById('my-btn')`: The old reliable.
- `document.querySelector('.my-class')`: The modern sniper. Finds the *first* match.

## 2. Events (The Trigger)
Code doesn't just run. It waits for a signal.
```javascript
const btn = document.querySelector('button');

// "Listen" for a click
btn.addEventListener('click', () => {
    console.log("Ouch! You clicked me.");
});
```
*Never* use `onclick=""` in HTML. Keep your logic in your JS file.

## 3. Manipulation (The Change)
Once you have the element and the trigger, do something.
- **Change Text**: `element.innerText = "New Title"`
- **Change Style**: `element.style.backgroundColor = "red"`
- **Add Class**: `element.classList.add('dark-mode')` -> *The best way.*

## 4. Creating Elements
You don't just edit existing stuff. You can birth new elements.
```javascript
const newLi = document.createElement('li'); // Create
newLi.innerText = "Milk";                 // Stuff
document.querySelector('ul').appendChild(newLi); // Attach
```
This is how To-Do lists and infinite feeds work.
