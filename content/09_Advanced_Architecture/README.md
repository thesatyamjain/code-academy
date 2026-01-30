# 09. Advanced Architecture 🏛️

Building systems that serve millions of users without crashing.

## 🎯 Learning Objectives
- [ ] Understand Scalability (Vertical vs Horizontal).
- [ ] Design distributed systems.
- [ ] Secure applications against hackers.

## 🗺️ The Path

### [1. System Design Concepts](./01_System_Design.md)
- **Load Balancing**: Distributing traffic across multiple servers.
- **Microservices vs Monolith**: Breaking a giant app into small, independent services.
- **CAP Theorem**: Consistency, Availability, Partition Tolerance.

### [2. Message Queues](./02_Message_Queues.md)
- **Kafka / RabbitMQ**.
- Asynchronous processing (e.g., "Send email" -> Don't wait, throw it in the queue).

### [3. Security (OWASP Top 10)](./03_App_Security.md)
- SQL Injection.
- XSS (Cross-Site Scripting).
- CSRF (Cross-Site Request Forgery).

## 🛠️ Project: "URL Shortener Design"
Write a design document (not just code) for a Bit.ly clone.
- How do you generate unique short IDs?
- How do you handle redirects?
- How do you store analytics (clicks)?
- What happens if 1 million people click at once?
