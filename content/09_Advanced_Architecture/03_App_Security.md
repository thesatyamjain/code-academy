# 03. App Security (OWASP) 🛡️

Security isn't a feature. It's a requirement.
Hackers are automated, ruthless, and always looking for a door you left unlocked.

## 1. SQL Injection: The Oldest Trick
The header enters text that tricks your database into running evil commands.

**Scenario**: You ask for a username.
**Hacker Types**: `admin'; DROP TABLE users; --`
**Result**: Your code runs: `SELECT * FROM users WHERE name = 'admin'; DROP TABLE users;`
**Outcome**: You just lost your entire database.

*Fix*: Parameterized Queries. Never glue strings together.

## 2. XSS (Cross-Site Scripting)
The hacker makes *your* website attack *your* users.
They post a comment that contains hidden JavaScript. When other users load the page, that script runs and steals their login cookies.

*Fix*: Sanitize inputs. React does this automatically (it refuses to run script tags in content).

## 3. CSRF: The Forgery
A hacker sends you an email: "Click here for a free iPhone!"
You click. The link actually sends a request to `your-bank.com/transfer-money`.
Since you are logged into your bank, the bank thinks *you* did it.

*Fix*: CSRF Tokens. A secret handshake that proves the request came from your actual banking tab, not an email link.
