# 02. Message Queues 📨

When systems need to talk, but shouldn't wait.

## 1. The Waiter Analogy
- **Synchronous (Bad)**: The waiter takes your order, walks to the kitchen, **waits** for the chef to cook it, brings it to you, and *then* takes the next table's order. The restaurant would go bankrupt.
- **Asynchronous (Good)**: The waiter puts your ticket on a spike (Queue) and immediately goes to the next table. The Chef (Consumer) pulls tickets when ready.

## 2. Decoupling: Safety in Distance
If the Kitchen catches fire, the Waiter can still take orders (they just pile up).
In code: If your Email Service crashes, your User Signups shouldn't fail. They should just sit in the **Queue** until the Email Service wakes up.

## 3. Tools of the Trade
- **RabbitMQ**: The reliable postman. "I promise this letter gets delivered once."
- **Kafka**: The firehose. "Here is a stream of 1 million events per second. Drink what you can."

## 4. Producer / Consumer
- **Producer**: Your App. "Send Welcome Email." -> Pushed to Queue.
- **Consumer**: A background worker. "Oh, a new job." -> Sends Email.
