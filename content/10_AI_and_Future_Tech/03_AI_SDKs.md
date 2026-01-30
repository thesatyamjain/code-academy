# 03. AI SDKs 🔌

Chatting with ChatGPT is fun.
But the money is in **Integration**.
Building apps that use AI as a brain inside the machine.

## 1. The API Request
It's just HTTP. Even the smartest AI is just a web server waiting for a POST request.

```javascript
import OpenAI from 'openai';

// 1. Authenticate
const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

// 2. Send the Prompt
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
});

// 3. Read the Answer
console.log(response.choices[0].message.content);
```

## 2. System Prompts: The Invisible Hand
You can send a message with `role: "system"`.
The user never sees this. It's valid instruction from the developer to the bot.
`System: "You are a helpful assistant who ONLY speaks in rhymes."`
Now, no matter what the user asks, the bot obeys the rhyme rule.

## 3. Embeddings: Search with Meaning
Keywords are dead. Long live Semantics.
- **Keyword Search**: searching "Dog" finds "Dog".
- **Vector Search (Embeddings)**: searching "Dog" finds "Puppy", "Hound", and "Canine".

We turn text into numbers (Vectors). "King" is mathematically close to "Queen". "Hot" is far away from "Cold".
This powers "Related Articles" and "Semantic Search".
