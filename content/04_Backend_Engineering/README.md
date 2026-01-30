# 04. Backend Engineering ⚙️

The "Server Side". This is where business logic lives and data is processed securely.

## 🎯 Learning Objectives
- [ ] Build a server that listens for requests.
- [ ] Create an API (Application Programming Interface).
- [ ] Secure your application (Authentication).

## 🗺️ The Path

### [1. Node.js & Runtime Environments](./01_Node_Runtime.md)
- Understanding that JavaScript can run outside the browser.
- **npm**: installing packages like `express`, `uuid`, etc.
- **File System**: Reading and writing files on the server.

### [2. REST API Design](./02_REST_API_Design.md)
- **Methods**: GET (Read), POST (Create), PUT/PATCH (Update), DELETE (Remove).
- **Status Codes**:
    - 200 (OK)
    - 201 (Created)
    - 400 (Bad Request)
    - 401 (Unauthorized)
    - 404 (Not Found)
    - 500 (Server Error)
- **Endpoints**: Naming conventions e.g., `/api/users`.

### [3. Authentication & Security](./03_Auth_and_Security.md)
- **Hashing**: Never save passwords in plain text! Use `bcrypt`.
- **JWT (JSON Web Tokens)**: A passport for the user to stay logged in.
- **Middleware**: Code that runs *before* the final controller (e.g., checking if user is admin).

## 🛠️ Project: "Task Manager API"
Build a REST API with Express.js where you can:
1. Register/Login users.
2. Create a To-Do item.
3. Get a list of your own To-Do items.
4. Delete an item.
