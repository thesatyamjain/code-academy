# 03. Authentication & Security 🔐

This is the only code that can destroy your company.
If you mess up a button color, users get annoyed. If you mess up security, users get their identities stolen.

## 1. Hashing: The One-Way Trip
**NEVER** store passwords in plain text.
Imagine your database is leaked (it happens to Facebook, it can happen to you).

❌ **Bad Database:**
`User: Alice | Password: password123` (Hacker logs in as Alice instantly).

✅ **Good Database (Hashed):**
`User: Alice | Password: $2b$10$nOUIs5kJ7naTuTFkBy1euOzq...`

**Why?** You cannot reverse the hash. You can't turn that scrambled mess back into "password123".
When Alice logs in, we hash her input and compare it to the stored hash. If they match, she's in.

**Library:** `bcrypt`.

## 2. AuthN vs AuthZ
- **Authentication (AuthN)**: "ID Card". Are you who you say you are? (Login).
- **Authorization (AuthZ)**: "Key Card". Can you enter this room? (Admin access).

## 3. JWT: The Stateless Passport
In the old days, servers remembered every user in memory (Sessions). If you had 1 million users, your server ran out of RAM.

**Enter JWT (JSON Web Token).**
Instead of remembering you, I give you a **signed badge**.
You carry this badge. Every time you ask for data, you show the badge.

**Structure:** `Header.Payload.Signature`
- **Payload**: `{ "userId": 123, "role": "admin" }`
- **Signature**: A mathematical seal using a `SECRET_KEY`.

If a hacker tries to change "admin" to "true", the signature breaks.

## 4. Middleware: The Bouncer
Don't check for passwords inside every single function.
Put a Bouncer (Middleware) at the door.

```javascript
// The Bouncer
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: "No badge, no entry." });
    
    // Check signature
    jwt.verify(token, 'MY_SECRET', (err, user) => {
        if (err) return res.status(403).json({ error: "Fake badge!" });
        req.user = user; // Attach user info to request
        next(); // Let them pass
    });
}

// Protected Route
app.get('/dashboard', verifyToken, (req, res) => {
    res.json({ message: `Welcome back, ${req.user.id}` });
});
```
