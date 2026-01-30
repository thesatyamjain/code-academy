# 03. Linux Basics 🐧

You can be a coder on Windows or Mac.
But the Internet runs on Linux.
To be a Backend Engineer, you must be comfortable in the dark screen (Terminal).

## 1. SSH: Entering the Matrix
You don't have a monitor attached to your Cloud Server. You have a cable.
`ssh user@192.168.1.1`
Congratulations, your typing is now happening on a computer 1,000 miles away.

## 2. Permissions: Who Goes There?
Every file has a security guard.
Run `ls -l` to see the badges: `rwx`.
- **r**ead (See it)
- **w**rite (Edit it)
- **x**ecute (Run it)

**Dangerous Commands:**
`chmod 777 file` = "Access for Everyone." (Don't do this).
`chown root file` = "Only the Admin owns this."

## 3. Process Management
Sometimes an app freezes. You can't click "X" to close it.
- `ps aux`: List every ghost in the machine.
- `htop`: The Task Manager. Shows you what is eating your RAM.
- `kill -9 1234`: "Sniper Shot" to process ID 1234. It dies instantly.

## 4. Essential Survival Kit
- `grep "error" log.txt`: "Find the word 'error' in this massive file."
- `curl google.com`: "Download this page via text."
- `tail -f app.log`: "Watch the log file update in real-time."
