# 01. Docker 🐳

The infamous developer phrase: *"But it works on my machine!"*
Docker killed that excuse.

## 1. What is a Container?
Think of a **Shipping Container**.
It doesn't matter what's inside (Cars, Bananas, Electronics) or what ship carries it. It just fits.

A **Docker Container** is a standard box for your code. Use Linux? Windows? Mac? The container doesn't care. It brings its own OS, libraries, and tools with it.

## 2. Dockerfile: The Recipe
This is the instruction manual for building the box.

```dockerfile
# 1. Start with a Node.js environment
FROM node:18

# 2. Create an App folder
WORKDIR /app

# 3. Copy our files in
COPY . .

# 4. Install libraries
RUN npm install

# 5. Open a port
EXPOSE 3000

# 6. Run the app
CMD ["npm", "start"]
```

## 3. Key Commands
- `docker build -t my-app .`: "Cook this recipe." (Creates an Image).
- `docker run -p 3000:3000 my-app`: "Start the container." (Runs an Instance).

## 4. Docker Compose: The Fleet
Apps aren't lonely. They have friends (Databases, Caches).
**Compose** lets you define your whole fleet in one file.

`docker-compose.yml`:
```yaml
version: '3'
services:
  api:
    build: .
  db:
    image: postgres
```
Run `docker-compose up` and your entire infrastructure spins up in seconds.
