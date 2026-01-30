# 07. DevOps & Cloud ☁️

"It works on my machine" is not an excuse. You must ship it to the world.

## 🎯 Learning Objectives
- [ ] Containerize applications (Docker).
- [ ] Automate testing and deployment (CI/CD).
- [ ] Configure basic cloud infrastructure.

## 🗺️ The Path

### [1. Docker](./01_Docker.md)
- **Problem**: Dependent libraries version mismatch.
- **Solution**: A "Container" that holds your code and OS settings.
- **Dockerfile**: The recipe for your container.
- **Docker Compose**: Orchestrating multiple containers (App + DB) locally.

### [2. CI/CD (Continuous Integration / Deployment)](./02_CI_CD_Pipelines.md)
- **GitHub Actions**: Automated workflows.
- "Every time I push code, run the tests. If they pass, deploy to production."

### [3. Linux Basics](./03_Linux_Basics.md)
- Navigating a headless server via SSH.
- Permissions (`chmod`, `chown`).
- Process management (`ps`, `kill`, `htop`).

## 🛠️ Project: "Deploy Your API"
Take the Task Manager API from Module 04 and:
1. Dockerize it.
2. Push it to a cloud provider (e.g., Render, Railway, or AWS EC2).
3. Set up a pipeline so it auto-updates when you push to GitHub.
