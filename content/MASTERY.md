# 🎓 The Path to Mastery

So, you want to be a **Master**?
Reading is not enough. You must build.

This guide gamifies your journey into **4 Levels**.
You cannot advance to the next level until you complete the **Checkpoint Project**.

---

## 🐣 Level 1: The Scripter (Modules 01-03)
**Goal**: You understand the machine, can write logic, and build simple interfaces.

### 📚 Syllabus
1.  **Foundations**: Binary, Terminal, Git.
2.  **Frontend**: HTML, CSS, JavaScript DOM.
3.  **Language**: Python Logic, JS Deep Dive.

### 🛑 Checkpoint Project: "The Weather CLI"
Build a tool that runs in your terminal.
- **Requirement 1**: User types `node weather.js London`.
- **Requirement 2**: Script fetches data from `wttr.in/London` (or any free API).
- **Requirement 3**: It prints the result nicely formatted in the console.
- **Requirement 4**: Git commit every change. Push to GitHub.

---

## 🔨 Level 2: The Builder (Modules 04-06)
**Goal**: You can build a full application from scratch (Database to UI).

### 📚 Syllabus
1.  **Backend**: Node.js, REST APIs, Auth (JWT).
2.  **Database**: SQL (Relational) & Mongo (NoSQL).
3.  **Frameworks**: React, Next.js, Tailwind.

### 🛑 Checkpoint Project: "Orbit Task Manager"
Build a real web app.
- **Requirement 1**: **Login System**. Users must sign up (securely hashed passwords).
- **Requirement 2**: **Dashboard**. View, Create, Edit, Delete (CRUD) tasks.
- **Requirement 3**: **Database**. Save tasks in PostgreSQL or MongoDB.
- **Requirement 4**: **UI**. Make it look "Premium" using Tailwind CSS.

---

## 🚀 Level 3: The Professional (Modules 07-08)
**Goal**: Your code is robust, efficient, and deploys automatically.

### 📚 Syllabus
1.  **DevOps**: Docker, CI/CD, Linux.
2.  **CS Core**: Data Structures, Big O, Algorithms.

### 🛑 Checkpoint Project: "Orbit Goes Live"
Take your Level 2 project and make it production-ready.
- **Requirement 1**: **Dockerize it**. Create a `Dockerfile` so it runs anywhere.
- **Requirement 2**: **CI Pipeline**. GitHub Actions should run tests automatically on every push.
- **Requirement 3**: **Optimization**. Refactor one slow function using a Hash Map or Algorithm improvement. Explain the Big O difference in comments.

---

## 👑 Level 4: The Architect (Modules 09-10)
**Goal**: You design systems that scale to millions of users and integrate AI.

### 📚 Syllabus
1.  **Architecture**: System Design, Message Queues (Kafka/RabbitMQ), Security.
2.  **Future Tech**: LLMs, Prompt Engineering, AI SDKs.

### ☠️ FINAL BOSS: "SocialGenius"
Build the ultimate platform. This proves you are a Master.

**The Pitch**: A high-scale social media API where AI moderates the content.

**Technical Requirements:**
1.  **Microservices**: Split the app into 3 services:
    - `Auth Service`: Handles User Login.
    - `Post Service`: Handles creating/reading posts.
    - `AI Worker`: A background service (Python/Node).
2.  **Message Queue**: When a user creates a Post, the `Post Service` does **not** save it immediately. It pushes it to a **Queue** (RabbitMQ/Redis).
3.  **AI Moderation**: The `AI Worker` pulls the post from the Queue, sends it to OpenAI/Gemini to check for toxicity.
    - If **Safe**: Save to DB.
    - If **Toxic**: Ban the user.
4.  **Caching**: Use **Redis** to cache the "Trending Posts" feed so the DB doesn't melt.
5.  **Rate Limiting**: Stop users from spamming (Max 5 posts/minute).

---

## 🏆 Graduation
If you build **SocialGenius**, you are no longer a student.
You are a **Senior Software Engineer**.

Go build the future. 🌍
