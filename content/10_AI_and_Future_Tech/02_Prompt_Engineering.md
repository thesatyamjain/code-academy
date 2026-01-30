# 02. Prompt Engineering 💬

English is the new hottest programming language.
But just like Python, syntax matters. Garbage In, Garbage Out.

## 1. Be Specific (The "Do What I Mean" Problem)
**Bad**: "Write code for a game."
**Good**: "Write a Python script using the Pygame library. Create a window 800x600. The player controls a red square that moves with arrow keys."

*Why?* Constraint breeds creativity. If you don't choose, the AI guesses (and usually guesses wrong).

## 2. Personas
"Act as a Senior Security Engineer."
This is a magic spell. It tells the AI which part of its massive brain to activate. It stops sounding like a generic assistant and starts sounding like an expert.

## 3. Chain of Thought (CoT)
AI is bad at mental math. It tries to rush to the answer.
**Hack**: Ask it to "Think step by step."
This forces it to show its work.
- "First, I will parse the data..."
- "Second, I will filter the list..."
- "Therefore, the answer is..."
Accuracy skyrockets.

## 4. Few-Shot Prompting
Don't describe the pattern. **Show** the pattern.

**Prompt:**
```text
Convert this slang to corporate:
"My bad" -> "Apologies for the oversight"
"No way" -> "Unfortunately that is not possible"
"Gimme" -> [AI fills this in]
```
The AI instantly understands the game.
