# 🧠 Module 09 Quiz: Advanced Architecture

## Question 1: Load Balancer
What is the job of a Load Balancer (like NGINX)?
- [ ] To make the database faster.
- [ ] To distribute incoming traffic across multiple servers so no single server crashes.
- [ ] To encrypt passwords.
- [ ] To host the frontend.

## Question 2: Microservices
What is the main *downside* of Microservices vs Monolith?
- [ ] It is harder to scale.
- [ ] It is less secure.
- [ ] It introduces extreme complexity (network latency, distributed logging, deployment coordination).
- [ ] It is slower to write code.

## Question 3: Message Queues
Why use RabbitMQ or Kafka instead of just calling an API directly?
- [ ] To ensure visual consistency.
- [ ] Decoupling. The sender can "Fire and Forget" rapidly without waiting for the slow receiver to finish processing.
- [ ] To save hard drive space.
- [ ] To compress images.

## Question 4: CAP Theorem
The CAP Theorem says you can only pick 2 of these:
- [ ] Consistency, Availability, Performance.
- [ ] Consistency, Availability, Partition Tolerance.
- [ ] Cost, Availability, Partition Tolerance.
- [ ] Code, Apps, People.

## Open Question
How does **Horizontal Scaling** (adding more machines) differ from **Vertical Scaling** (buying a bigger machine)?

---
<details>
<summary>Click to reveal Answers</summary>

1. **To distribute incoming traffic...**
2. **It introduces extreme complexity...**
3. **Decoupling...**
4. **Consistency, Availability, Partition Tolerance**
</details>
