# 01. Node.js & Runtime Environments 🟢

For years, JavaScript was trapped inside your browser. It could animate a button, but it couldn't touch a file or start a server.
**Node.js** (2009) broke it out of that cage.

## 1. What is a Runtime?
Think of **V8** (Chrome's JS engine) as a high-performance Ferrari engine.
Ryan Dahl took that engine out of the car (Browser) and put it in a tank (Server).

- **Browser JS**: "I can verify a form." (Safe, Sandboxed).
- **Node.js**: "I can delete your hard drive." (Powerful, Unrestricted).

## 2. 'npm': The World's Largest Lego Store
You don't have to build everything from scratch. Want to generate a unique ID? Don't write the math yourself. Download a battle-tested library.

- **package.json**: Your shopping list.
- **node_modules**: The warehouse where the parts live (Heavy! Never commit this to Git).

```bash
# Start a new project (creates package.json)
npm init -y

# Download a tool (e.g., UUID generator)
npm install uuid
```

## 3. The File System (fs)
Why care? Because servers need to log errors to a file, read configuration secrets, or process user uploads.

**Synchronous (Blocking)**: "Stop the entire server until I read this file."
**Asynchronous (Non-blocking)**: "Read this in the background and tell me when you're done."

```javascript
const fs = require('fs');

// ⚠️ DANGEROUS: Stops everything. Use only for startup config.
const secrets = fs.readFileSync('secrets.txt', 'utf-8');

// ✅ SAFE: Reads while other users browse the site.
fs.readFile('large-video.mp4', (err, data) => {
    if (err) console.error("Could not read file");
    else console.log("File loaded!");
});
```

## 4. Modernizing: Import vs Require
Node.js is old enough to have a legacy.
- **CommonJS**: `const config = require('./config')` (The classic way).
- **ES Modules**: `import config from './config'` (The modern standard).

*Pro Tip*: Add `"type": "module"` to your `package.json` to use modern imports today.

## 🧩 Challenge: CLI Tool
Write a script named `manager.js`.
1. It listens for commands: `node manager.js create`.
2. When run, it creates a file named `log.txt` with the text: "Server started at [Date]".
3. Prove you can control the Operating System!
