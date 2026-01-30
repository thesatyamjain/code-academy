# 04. How the Internet Works 🌏

Use the Internet? Every day.
Know how it works? Probably not.
Let's trace what happens when you type `google.com`.

## 1. The Address (IP & DNS)
Computers don't know names like "Google". They know coordinates.
**IP Address**: `142.250.190.46` (The exact house address).
**DNS**: The Phonebook. converting "google.com" -> `142.250.190.46`.

## 2. The Journey (Packets)
Your data isn't one big box. It's 1,000 tiny envelopes (Packets).
If you send a photo, it is chopped up.
Packet 1 takes the highway. Packet 2 takes the backroads.
They meet at the destination and the computer reassembles the puzzle.

## 3. The Language (HTTP)
Browsers and Servers speak **HTTP**.
- **Browser (Client)**: "GET /index.html" (Can I see your homepage?)
- **Server**: "200 OK. Here is the file."

## 4. The Skeleton, Skin, and Muscle
What does the server send back?
1.  **HTML**: The Content ("Hello World").
2.  **CSS**: The Style (Make it blue).
3.  **JavaScript**: The Action (Animate it).

Your browser is just an engine that takes these text files and draws a picture.
